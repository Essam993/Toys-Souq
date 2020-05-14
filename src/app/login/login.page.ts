import { Component, OnInit } from '@angular/core';
import { ApiService } from './../common/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToasterChildService } from './../toaster/toaster-child.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loadingController: LoadingController, private apiService: ApiService, private http: HttpClient,
    private router: Router, public toaster: ToasterChildService) { }

  ngOnInit() {

  }


  login() {
    this.router.navigate(['/store']);
  }


}
