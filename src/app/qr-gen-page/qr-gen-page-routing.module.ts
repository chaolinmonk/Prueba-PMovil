import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrGenPagePage } from './qr-gen-page.page';

const routes: Routes = [
  {
    path: '',
    component: QrGenPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrGenPagePageRoutingModule {}
