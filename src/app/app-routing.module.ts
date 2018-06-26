import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fta',
    loadChildren: './ft-a/ft-a.module#FtAModule'
  },
  {
    path: 'ftb',
    loadChildren: './ft-b/ft-b.module#FtBModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
