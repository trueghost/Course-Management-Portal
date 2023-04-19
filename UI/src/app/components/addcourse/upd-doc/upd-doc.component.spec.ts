import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdDocComponent } from './upd-doc.component';

describe('UpdDocComponent', () => {
  let component: UpdDocComponent;
  let fixture: ComponentFixture<UpdDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
