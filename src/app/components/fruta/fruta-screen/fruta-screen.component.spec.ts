import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaScreenComponent } from './fruta-screen.component';

describe('FrutaScreenComponent', () => {
  let component: FrutaScreenComponent;
  let fixture: ComponentFixture<FrutaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
