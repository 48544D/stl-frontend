import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeroComponent } from './home/hero/hero.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OperationsComponent } from './home/operations/operations.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescriptionComponent } from './home/description/description.component';
import { NotreTabsComponent } from './home/notre-tabs/notre-tabs.component';
import { SolutionsComponent } from './home/solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HeroComponent,
    OperationsComponent,
    HomeComponent,
    DescriptionComponent,
    NotreTabsComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
