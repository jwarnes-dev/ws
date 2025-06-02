import { Component } from '@angular/core';
import { TypographyVariant } from 'angular-willow';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {
  constructor() { }
  type = TypographyVariant;

  copyToClipboard(code: string): void {
    // Define the actual code to copy based on the id
    let textToCopy = '';
    
    if (code === 'import module code') {
      textToCopy = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularWillowModule } from 'angular-willow';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularWillowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;
    } else if (code === 'component template code') {
      textToCopy = `<!-- In your component template -->
<willow-typography [variant]="type.Body">
  This is a body text example
</willow-typography>

<willow-typography [variant]="type.Heading1">
  This is a heading example
</willow-typography>`;
    } else if (code === 'component class code') {
      textToCopy = `import { Component } from '@angular/core';
import { TypographyVariant } from 'angular-willow';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent {
  // Make the enum accessible in the template
  type = TypographyVariant;
}`;
    } else {
      textToCopy = code;
    }
    
    // Create temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    
    // Select and copy text
    textarea.select();
    document.execCommand('copy');
    
    // Remove textarea
    document.body.removeChild(textarea);
    
    // Provide visual feedback (optional)
    const button = document.activeElement as HTMLElement;
    const originalText = button.innerText;
    button.innerText = 'Copied!';
    
    setTimeout(() => {
      button.innerText = originalText;
    }, 2000);
  }
} 