import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from './../app.service';
import { ApiService } from './../common/api.service';
import { ToastController } from '@ionic/angular';
import { Api } from './../common/api.request';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  categories: any;
  products: any;
  cartItems: any;
  badgeValue: any;
  originalProducts: any;
  constructor(private loadingController: LoadingController, private appService: AppService,
    private apiService: ApiService, private http: HttpClient,
    public toastController: ToastController, public navCtrl: NavController, private router: Router) {
    this.cartItems = [];
    this.badgeValue = JSON.parse(localStorage.getItem('badgeValue'));
    this.products = [];
  }


  ngOnInit() {
    this.getCategories();

    this.setOriginalProducts();

    this.getProducts();
  }

  ionViewWillEnter() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));

    this.badgeValue = JSON.parse(localStorage.getItem('badgeValue'));

  }




  getCategories() {
    this.categories = [
      {
        id: "1",
        name: "LEGO"
      },
      {
        id: "2",
        name: "Cars & Trucks"
      },
      {
        id: "3",
        name: "New Born"
      },
      {
        id: "4",
        name: "Avengers"
      },
    ];
  }



  getProducts() {
    this.products = [];
    this.products = this.originalProducts
  }

  setOriginalProducts() {
    this.originalProducts = [
      {
        id: 1,
        category_id: "1",
        name: "Mindstorm Ev3",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/51X7eHsK5oL._AC_SX425_.jpg",
        price: 120,
        qty: 1
      },
      {
        id: 1,
        category_id: "1",
        name: "Lego Buzzle",
        description: "Best toy ever , you would love to buy it for your kids.",
        image_url: "https://www.robot-advance.com/EN/ori-medium-creative-brick-box-lego-classic-10696-2301.jpg",
        price: 50,
        qty: 1
      },
      {
        id: 2,
        category_id: "2",
        name: "Cars set",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://www.dhresource.com/0x0/f2/albu/g9/M00/35/C5/rBVaWF3wpQ6AGHByAARr_u5PMrQ684.jpg",
        price: 20,
        qty: 1
      },
      {
        id: 3,
        category_id: "3",
        name: "baby rattles",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://ae01.alicdn.com/kf/HTB1J8ZWAcyYBuNkSnfoq6AWgVXa1/Baby-Rattles-Toys-Newborn-Hand-Bells-Baby-Toys-0-12-Months-Teething-safe-Development-Infant-Early.jpg",
        price: 70,
        qty: 1
      },
      {
        id: 3,
        category_id: "3",
        name: "Dummy time",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://cdn.shopify.com/s/files/1/0066/2182/3091/products/51u8WwkgXsL._UL1500.jpg?v=1571965078",
        price: 60,
        qty: 1
      },
      {
        id: 6,
        category_id: "4",
        name: "Avengers set",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/81hz3Jx1r8L._SL1500_.jpg",
        price: 60,
        qty: 1
      },
      {
        id: 7,
        category_id: "4",
        name: "Iron Patriot",
        description: "Best toy ever , you would love to buy it for your kids .",
        image_url: "https://www.mythfactoryshop.com/23115-large_default/iron-patriot-hot-toys-mms547d34-avengers-endgame.jpg",
        price: 35,
        qty: 1
      },

    ];
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

    this.badgeValue += 1;

    localStorage.setItem('badgeValue', JSON.stringify(this.badgeValue));

  }




  openDetailsWithState(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        product: item
      }
    };
    this.router.navigate(['product'], navigationExtras);
  }

  getProductsByCategory(id) {
    id = id.detail['value'];
    if (id != 0) {
      this.products = [];
      this.originalProducts.forEach(element => {
        if (element.category_id == id) {
          this.products.push(element);
        }
      });
    } else {
      this.search('');
    }



  }

  search(q) {
    if (q && q.trim() != '') {
      this.products = this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(q.toLowerCase()) > -1);
      })
    } else {
      this.getProducts();
    }

  }

}
