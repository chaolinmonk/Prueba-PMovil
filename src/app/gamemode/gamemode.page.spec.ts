import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamemodePage } from './gamemode.page';

describe('GamemodePage', () => {
  let component: GamemodePage;
  let fixture: ComponentFixture<GamemodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GamemodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
