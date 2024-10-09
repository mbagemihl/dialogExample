import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SomeService} from './some.service';
import {SomeDialogComponent} from './some-dialog/some-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dialogExapample';
  dialog = inject(MatDialog);
  service = inject(SomeService);

  constructor() {
    this.service.getDummyValue().subscribe(value => {
      if (value) {
        this.dialog.open(SomeDialogComponent, {height: "400px", width: "400px", data: value})
      }
    })
  }
}
