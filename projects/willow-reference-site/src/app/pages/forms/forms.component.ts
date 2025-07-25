import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TypographyVariant } from '@wellmark/angular-willow';

interface SelectOption {
  id: string | number;
  value: string;
}

interface CheckboxOption {
  id: string | number;
  value: string;
}

export interface ValidationMessage {
  controlName: string;
  message: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  standalone: false
})
export class FormsComponent {
  type = TypographyVariant;
  
  // Contact Form
  contactForm!: FormGroup;
  
  // Survey Form
  surveyForm!: FormGroup;
  
  // Registration Form
  registrationForm!: FormGroup;
  
  // Form submission states
  isSubmitting = false;
  submitMessage = '';
  
  // Alert messages for willow-alert components
  contactFormMessages: ValidationMessage[] = [];
  surveyFormMessages: ValidationMessage[] = [];
  registrationFormMessages: ValidationMessage[] = [];
  
  // Select options using correct Willow interfaces
  countryOptions: SelectOption[] = [
    { id: 'us', value: 'United States' },
    { id: 'ca', value: 'Canada' },
    { id: 'uk', value: 'United Kingdom' },
    { id: 'de', value: 'Germany' },
    { id: 'fr', value: 'France' },
    { id: 'jp', value: 'Japan' }
  ];
  
  categoryOptions: SelectOption[] = [
    { id: 'general', value: 'General Inquiry' },
    { id: 'support', value: 'Technical Support' },
    { id: 'sales', value: 'Sales Question' },
    { id: 'feedback', value: 'Product Feedback' },
    { id: 'other', value: 'Other' }
  ];

  // Radio options as string array for Willow
  satisfactionOptions: string[] = [
    'Very Satisfied',
    'Satisfied', 
    'Neutral',
    'Dissatisfied',
    'Very Dissatisfied'
  ];

  // Checkbox options using correct Willow interface
  featureOptions: CheckboxOption[] = [
    { id: 'easeOfUse', value: 'Ease of Use' },
    { id: 'performance', value: 'Performance' },
    { id: 'design', value: 'Design' },
    { id: 'support', value: 'Customer Support' }
  ];

  constructor(private fb: FormBuilder) {
    this.initializeForms();
  }

  private initializeForms() {
    // Contact Form
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
      category: ['', Validators.required],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      agreeToTerms: [false, Validators.requiredTrue],
      newsletter: [false]
    });

    // Survey Form
    this.surveyForm = this.fb.group({
      overallSatisfaction: ['', Validators.required],
      recommendations: [''],
      features: [[], Validators.required], // Array for checkbox list
      comments: ['']
    });

    // Registration Form
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      birthDate: [''],
      bio: [''],
      terms: [false, Validators.requiredTrue],
      marketing: [false]
    });
  }

  onContactSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.contactFormMessages = [];
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.contactFormMessages = [
          { controlName: 'success', message: 'Thank you! Your message has been sent successfully.' }
        ];
        this.contactForm.reset();
      }, 2000);
    } else {
      this.markFormGroupTouched(this.contactForm);
      this.contactFormMessages = [
        { controlName: 'error', message: 'Please correct the errors above.' }
      ];
    }
  }

  onSurveySubmit() {
    if (this.surveyForm.valid) {
      console.log('Survey submitted:', this.surveyForm.value);
      this.surveyFormMessages = [
        { controlName: 'success', message: 'Thank you for your feedback!' }
      ];
      this.surveyForm.reset();
    } else {
      this.markFormGroupTouched(this.surveyForm);
      this.surveyFormMessages = [
        { controlName: 'error', message: 'Please fill in all required fields.' }
      ];
    }
  }

  onRegistrationSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      if (formData.password !== formData.confirmPassword) {
        this.registrationFormMessages = [
          { controlName: 'error', message: 'Passwords do not match!' }
        ];
        return;
      }
      console.log('Registration submitted:', formData);
      this.registrationFormMessages = [
        { controlName: 'success', message: 'Registration successful!' }
      ];
      this.registrationForm.reset();
    } else {
      this.markFormGroupTouched(this.registrationForm);
      this.registrationFormMessages = [
        { controlName: 'error', message: 'Please correct the errors above.' }
      ];
    }
  }

  onMessageClick(message: ValidationMessage) {
    console.log('Alert message clicked:', message);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Helper methods for validation display
  isFieldInvalid(form: FormGroup, fieldName: string): boolean {
    const field = form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  shouldShowErrors(form: FormGroup, fieldName: string): boolean {
    return this.isFieldInvalid(form, fieldName);
  }

  getFieldError(form: FormGroup, fieldName: string): string {
    const field = form.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${this.getFieldDisplayName(fieldName)} is required.`;
      if (field.errors['email']) return 'Please enter a valid email address.';
      if (field.errors['minlength']) return `${this.getFieldDisplayName(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters.`;
      if (field.errors['pattern']) return 'Please enter a valid format.';
    }
    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const displayNames: { [key: string]: string } = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      category: 'Category',
      subject: 'Subject',
      message: 'Message',
      agreeToTerms: 'Terms Agreement',
      overallSatisfaction: 'Overall Satisfaction',
      features: 'Features',
      username: 'Username',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      country: 'Country',
      terms: 'Terms and Conditions'
    };
    return displayNames[fieldName] || fieldName;
  }

  // Helper to get FormControl for binding to Willow components
  getControl(form: FormGroup, fieldName: string): FormControl {
    return form.get(fieldName) as FormControl;
  }
} 