import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-center-gaming',
  standalone: true,
  imports: [],
  templateUrl: './footer-center-gaming.component.html',
  styleUrl: './footer-center-gaming.component.css'
})
export class FooterCenterGamingComponent {
  toggleSetting(overlay:HTMLElement)
  {
    overlay.style.display = "block";
  }
  CloseButton(overlay:HTMLElement)
  {
    overlay.style.display="none";
  }
}
