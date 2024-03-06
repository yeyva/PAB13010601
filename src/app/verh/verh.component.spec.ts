import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerhComponent } from './verh.component';

describe('VerhComponent', () => {
  let component: VerhComponent;
  let fixture: ComponentFixture<VerhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
