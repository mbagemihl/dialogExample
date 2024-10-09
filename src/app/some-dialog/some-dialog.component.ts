import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-some-dialog',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './some-dialog.component.html',
  styleUrl: './some-dialog.component.css'
})
export class SomeDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);
  closeWithReturnValue() {
    this.dialogRef.close(123)
  }

}
