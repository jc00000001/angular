import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BookinfoComponent } from './bookinfo/bookinfo.component';
import {BookService} from './services/book.service';
import { SiglebookComponent } from './siglebook/siglebook.component';
import { BookfilterComponent } from './bookfilter/bookfilter.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookinfoComponent,
    SiglebookComponent,
    BookfilterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
