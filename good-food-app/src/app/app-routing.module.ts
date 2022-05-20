import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ArticleComponent } from './article/article.component';
import { CommandComponent } from './command/command.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenusComponent } from './menus/menus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'menu-component', component: MenusComponent },
  { path: 'command-component', component: CommandComponent },
  { path: 'login-component', component: LoginComponent },
  { path: 'profile-component', component: ProfileComponent },
  { path: 'register-component', component: RegisterComponent },
  { path: 'shopping-cart-component', component: ShoppingCartComponent },
  { path: 'validation-component', component: ValidationComponent },
  { path: 'add-address-component', component: AddAddressComponent },
  { path: 'add-card-component', component: AddCardComponent },
  //{ path: 'article-component/:id', component: ArticleComponent },
  { path: 'article-component', component: ArticleComponent },
  { path: '', redirectTo: '/home-component', pathMatch: 'full' }, // redirect to 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
