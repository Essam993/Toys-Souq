import { Component, OnInit } from '@angular/core';
import { ApiService } from './../common/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToasterChildService } from './../toaster/toaster-child.service';
import { Api } from './../common/api.request';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient,
    private router: Router, public toaster: ToasterChildService) { }

  ngOnInit() {
  }

  sendMail(email: string) {



  }

}
