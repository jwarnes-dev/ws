import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularWillowModule } from '@wellmark/angular-willow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { ColorpageComponent } from './pages/colorpage/colorpage.component';
import { ThreadedMessagesPageComponent } from './pages/threaded-messages-page/threaded-messages-page.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { TablesComponent } from './pages/tables/tables.component';
import { StartpageComponent } from './pages/startpage/startpage.component';
import { HomeComponent } from './pages/home/home.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { DesignComponent } from './pages/design/design.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { AlertComponent } from './pages/alert/alert.component';
import { ButtonComponent } from './pages/button/button.component';
import { CardComponent } from './pages/card/card.component';
import { FormsComponent } from './pages/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TypographyComponent,
    ColorpageComponent,
    ThreadedMessagesPageComponent,
    AboutpageComponent,
    TablesComponent,
    StartpageComponent,
    HomeComponent,
    DevelopersComponent,
    DesignComponent,
    RoadmapComponent,
    AlertComponent,
    ButtonComponent,
    CardComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularWillowModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
