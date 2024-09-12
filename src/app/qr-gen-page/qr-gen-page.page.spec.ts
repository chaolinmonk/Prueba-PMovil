import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrGenPagePage } from './qr-gen-page.page';

describe('QrGenPagePage', () => {
  let component: QrGenPagePage;
  let fixture: ComponentFixture<QrGenPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrGenPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
