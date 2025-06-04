import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lumaButtonComponent } from './button/button.component';



@NgModule({
  declarations: [lumaButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    lumaButtonComponent
  ]
})
export class lumaButtonsModule { }
