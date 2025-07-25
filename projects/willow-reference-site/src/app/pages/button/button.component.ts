import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: false
})
export class ButtonComponent {
  constructor() { }
  type = TypographyVariant;

  // Button interaction examples
  clickCount = 0;
  isLoading = false;
  isDisabled = false;
  isSubmitting = false;

  onButtonClick(buttonType: string) {
    this.clickCount++;
    console.log(`${buttonType} button clicked! Total clicks: ${this.clickCount}`);
  }

  onLoadingExample() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('Loading completed!');
    }, 2000);
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  resetCounter() {
    this.clickCount = 0;
  }
} 