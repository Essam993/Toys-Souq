import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from './../common/api.request';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
// import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  products: any;
  productAmount: any = [{
    name: 'Cart Subtotal',
    price: '0.00'
  }, {
    name: 'Discount',
    price: '0.00'
  }, {
    name: 'Shipping',
    price: '0.00'
  }];
  cartData: any;
  cartTotals: any;
  badgeValue: any;

  constructor(private loadingController: LoadingController, private appService: AppService,
    private router: Router, private route: ActivatedRoute, private http: HttpClient,
    public toastController: ToastController, public modalController: ModalController) {

    this.cartData = JSON.parse(localStorage.getItem('cartItems'));
    this.badgeValue = JSON.parse(localStorage.getItem('badgeValue'));
    this.cartTotals = JSON.parse(localStorage.getItem('cartTotals'));

  }

  ngOnInit() {

    this.getCartTotals();

  }

  ionViewWillEnter() {
    this.cartData = JSON.parse(localStorage.getItem('cartItems'));
  }


  myCart() {
    this.cartData = [
      {
        name: "Product 1",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://cdn.shopify.com/s/files/1/0275/0241/1855/products/product-image-1151920448.jpg?v=1571749023",
        price: 120,
        qty: 2
      },
      {
        name: "Product 2",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://cdn.productsafety.gov.au/sites/www.productsafety.gov.au/files/styles/accc_psa_page_large_square/public/Building-blocks.jpg?itok=2LMcQktv",
        price: 110,
        qty: 3
      },
      {
        name: "Product 3",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://cf3.s3.souqcdn.com/item/2019/01/19/43/69/30/35/item_L_43693035_5cc060f3477cf.jpg",
        price: 20,
        qty: 1
      },
    ]
  }

  getCartTotals() {
    if (this.cartData.length > 0) {
      this.cartTotals.base_subtotal = 0;

      this.cartData.forEach(item => {
        this.cartTotals.base_subtotal += item.price * item.qty;
        this.cartTotals.grand_total = this.cartTotals.base_subtotal + 35;
      });
    } else {

      this.cartTotals.grand_total = 0;

    }
    this.cartTotals.base_shipping_amount = 35;

    localStorage.removeItem('cartTotals');
    localStorage.setItem('cartTotals', JSON.stringify(this.cartTotals));

  }


  removeProduct(data) {

    this.cartData.forEach((val, index) => {
      if (val.name == data.name) {
        this.cartData.splice(index, 1);

        this.cartTotals.base_subtotal -= (data.price * data.qty);

        this.cartTotals.grand_total -= (data.price * data.qty);

        this.badgeValue -= data.qty;

        if (this.cartTotals.base_subtotal == 0) {
          this.cartTotals.base_shipping_amount = 0;
          this.cartTotals.grand_total = 0;
        }
      }
    });


    localStorage.setItem('cartItems', JSON.stringify(this.cartData));
    localStorage.setItem('cartTotals', JSON.stringify(this.cartTotals));
    if (this.badgeValue < 0) {
      localStorage.setItem('badgeValue', JSON.stringify(0));
    } else {
      localStorage.setItem('badgeValue', JSON.stringify(this.badgeValue));
    }





  }

  increment(data) {

    this.cartData.forEach((val, index) => {

      if (val.name == data.name) {

        val.qty += 1;

        this.cartTotals.base_subtotal += data.price;

        this.cartTotals.grand_total += data.price;

        this.badgeValue += 1;

      }

      localStorage.setItem('cartItems', JSON.stringify(this.cartData));
      localStorage.setItem('cartTotals', JSON.stringify(this.cartTotals));
      localStorage.setItem('badgeValue', JSON.stringify(this.badgeValue));

    });

  }


  decrement(data) {
    this.cartData.forEach((val, index) => {

      if (val.name == data.name) {

        if ((data.qty - 1) > 0) {

          data.qty -= 1;

          this.cartTotals.base_subtotal -= data.price;

          this.cartTotals.grand_total -= data.price;

          this.badgeValue -= 1;

        }
      }

      localStorage.setItem('cartItems', JSON.stringify(this.cartData));
      localStorage.setItem('cartTotals', JSON.stringify(this.cartTotals));
      if (this.badgeValue < 0) {
        localStorage.setItem('badgeValue', JSON.stringify(0));
      }

      localStorage.setItem('badgeValue', JSON.stringify(this.badgeValue));


    });

  }

  toSubmitOrder() {
    
    localStorage.removeItem('cartTotals');
    
    localStorage.setItem('cartTotals', JSON.stringify(this.cartTotals));

    console.log(this.cartTotals);

    console.log(JSON.parse(localStorage.getItem('cartTotals')));

    this.router.navigate(['/submit-order']);

  }


}
