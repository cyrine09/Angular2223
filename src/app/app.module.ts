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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NnavComponent,
    FooterComponent,
    OffresEmploiComponentComponent,
    ArticlesComponent
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
