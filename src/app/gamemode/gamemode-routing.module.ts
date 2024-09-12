import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamemodePage } from './gamemode.page';

const routes: Routes = [
  {
    path: '',
    component: GamemodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamemodePageRoutingModule {}
