import { Component } from '@angular/core';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ClientComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  dialog: any;

  openClientDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '100%', 
      data: {} 
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The registration dialog was closed');
    });
  }
}
