import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerComponent } from './custumer.component';

describe('CustumerComponent', () => {
  let component: CustumerComponent;
  let fixture: ComponentFixture<CustumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
