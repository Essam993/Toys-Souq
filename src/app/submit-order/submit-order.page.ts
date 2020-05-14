import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
import { ToasterChildService } from './../toaster/toaster-child.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.page.html',
  styleUrls: ['./submit-order.page.scss'],
})
export class SubmitOrderPage implements OnInit {
  @Input() name: string;
  countries: any;
  regions: any;
  hideState: any;
  orders: any;
  cartItems: any;
  cartTotals: any;
  badgeValue: any;

  constructor(private loadingController: LoadingController,
    public modalCtrl: ModalController, public toaster: ToasterChildService,
    private router: Router, private httpClient: HTTP,
    private http: HttpClient, public toastController: ToastController,
  ) {

    this.countries = [];
    this.regions = [];
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.orders = JSON.parse(localStorage.getItem('orders'));
    this.cartTotals = JSON.parse(localStorage.getItem('cartTotals'));
    this.badgeValue = JSON.parse(localStorage.getItem('badgeValue'));

    this.hideState = false;

    console.log(JSON.parse(localStorage.getItem('cartTotals')));

    console.log(this.cartTotals);

    console.log(this.cartTotals.base_subtotal, this.cartTotals.base_shipping_amount, this.cartTotals.grand_total);
  }

  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countries = [
      {
        name: "Germany"
      },
      {
        name: "Egypt"
      },
      {
        name: "India"
      },
      {
        name: "Bahrin"
      },
    ]
  }

  catched(value: any) {
    this.regions = [
      {
        name: "Region 1"
      },
      {
        name: "Region 2"
      },
      {
        name: "Region 3"
      },
      {
        name: "Region 4"
      },
    ];

  }

  submitForm(form: any) {
    console.log(this.cartTotals);
    let total_price = 0;

    this.cartItems.forEach(element => {
      total_price += element.price;
    });


    let order = {
      "id": Math.floor(Math.random() * (9 * Math.pow(10, 6 - 1))) + Math.pow(10, 6 - 1),
      "total_price": this.cartTotals.grand_total,
      "items_count": this.badgeValue,
      "date": new Date().toISOString(),
      "time" : new Date().toLocaleTimeString()

    }

    this.orders.push(order);

    localStorage.setItem('orders', JSON.stringify(this.orders));


    this.cartItems = [];

    localStorage.setItem('cartItems', JSON.stringify([]));
    // localStorage.setItem('cartTotals', JSON.stringify([
    //   {
    //     base_subtotal: 0,
    //     base_discount_amount: 0,
    //     base_shipping_amount: 35,
    //     grand_total: 0
    //   }
    // ]));
    localStorage.setItem('badgeValue', JSON.stringify(0));

    this.router.navigate(['order']);

  }


}
