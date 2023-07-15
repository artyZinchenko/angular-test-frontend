import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMainComponent } from './icon-main.component';

describe('IconMainComponent', () => {
  let component: IconMainComponent;
  let fixture: ComponentFixture<IconMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
