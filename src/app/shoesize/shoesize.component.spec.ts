import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesizeComponent } from './shoesize.component';

describe('ShoesizeComponent', () => {
  let component: ShoesizeComponent;
  let fixture: ComponentFixture<ShoesizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
