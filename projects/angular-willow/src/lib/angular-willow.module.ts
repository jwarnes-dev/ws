import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularWillowComponent } from './angular-willow.component';
import { ThreadedMessageComponent } from './threaded-message/threaded-message.component';
import { ThreadedMessagesListComponent } from './threaded-messages-list/threaded-messages-list.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { TypographyComponent } from './typography/typography.component';
import { ColorSwatchComponent } from './color-swatch/color-swatch.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AngularWillowComponent,
    ThreadedMessageComponent,
    ThreadedMessagesListComponent,
    UploadFormComponent,
    TypographyComponent,
    ColorSwatchComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularWillowComponent,
    ThreadedMessagesListComponent,
    ThreadedMessageComponent,
    TypographyComponent,
    ColorSwatchComponent,
    TableComponent
  ]
})
export class AngularWillowModule { }
