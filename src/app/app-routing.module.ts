import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsSportsComponent } from './news-sports/news-sports.component';

const routes: Routes = [
  {
    path: 'news',
    children: [
      {
        path: '',
        component: NewsCardComponent,
      },
      {
        path: 'sports',
        component: NewsSportsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
