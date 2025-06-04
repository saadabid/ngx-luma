import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lumaButtonComponent } from './button.component';

describe('ButtonsComponent', () => {
  let component: lumaButtonComponent;
  let fixture: ComponentFixture<lumaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lumaButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(lumaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
