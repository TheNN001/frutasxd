import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaDescComponent } from './fruta-desc.component';

describe('FrutaDescComponent', () => {
  let component: FrutaDescComponent;
  let fixture: ComponentFixture<FrutaDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutaDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
