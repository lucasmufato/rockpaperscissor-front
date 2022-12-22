import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgainstComputerComponent } from './against-computer.component';

describe('AgainstComputerComponent', () => {
  let component: AgainstComputerComponent;
  let fixture: ComponentFixture<AgainstComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgainstComputerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgainstComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
