import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { MoreInfoComponent } from './components/home/more-info/more-info.component';
import { HomeComponent } from './components/home/home.component';
import { WatchesComponent } from './components/watches/watches.component';
import { HistoryComponent } from './components/history/history.component';
import { CraftsmenshipComponent } from './components/craftsmenship/craftsmenship.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';

import { BestService } from './services/best.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MoreInfoComponent,
    HomeComponent,
    WatchesComponent,
    HistoryComponent,
    CraftsmenshipComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [BestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
