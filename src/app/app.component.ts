import { Component } from '@angular/core';
import { IImageContent } from './contacts/image-content/iimage-content';
import { secondStoryCost, groundFloorCost } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly imageContents: IImageContent[] =[
    {
      img: 'bruce_2nd_story.jpeg',
      imgAlt: 'Cleaning Window',
      title: '2nd Story Windows',
      content: `All 2nd story windows can be cleaned (safely) whether they’d be a skylight window, large arch windows, or regular windows. Any dirt, cobwebs, flies, etc.. on or around the window are also cleaned off. These windows are priced at $${secondStoryCost} per window.`,
      reversed: true
    },
    {
      img: 'bruce_ground_floor_1.jpeg',
      imgAlt: 'Cleaning Window',
      title: 'Ground Floor Windows',
      content: `Patio doors, windowpanes, garage windows, and all types of windows are cleaned with precision.  Any dirt, cobwebs, flies, etc.. on or around the window are also cleaned off. These windows are priced at $${groundFloorCost} per window.`,
      reversed: false
    },
    {
      img: 'bruce_screen.jpeg',
      imgAlt: 'Cleaning Window',
      title: 'Screens',
      content: 'Surprisingly, screens can collect a bunch of dirt and flies. These are cleaned to ensure your window can stay clean longer. Screens are priced at $1 per screen.',
      reversed: true
    }
  ];
}
