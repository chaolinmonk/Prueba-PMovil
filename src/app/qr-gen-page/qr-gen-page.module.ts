import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGenPagePageRoutingModule } from './qr-gen-page-routing.module';

import { QrGenPagePage } from './qr-gen-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGenPagePageRoutingModule
  ],
  declarations: [QrGenPagePage]
})
export class QrGenPagePageModule {}
