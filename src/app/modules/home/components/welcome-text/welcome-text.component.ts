import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-welcome-text',
    templateUrl: './welcome-text.component.html',
    styleUrls: ['./welcome-text.component.scss'],
    animations: [
        trigger('slide', [
            state('out', style({ transform: 'translateY(0)' })),
            transition('void => *', [style({ transform: 'translateY(-250%)' }), animate(2000)]),
        ]),
    ],
})
export class WelcomeTextComponent implements OnInit {
    @Input() text = 'Melissa S. Langhausen - Front End Developer Projects';

    constructor() {}

    ngOnInit(): void {}
}
