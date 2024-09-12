import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-revealed-list',
  templateUrl: './revealed-list.component.html',
  styleUrls: ['./revealed-list.component.scss'],
})
export class RevealedListComponent  implements OnInit {
  showItems = false;
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {}
  toggleItems() {
    this.showItems = !this.showItems;
  }
  showAction(){
    console.log('Action performed');
  }
  goTo(direccion : string  = '/home')  {
    this.router.navigateByUrl(direccion)
  }
}
