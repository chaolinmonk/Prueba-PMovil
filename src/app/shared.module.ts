import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';
import { RevealedListComponent } from './revealed-list/revealed-list.component';
import { CTableComponent } from './c-table/c-table.component';
@NgModule({
  declarations: [
    NavBarComponent,
    RevealedListComponent,
    CTableComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    NavBarComponent,
    RevealedListComponent,
    CTableComponent
  ]
})
export class SharedModule { }
