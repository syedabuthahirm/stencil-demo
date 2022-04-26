import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stencil';

  @HostListener('buttonClicked',['$event'])
  onMyComponentButtonClick(event: any) {
    console.log(event, 'clicked');
  }
}
