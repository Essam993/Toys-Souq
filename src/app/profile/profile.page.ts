import { Component, OnInit } from '@angular/core';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Api } from './../common/api.request';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileUrl = "https://ionicframework.com/docs/demos/api/avatar/avatar.svg";



  constructor(private photoLibrary: PhotoLibrary, private camera: Camera,
    private http: HttpClient, public toastController: ToastController,
    private loadingController: LoadingController) {

  }

  ngOnInit() {
  }



  submitForm(form: any) {


  }


}
