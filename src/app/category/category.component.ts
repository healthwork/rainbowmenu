import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Category} from "../shared/Category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit
{
    @Input() category: Category;
    @Input() imgClass: string;
    @Input() buttonClass: string;

    @Output() buttonClick: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    onClick(expressionIndex: number)
    {
        this.buttonClick.emit(expressionIndex);
    }

    ngOnInit()
    {
    }
}
