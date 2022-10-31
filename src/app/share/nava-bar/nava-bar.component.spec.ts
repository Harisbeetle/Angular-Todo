import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaBarComponent } from './nava-bar.component';

describe('NavaBarComponent', () => {
  let component: NavaBarComponent;
  let fixture: ComponentFixture<NavaBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavaBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
