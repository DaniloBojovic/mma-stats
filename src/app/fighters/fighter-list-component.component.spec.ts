import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterListComponentComponent } from './fighter-list-component.component';

describe('FighterListComponentComponent', () => {
  let component: FighterListComponentComponent;
  let fixture: ComponentFixture<FighterListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FighterListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
