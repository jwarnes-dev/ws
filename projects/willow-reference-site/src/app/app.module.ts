import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularWillowModule } from 'angular-willow';
import { FormsModule } from '@angular/forms';
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
    RoadmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularWillowModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
