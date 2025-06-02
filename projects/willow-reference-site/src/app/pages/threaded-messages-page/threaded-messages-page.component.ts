import { Component } from '@angular/core';
import { TypographyVariant, ThreadedMessage } from 'angular-willow';

@Component({
  selector: 'app-threaded-messages-page',
  templateUrl: './threaded-messages-page.component.html',
  styleUrls: ['./threaded-messages-page.component.scss']
})
export class ThreadedMessagesPageComponent {
  constructor() { }
  showReplyForm = false;
  type = TypographyVariant;
  messageText = '';

  toggleReplyForm(): void {
    this.showReplyForm = !this.showReplyForm;
    if (!this.showReplyForm) {
      this.messageText = '';
    }
  }

  sendMessage(): void {
    if (this.messageText.trim()) {
      const newMessage: ThreadedMessage = {
        name: 'John User',
        date: new Date().toISOString(),
        text: this.messageText,
        isRepresentative: false,
        correspondence: '32457862457'
      };
      this.messages = [...this.messages, newMessage];
      this.toggleReplyForm();
    }
  }

  messages: ThreadedMessage[] = [
    { name: "Jane Smith", date: "2024-03-07", text: `Posuere vitae massa fermentum arcu. Nec aliquet tristique enim sagittis orci id. Proin nam fames elementum pellentesque. Volutpat nunc a sit nisl ac scelerisque id. Eget adipiscing tortor mauris lectus lectus. Aliquet ac morbi egestas arcu at id euismod lacus. Porta neque mi vel neque ultrices placerat mattis praesent enim.`, isRepresentative: true, correspondence: "32457862457" },
    { name: "John Doe", date: "2024-03-08", text: "Hello, this is a short message.", isRepresentative: false, correspondence: "32457862457" },
    { name: "Jane Smith", date: "2024-03-09", text: `Lorem ipsum dolor sit amet consectetur. Amet mi mi suspendisse rhoncus risus metus tristique tellus vulputate.
      
Quis auctor commodo lectus a pellentesque. Dictumst maecenas nulla amet erat sodales vitae pulvinar dictumst interdum. In et facilisi consectetur lorem eros tortor sapien consequat. Adipiscing mi ac eget cursus sit diam felis tellus mattis. In aliquet mauris tristique nisl senectus eu vulputate congue. Posuere vitae massa fermentum arcu. Nec aliquet tristique enim sagittis orci id. Proin nam fames elementum pellentesque. Volutpat nunc a sit nisl ac scelerisque id. Eget adipiscing tortor mauris lectus lectus. Aliquet ac morbi egestas arcu at id euismod lacus. Porta neque mi vel neque ultrices placerat mattis praesent enim.`,
      attachments: [
        { name: "document.pdf", url: "/files/document.pdf" },
        { name: "document2.docx", url: "/files/document2.docx" }],
      isRepresentative: true, correspondence: "32457862457" },
    { name: "Alice Johnson", date: "2024-03-10T08:45:00", text: `In et facilisi consectetur lorem eros tortor sapien consequat. Adipiscing mi ac eget cursus sit diam felis tellus mattis. In aliquet mauris tristique nisl senectus eu vulputate congue. Posuere vitae massa fermentum arcu. Nec aliquet tristique enim sagittis orci id. Proin nam fames elementum pellentesque. Volutpat nunc a sit nisl ac scelerisque id. Eget adipiscing tortor mauris lectus lectus. Aliquet ac morbi egestas arcu at id euismod lacus. Porta neque mi vel neque ultrices placerat mattis praesent enim.`,
      isRepresentative: false, correspondence: "32457862457" }
  ];
} 