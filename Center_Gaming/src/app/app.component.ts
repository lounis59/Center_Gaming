import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterCenterGamingComponent } from './footer-center-gaming/footer-center-gaming.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterCenterGamingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Center_Gaming';
}
