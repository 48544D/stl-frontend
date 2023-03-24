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
import { PortailComponent } from './home/portail/portail.component';
import { ActionsComponent } from './home/actions/actions.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './home/popup/popup.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { ConfianceComponent } from './home/confiance/confiance.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';
import { SolutionsHeaderComponent } from './solutions-page/solutions-header/solutions-header.component';
import { SolutionsTransportComponent } from './solutions-page/solutions-transport/solutions-transport.component';
import { SolutionsChoisirComponent } from './solutions-page/solutions-choisir/solutions-choisir.component';

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
    SolutionsComponent,
    PortailComponent,
    ActionsComponent,
    PopupComponent,
    ReviewsComponent,
    ConfianceComponent,
    SolutionsPageComponent,
    SolutionsHeaderComponent,
    SolutionsTransportComponent,
    SolutionsChoisirComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
