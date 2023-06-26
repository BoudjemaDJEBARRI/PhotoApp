import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexedDBPhotoPage } from './indexed-dbphoto.page';

const routes: Routes = [
  {
    path: '',
    component: IndexedDBPhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexedDBPhotoPageRoutingModule {}
