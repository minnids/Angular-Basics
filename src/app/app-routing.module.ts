import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsSportsComponent } from './news-sports/news-sports.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'news',
    children: [
      {
        path: '',
        component: NewsCardComponent,
        pathMatch:'full'
      },
      {
        path: 'sports',
        component: NewsSportsComponent,
        pathMatch:'full'
      },
    ],
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signup-react',
    component:SignupReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
