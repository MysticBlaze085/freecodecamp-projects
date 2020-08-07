import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styles: [],
})
export class HomePageComponent implements OnInit {
    startingImage: { src: string; alt: string } = { src: '/assets/images/Woman.png', alt: 'B&W sketch of a woman' };
    constructor() {}

    ngOnInit(): void {}
}
