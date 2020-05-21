import { Component } from '@angular/core';
import { IImageContent } from './contacts/image-content/iimage-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly imageContents: IImageContent[] =[
    {
      img: 'cleaning_window.jpg',
      imgAlt: 'Cleaning Window',
      title: '2nd Story Windows and Up',
      content: 'I wash second story windows and up. Here is some information about it.',
      reversed: true
    },
    {
      img: 'cleaning_window.jpg',
      imgAlt: 'Cleaning Window',
      title: 'Ground Floor Windows',
      content: 'I wash ground floor windows. Here is some information about it.',
      reversed: false
    },
    {
      img: 'cleaning_window.jpg',
      imgAlt: 'Cleaning Window',
      title: 'Screens',
      content: 'I wash screens. Here is some information about it.',
      reversed: true
    }
  ];
}
