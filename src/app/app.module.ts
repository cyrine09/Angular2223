import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NnavComponent } from './nnav/nnav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddproduitComponent } from './Core/ProductsManager/addproduit/addproduit.component';
import { UpdateproduitComponent } from './Core/ProductsManager/updateproduit/updateproduit.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NnavComponent,
    FooterComponent,
    OffresEmploiComponentComponent,
    ArticlesComponent,
    LoginComponent,
    AddProductComponent,
    HeaderComponent,
    NotFoundComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
