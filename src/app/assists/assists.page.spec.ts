import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistsPage } from './assists.page';

describe('AssistsPage', () => {
  let component: AssistsPage;
  let fixture: ComponentFixture<AssistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
