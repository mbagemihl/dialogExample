import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDialogComponent } from './some-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('SomeDialogComponent', () => {
  let component: SomeDialogComponent;
  let fixture: ComponentFixture<SomeDialogComponent>;

  const mockDialogRef = {
    close: jest.fn()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should call dialogRef.close with the correct parameters', () => {
    component.closeWithReturnValue();
    expect(mockDialogRef.close).toHaveBeenCalledWith(123);
    expect(mockDialogRef.close).toHaveBeenCalledTimes(1);
  })
});
