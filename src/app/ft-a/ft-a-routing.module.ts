import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FtAComponent } from './ft-a.component';

const routes: Routes = [
  {
    path: '',
    component: FtAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtARoutingModule {}
