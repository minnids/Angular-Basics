import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HandBonesModule } from './hand-bones/hand-bones.module';
import { SharedModule } from './shared/shared.module';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsSportsComponent } from './news-sports/news-sports.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NewsCardComponent,
    NewsSportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HandBonesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
