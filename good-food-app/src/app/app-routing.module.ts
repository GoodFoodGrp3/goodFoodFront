import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard-service';
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
import { MainHomeComponent } from './main-home/main-home.component';
import { PaymentComponent } from './payment/payment.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'main-home', component: MainHomeComponent },
  { path: 'menu', component: MenusComponent },
  { path: 'command', component: CommandComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'validation', component: ValidationComponent, canActivate: [AuthGuard] },
  { path: 'add-address', component: AddAddressComponent, canActivate: [AuthGuard] },
  { path: 'add-card', component: AddCardComponent, canActivate: [AuthGuard] },
  { path: 'comments', component: CommentsComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent/* , canActivate: [AuthGuard] */ },
  //{ path: 'article-component/:id', component: ArticleComponent },
  { path: 'article-component', component: ArticleComponent },
  { path: '', redirectTo: '/main-home', pathMatch: 'full' }, // redirect to 
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
