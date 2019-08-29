import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../shared/Category";

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit
{
    @Input() category: Category;
    @Input() imgClass: string;
    @Input() buttonClass: string;
    @Input() categoryLength = 6;

    @Output() buttonClick: EventEmitter<number> = new EventEmitter<number>();

    @Input() socials = [];

    constructor() { }

    onClick(expressionIndex: number)
    {
        this.buttonClick.emit(expressionIndex);
        this.socials[expressionIndex] = null;
    }

    ngOnInit()
    {
    }
}
