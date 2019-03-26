import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EuromillonComponent } from './euromillon/euromillon.component';
import { AboutComponent } from './about/about.component';
import { FavoritosDBService } from './services/favoritos-db.service';
import { MongoDBService } from './services/mongo-db.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'euromillon', component: EuromillonComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ) ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, FavoritosComponent, HomeComponent, NotFoundComponent, EuromillonComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ FavoritosDBService, MongoDBService]
})
export class AppModule { }
