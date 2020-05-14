import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  // { path: 'address', loadChildren: './address/address.module#AddressPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  // { path: 'schedules', loadChildren: './schedules/schedules.module#SchedulesPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  // { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  // { path: 'faqs', loadChildren: './faqs/faqs.module#FaqsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  // { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'submit-order', loadChildren: './submit-order/submit-order.module#SubmitOrderPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
