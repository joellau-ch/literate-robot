import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDerivedComponent } from './dashboard-derived.component';

describe('DashboardDerivedComponent', () => {
  let component: DashboardDerivedComponent;
  let fixture: ComponentFixture<DashboardDerivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDerivedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDerivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
