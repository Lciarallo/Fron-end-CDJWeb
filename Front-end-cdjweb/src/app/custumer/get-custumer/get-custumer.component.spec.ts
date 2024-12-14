import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustumerComponent } from './get-custumer.component';

describe('GetCustumerComponent', () => {
  let component: GetCustumerComponent;
  let fixture: ComponentFixture<GetCustumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCustumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
