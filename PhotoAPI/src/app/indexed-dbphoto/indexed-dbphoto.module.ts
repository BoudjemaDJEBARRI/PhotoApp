import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexedDBPhotoPageRoutingModule } from './indexed-dbphoto-routing.module';

import { IndexedDBPhotoPage } from './indexed-dbphoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexedDBPhotoPageRoutingModule
  ],
  declarations: [IndexedDBPhotoPage]
})
export class IndexedDBPhotoPageModule {}
