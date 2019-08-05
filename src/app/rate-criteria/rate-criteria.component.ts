import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {Category} from "../shared/Category";
import {DigitCounterComponent} from "../digit-counter/digit-counter.component";
import {Expression} from "../shared/Expression";
import {RatingComponent} from "../rating/rating.component";

@Component({
  selector: "app-rate-criteria",
  templateUrl: "./rate-criteria.component.html",
  styleUrls: ["./rate-criteria.component.css"]
})
export class RateCriteriaComponent implements OnInit
{
    @Input() rateMap;// = [];
    //@Input() rateCategoryMapList;
    @Input() i;

    @Input() rateObject = [];
    //@Input() rateUnitIndex = [];
    rateUnitIndex = 1;

    //@ViewChildren("rate") rate;
    @ViewChild("rate", {static: false}) rate: RatingComponent;


    constructor() { }

    updateDays(days: number, index: number)
    {
        this.rateObject[index]["timeDays"] = days;
        this.rateObject[index]["timeHours"] = 0;
        this.rateObject[index]["timeMinutes"] = 0;
    }

    updateHours(hours: number, index: number)
    {
        this.rateObject[index]["timeDays"] = 0;
        this.rateObject[index]["timeHours"] = hours;
    }

    updateMinutes(minutes: number, index: number)
    {
        this.rateObject[index]["timeDays"] = 0;
        this.rateObject[index]["timeMinutes"] = minutes;
    }

    updateFractionalRate(index: number, map: Map<string, Category>)
    {
        let fractional_sum = 0;

        map.get("FRACTIONAL_RATE").expressionList.forEach(expression => {
            if(expression.isEnabled)
                fractional_sum += Number(expression.getDefinition());
        });

        this.rateObject[index]["fractional_rate"] = fractional_sum;
    }

    updateRate(event: number, index: number, map: Map<string, Category>)
    {
        const rateUnit = Number(map.get("RATE").getExpression(0).getDefinition());
        this.rateObject[index]["rate"] = (rateUnit * (event + 1));
    }

    updateRedOrange(index: number, map: Map<string, Category>)
    {
        if(map.get("RATE").getExpression(0).getDefinition() !== "130000")
            return;

        this.rateObject[index]["fractional_rate"] = 0;
        this.rateObject[index]["rate"] = 130000;
    }

//--------------------------------------------------------------------------------------------------------------------------------

    enableDigits(elems: DigitCounterComponent[], expression: Expression)
    {
        if(!expression.isEnabled)
        {
            expression.flipEnabled();
            elems.forEach(elem => elem.cycleDigit(0));
        }
    }

    cycleFractionalRate(map: Map<string, Category>)
    {
        if(this.rateUnitIndex === 0)
            map.get("FRACTIONAL_RATE").expressionList = map.get("FRACTIONAL_ROSES").expressionList;
        else if(this.rateUnitIndex === 1)
            map.get("FRACTIONAL_RATE").expressionList = map.get("FRACTIONAL_DIAMONDS").expressionList;
        else if(this.rateUnitIndex === 2)
            map.get("FRACTIONAL_RATE").expressionList = map.get("FRACTIONAL_GOLD").expressionList;
        else
            map.get("FRACTIONAL_RATE").expressionList = [];
    }

    cycleRateUnit(map: Map<string, Category>, x: number)
    {
        map.get("RATE_UNITS").getSelectedExpression().disable();

        map.get("RATE").expressionList = map.get(map.get("RATE_UNITS").getSelectedExpression().getDefinition()).expressionList;
        map.get("FRACTIONAL_RATE").expressionList.forEach(unit => unit.disable());

        this.cycleFractionalRate(map);

        this.rateUnitIndex += 1;

        if(this.rateUnitIndex === 4)
            this.rateUnitIndex = 0;

        map.get("RATE_UNITS").setSelectedExpression(this.rateUnitIndex);

        map.get("RATE").expressionList.forEach(unit => unit.disable());

        if(this.rateUnitIndex === 0)
            map.get("130000").getExpression(0).enable();

        if(this.rateUnitIndex !== 1)
            this.rate.expressionIndex = -1;

        this.rateObject[x]["rate"] = 0;

        this.updateRedOrange(x, map);
    }

    ngOnInit() { }
}
