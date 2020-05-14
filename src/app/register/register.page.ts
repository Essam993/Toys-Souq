import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToasterChildService } from './../toaster/toaster-child.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private loadingController: LoadingController,
    private router: Router, private httpClient: HTTP, private http: HttpClient,
    public toastController: ToastController, public toaster: ToasterChildService) {

  }

  ngOnInit() {
  }

  register(form: any) {


  }

 



}
