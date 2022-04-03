import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrutaIconComponent } from './fruta-icon.component';

describe('FrutaIconComponent', () => {
  let component: FrutaIconComponent;
  let fixture: ComponentFixture<FrutaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutaIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
