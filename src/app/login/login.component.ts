import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public dialog: MatDialog) {}

  openClientDialog(): void {
    const dialogRef = this.dialog.open(ClientComponent, {
      width: '100%',
      height:'100%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The client dialog was closed');
    });
  }
}
