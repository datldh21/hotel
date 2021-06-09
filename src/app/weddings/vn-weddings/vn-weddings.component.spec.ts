import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnWeddingsComponent } from './vn-weddings.component';

describe('VnWeddingsComponent', () => {
  let component: VnWeddingsComponent;
  let fixture: ComponentFixture<VnWeddingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnWeddingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VnWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
