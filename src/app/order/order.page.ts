import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orders : any;

  constructor(private loadingController: LoadingController, 
    private http: HttpClient, 
    private route: ActivatedRoute,
     private router: Router) {

      this.orders = JSON.parse(localStorage.getItem('orders'));
  }

  ngOnInit() {
  }

}
