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

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'typography', pathMatch: 'full' },
      { path: 'typography', component: TypographyComponent },
      { path: 'colors', component: ColorpageComponent },
      { path: 'threaded-messages', component: ThreadedMessagesPageComponent },
      { path: 'about', component: AboutpageComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'start', component: StartpageComponent },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
