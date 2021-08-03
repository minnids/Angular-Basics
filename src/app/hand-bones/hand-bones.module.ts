import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandBonesComponent } from './hand-bones.component';
import { ScaphoidComponent } from './scaphoid/scaphoid.component';
import { LynateComponent } from './lynate/lynate.component';
import { PysyformComponent } from './pysyform/pysyform.component';

@NgModule({
  declarations: [
    HandBonesComponent,
    ScaphoidComponent,
    LynateComponent,
    PysyformComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HandBonesComponent
  ]
})
export class HandBonesModule { }
