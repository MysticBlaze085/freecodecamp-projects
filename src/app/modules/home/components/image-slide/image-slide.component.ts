import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
    selector: 'app-image-slide',
    templateUrl: './image-slide.component.html',
    styleUrls: ['./image-slide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translate(0)' })),
            transition('void => *', [
                style({ transform: 'translate(100%)' }),
                animate(2000),
                animate(
                    2000,
                    keyframes([
                        style({ transform: 'scale(1,1) translateY(0)' }),
                        style({ transform: 'scale(1.1, 0.9) translateY(0)' }),
                        style({ transform: 'scale(0.9, 1.1) translateY(-100px)' }),
                        style({ transform: 'scale(1.05, 0.95) translateY(0)' }),
                        style({ transform: 'scale(1,1) translateY(-7px)' }),
                        style({ transform: 'scale(1,1) translateY(0)' }),
                    ])
                ),
            ]),
        ]),
    ],
})
export class ImageSlideComponent implements OnInit {
    @Input() image: { src: string; alt: string };

    constructor() {}

    ngOnInit(): void {}
}
