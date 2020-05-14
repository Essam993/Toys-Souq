import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  // orderNow:boolean;
  // shedule:boolean;
  // cashon:boolean;
  // payByCredit:boolean;
  constructor(public toastController: ToastController,private router: Router) { }
  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      cssClass: "toasterStyle",
    });
    toast.present();
  }
  ngOnInit() {
  }
  
  payCredit(){
    // this.payByCredit = false;
    this.presentToast("credit will be available soon");
    return;
  }
  check(){
    // if((!this.orderNow || !this.shedule) && !this.cashon){
    //   this.presentToast("Please select Delivery and payment way to continue your request");
    //   return;
    // }
    let cartData = [];
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(cartData)
      }
    };
    this.router.navigate(['/order'],navigationExtras)
  }
}
