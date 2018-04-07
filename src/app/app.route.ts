import {Route} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BookinfoComponent} from './bookinfo/bookinfo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes : Route[] = [
  {path: "", redirectTo:"/home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "allbooks", component: BookinfoComponent},
  {path: "**", component: PageNotFoundComponent}
];
