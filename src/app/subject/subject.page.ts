import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  showItems = false;
  constructor() { }

  ngOnInit() {
  }
  toggleItems() {
    this.showItems = !this.showItems;
  }

}
