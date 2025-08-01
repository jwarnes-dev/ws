import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { TabsPageComponent } from './pages/tabs-page/tabs-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'start', component: StartpageComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'colors', component: ColorpageComponent },
      { path: 'alert', component: AlertComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'card', component: CardComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'tabs', component: TabsPageComponent },
      { path: 'threaded-messages', component: ThreadedMessagesPageComponent },
      { path: 'about', component: AboutpageComponent },
      { path: 'home', component: HomeComponent },
      { path: 'developers', component: DevelopersComponent },
      { path: 'design', component: DesignComponent },
      { path: 'roadmap', component: RoadmapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
