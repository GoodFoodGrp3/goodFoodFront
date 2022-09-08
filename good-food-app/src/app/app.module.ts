import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenusComponent } from './menus/menus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ValidationComponent } from './validation/validation.component';
import { ArticleComponent } from './article/article.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './profile/profile.component';
import { CommandComponent } from './command/command.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginService } from './services/login-service';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { RegisterService } from './services/register.service';
import { MainHomeComponent } from './main-home/main-home.component';
import { StripeModule } from 'stripe-angular';
import { PaymentComponent } from './payment/payment.component';
import { SearchArticlesPipe } from './tools/search-articles.pipe';
import { FilterPipe } from './tools/filter.pipe';
import { CommentsComponent } from './comments/comments.component';
import { CommentModalComponent } from './modals/comment-modal/comment-modal.component';
import { CommentDeleteComponent } from './modals/comment-delete/comment-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingCartComponent,
    MenusComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    RegisterComponent,
    AddAddressComponent,
    ValidationComponent,
    ArticleComponent,
    ProfileComponent,
    CommandComponent,
    MainHomeComponent,
    PaymentComponent,
    SearchArticlesPipe,
    FilterPipe,
    CommentsComponent,
    CommentModalComponent,
    CommentDeleteComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    AppRoutingModule,
    StripeModule.forRoot(""),
    BrowserAnimationsModule
  ],
  providers: [LoginService, ProductService, CustomerService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
