import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
