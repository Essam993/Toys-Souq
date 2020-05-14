import { Component } from '@angular/core';
import { Api } from './common/api.request';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#ffffff');
      this.splashScreen.hide();

      localStorage.setItem('badgeValue', JSON.stringify(0));
      localStorage.setItem('cartItems', JSON.stringify([]));
      localStorage.setItem('orders', JSON.stringify([]));
      localStorage.setItem('cartTotals', JSON.stringify(
        {
          base_subtotal: 0,
          base_discount_amount: 0,
          base_shipping_amount: 35,
          grand_total: 0
        }
      ));

    });
  }
}
