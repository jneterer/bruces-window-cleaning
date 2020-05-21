import { Component, Input, OnInit } from '@angular/core';
import { IImageContent } from '../contacts/image-content/iimage-content';

@Component({
  selector: 'app-image-content',
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss']
})
export class ImageContentComponent implements OnInit {
  @Input() data: IImageContent;

  constructor() { }

  ngOnInit(): void {
  }

}
