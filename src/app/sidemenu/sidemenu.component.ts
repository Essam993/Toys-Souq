import { Component, OnInit } from '@angular/core';
import { appPages } from './../app-pages'
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  pages = appPages;
  userData: any;


  constructor(private router: Router,public menuCtrl: MenuController) {
    this.userData = JSON.parse(localStorage.getItem('userData'));

  }

  ngOnInit() { }

  public logout() {
    localStorage.clear();
    
    sessionStorage.clear();
    
    this.toggleMenu();

    this.router.navigate(['/login'], {});

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
