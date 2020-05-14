import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToasterChildService {

  constructor(public toastController: ToastController) { }

  async show(style: any, msg: any){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: style
    });
    toast.present();
  }
}
