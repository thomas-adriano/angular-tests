import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FtBComponent } from '../ft-b/ft-b.component';

const routes: Routes = [
  {
    path: '',
    component: FtBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtBRoutingModule {}
