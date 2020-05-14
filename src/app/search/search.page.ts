import { Component, OnInit } from '@angular/core';
import { Api } from './../common/api.request';
import { ApiService } from './../common/api.service';
import { AppService } from './../app.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToasterChildService } from './../toaster/toaster-child.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  onBlur
  onInput
  products: any;
  badgeValue: number = 0;
  accessToken: any;
  searchQuery
  quote: any;
  token: any;
  loaderToShow: any;
  cartData: any;
  itemsCount: any;

  constructor(public toastController: ToastController, private loadingController: LoadingController, private apiService: ApiService, private appService: AppService,
    private router: Router, public toaster: ToasterChildService, private http: HttpClient) {
    this.accessToken = JSON.parse(localStorage.getItem('accessToken'));
    this.token = JSON.parse(localStorage.getItem('AuthToken'));
    this.products = [];
    this.quote = JSON.parse(localStorage.getItem('quote_id'));
    this.cartData = [];
    this.itemsCount = 0;

  }

  ngOnInit() {
    this.setBadgeValue();

    this.search('');
  }
  cancel() {
    console.log("cancel clicked");
  }


  setBadgeValue() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token,

      }),
    };


    this.http.get(Api.cart.mineCart, httpOptions)
      .subscribe(res => {
        this.badgeValue = res['items_qty'];
      });
  }

  async search(q) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.accessToken
      })
    };

    await this.http.get(Api.search.products + q + Api.search.likeCondition, httpOptions)
      .subscribe(data => {
        this.products = data['items'];
        this.itemsCount = data['total_count'];

        this.products.forEach(element => {
          element.tick = false;
          element.class = 'selectbtn';

          this.http.get(Api.store.getProductImage + element.sku, httpOptions)
            .subscribe(url => {

              element.image_url = url[0].product_image_url;

            }, error => {
              this.router.navigate(['/search'], {});
            });


        });

      }, error => {
        this.router.navigate(['/search'], {});
      });

  }


  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      cssClass: "toasterStyle",
    });
    toast.present();
  }

  selectProducts(item) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token,

      }),
    };


    this.badgeValue = this.badgeValue + 1;
    this.cartData.push(
      {
        cartItem: {
          'sku': item.sku,
          'qty': 1,
          'quote_id': this.quote
        }
      }
    );

    this.presentToast("Added to Cart");

    this.http.post(Api.cart.cartItems, this.cartData[0], httpOptions)
      .subscribe(res => {
        this.cartData = [];
      });


  }

  myCart() {
    let cartData = [];
    this.products.forEach(element => {
      if (element.tick) cartData.push(
        {
          cartItem: {
            'sku': element.sku,
            'qty': 1,
            'quote_id': this.quote.id
          }
        }
      );

    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token,

      }),
    };

    this.http.post(Api.cart.cartItems, cartData[0], httpOptions)
      .subscribe(res => {
        let navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(cartData)
          }
        };
        this.router.navigate(['/cart'], navigationExtras);
      });



  }

  openDetailsWithState(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        product: item
      }
    };
    this.router.navigate(['product'], navigationExtras);
  }

}
