import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-welcome-text',
    templateUrl: './welcome-text.component.html',
    styleUrls: ['./welcome-text.component.scss'],
})
export class WelcomeTextComponent implements OnInit {
    @Input() text = 'Hi';

    constructor() {}

    ngOnInit(): void {}
}
