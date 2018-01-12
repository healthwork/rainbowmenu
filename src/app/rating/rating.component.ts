import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NGXLogger} from "ngx-logger";
import {Expression} from "../shared/Expression";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"]
})
export class RatingComponent implements OnInit
{
    @Input() expressionList: Expression[];
    @Input() lineBreak = 0;

    @Output() buttonClick: EventEmitter<number> = new EventEmitter<number>();

    expressionIndex = -1;

    constructor
    (
        private LOGGER: NGXLogger
    ){}

    onClick()
    {
        this.buttonClick.emit(this.expressionIndex);
    }

    expressionHighLightClick(index: number)
    {
        if(this.expressionIndex === index)
            this.expressionIndex = -1;
        else
            this.expressionIndex = index;

        this.expressionHighlight(this.expressionIndex);
    }

    expressionHighlight(index: number)
    {
        for(let x = 0; x < (index + 1); x++)
        {
            this.expressionList[x].enable();
        }

        for(let x = index + 1; x < this.expressionList.length; x++)
        {
            this.expressionList[x].disable();
        }
    }

    ngOnInit() {}
}
