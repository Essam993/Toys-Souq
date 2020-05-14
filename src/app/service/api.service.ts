import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  settings = [];
  BaseURL = "http://pharmacy.itambition.com/rest/all/"
  constructor() { 
    this.settings = [{
      currency: this.BaseURL+"V1/directory/currency",
      getAllCountries: "/V1/directory/countries",
      getCountry: "/V1/directory/countries/",
      CreateAccount:"/V1/customers",
      isResetTokenValid: "/V1/customers/",
      resetLink: "/V1/customers/password",
      resetPassword: "/V1/customers/resetPassword",
      isEmailAvailable:"/V1/customers/isEmailAvailable",
      search: "/V1/search",
      productsRenderInfo:"/V1/products-render-info",
      guestCarts:"/V1/guest-carts/",
    }]

  }

  urls(request){
    let value = this.settings.filter(ele=>{
      return ele === request;
    })
    
  }
}
