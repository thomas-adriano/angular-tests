import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtBRoutingModule } from './ft-b-routing.module';
import { FtBComponent } from './ft-b.component';

@NgModule({
  imports: [
    CommonModule,
    FtBRoutingModule
  ],
  declarations: [FtBComponent]
})
export class FtBModule { }
