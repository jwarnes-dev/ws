import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

export interface ValidationMessage {
  controlName: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: false
})
export class AlertComponent {
  constructor() { }
  type = TypographyVariant;

  // Alert message arrays for willow-alert component
  successMessages: ValidationMessage[] = [
    { controlName: 'success', message: 'Success! Your action was completed successfully.' }
  ];

  warningMessages: ValidationMessage[] = [
    { controlName: 'warning', message: 'Warning! Please check your input and try again.' }
  ];

  errorMessages: ValidationMessage[] = [
    { controlName: 'error', message: 'Please fill out all required fields.' }
  ];

  infoMessages: ValidationMessage[] = [
    { controlName: 'info', message: 'Info: Here\'s some helpful information for you.' }
  ];

  dismissibleMessages: ValidationMessage[] = [
    { controlName: 'dismissible', message: 'Dismissible! Click the × to dismiss this alert.' }
  ];

  // Control visibility
  showSuccess = true;
  showWarning = true;
  showError = true;
  showInfo = true;
  showDismissible = true;

  onAlertDismissed(alertType: string) {
    console.log(`${alertType} alert dismissed`);
    if (alertType === 'dismissible') {
      this.showDismissible = false;
    }
  }

  onMessageClick(message: ValidationMessage) {
    console.log('Message clicked:', message);
  }

  resetAlerts() {
    this.showSuccess = true;
    this.showWarning = true;
    this.showError = true;
    this.showInfo = true;
    this.showDismissible = true;
  }
} 