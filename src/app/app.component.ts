import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RegistrationComponent } from "./registration/registration.component";
import { FooterComponent } from './footer/footer.component';
import { VerhComponent } from './verh/verh.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { ButtonModule } from 'primeng/button';
import { MaybeComponent } from './maybe/maybe.component';
import { ClientComponent } from './client/client.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MatToolbarModule,
      ButtonModule, 
      MatButtonModule,
       MatIconModule, 
       RouterOutlet, 
       ToolbarComponent, 
        RegistrationComponent, 
        FooterComponent,
         VerhComponent,
        MaybeComponent,
      ClientComponent]
})
export class AppComponent { 
  title = 'PAB';
};
