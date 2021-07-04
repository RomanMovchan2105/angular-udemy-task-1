import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <p>SUCCESS</p>
  `,
  styles: [`
  p {
    padding: 16px;
    background-color: lightgreen;
    border: 2px solid green;
  }
  `]
})

export class SuccessAlertComponent {

}
