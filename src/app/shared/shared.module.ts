import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    ButtonComponent,
    BlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    BlogComponent
  ]
})
export class SharedModule { }
