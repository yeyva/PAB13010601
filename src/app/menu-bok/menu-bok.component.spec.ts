import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBokComponent } from './menu-bok.component';

describe('MenuBokComponent', () => {
  let component: MenuBokComponent;
  let fixture: ComponentFixture<MenuBokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
