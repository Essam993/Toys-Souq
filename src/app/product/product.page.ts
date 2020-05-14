import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Api } from './../common/api.request';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product: any;
  badgeValue: number = 0;
  cartItems: any;

  // accessToken: any;
  // cartData: any;
  // quote: any;
  // slideOptsOne = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   autoplay:true
  //  };
  // images : any;


  constructor(public toastController: ToastController, 
    private http: HttpClient, 
    private route: ActivatedRoute,
     private router: Router) {
       
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.product = this.router.getCurrentNavigation().extras.state.product;
      }
    });

    this.badgeValue = JSON.parse(localStorage.getItem('badgeValue'));
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));

    // this.images = [];

  }

  ngOnInit() {
    // this.getImages();
    // this.setBadgeValue();

  }

  ionViewWillEnter() {
    // this.setBadgeValue();
  }

  getImages(){


  }

  setBadgeValue() {
   
  }

  addToCart(item) {
    if (this.cartItems.length > 0) {
      let ok = 0;
      this.cartItems.forEach(element => {
        if (element.id === item.id) {
          element.qty += 1;
          ok = 1;
        }
      });
      if (ok == 0) {
        this.cartItems.push(item);
        ok = 0;
      }
    }

    if (this.cartItems.length == 0) {
      this.cartItems.push(item);
    }


    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    // localStorage.setItem('cartTotals', JSON.stringify(
    //   {
    //     base_subtotal: 0,
    //     base_discount_amount: 0,
    //     base_shipping_amount: 35,
    //     grand_total: 0
    //   }
    // ));
    this.badgeValue += 1;

    localStorage.setItem('badgeValue', JSON.stringify(this.badgeValue));

  }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      cssClass: "toasterStyle",
    });
    toast.present();
  }


}
