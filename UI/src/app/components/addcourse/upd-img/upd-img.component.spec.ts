import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdImgComponent } from './upd-img.component';

describe('UpdImgComponent', () => {
  let component: UpdImgComponent;
  let fixture: ComponentFixture<UpdImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
