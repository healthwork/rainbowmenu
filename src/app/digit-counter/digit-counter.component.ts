import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NGXLogger} from "ngx-logger";
import {ExpressionsService} from "../shared/expressions.service";
import {Expression} from "../shared/Expression";

@Component({
  selector: "app-digit-counter",
  templateUrl: "./digit-counter.component.html",
  styleUrls: ["./digit-counter.component.css"]
})
export class DigitCounterComponent implements OnInit
{
    @Input() isYear: boolean;
    @Input() digits: number;
    @Input() default: number[];
    @Input() minValue: number[];
    @Input() maxValue: number[];

    @Input() digitBoundries: any[];
    @Input() digitReset: number;

    @Input() incrementStep = 1;
    @Input() classType = "icon";

    @Input() isEnabled = false;

    array: number[];
    yearDigits: Expression[];

    dummyArray: number[];

    @Output() buttonClick: EventEmitter<number> = new EventEmitter<number>();

    constructor
    (
        private LOGGER: NGXLogger,
        private expressionsService: ExpressionsService
    ){}

    static getNumber(arr: number[]): number
    {
        let sum = 0;
        let multi = 1;

        for(let x = arr.length - 1; x > -1; x--)
        {
            sum += arr[x] * multi;
            multi *= 10;
        }

        return sum;
    }

    static isGreaterThan(arr1: number[], arr2: number[], index?: number)
    {
        let multi = 0;

        if(index != null)
            multi = Math.pow(10, (arr1.length - 1 - index));

        return (DigitCounterComponent.getNumber(arr1) + multi) > DigitCounterComponent.getNumber(arr2);
    }

    static isLessThan(arr1: number[], arr2: number[], index?: number)
    {
        let multi = 0;

        if(index != null)
            multi = Math.pow(10, (arr1.length - 1 - index));

        return (DigitCounterComponent.getNumber(arr1) + multi) < DigitCounterComponent.getNumber(arr2);
    }

    onClick()
    {
        this.buttonClick.emit(DigitCounterComponent.getNumber(this.array));
    }

    resetArray(arr: number[])
    {
        for(let x = 0; x < this.array.length; x++)
        {
            this.array[x] = arr[x];
        }
    }

    getDigitBoudry(index: number):any
    {
        let temp = {"min": 0, "max": 9};

        if(this.digitBoundries != null)
        {
            this.digitBoundries.forEach(digitBoundry =>
            {
                if(digitBoundry.index === index)
                    temp = digitBoundry;
            });
        }

        return temp;
    }

    getNumber(value: number): number[]
    {
        let newArr: number[] = [];

        while(value > 0)
        {
            newArr.push(value % 10);
            value = Math.floor(value / 10);
        }

        return newArr.reverse();
    }

    stepIncrement()
    {
        let arrAsNum = DigitCounterComponent.getNumber(this.array);

        arrAsNum += this.incrementStep;

        this.resetArray(this.getNumber(arrAsNum));
    }

    cycleDigit(index: number)
    {
        const arrAsNum = DigitCounterComponent.getNumber(this.array);
        if(arrAsNum === DigitCounterComponent.getNumber(this.maxValue) ||  !this.yearDigits[0].isEnabled)
        {
            if(this.isYear && index === 3)
            {
                const digitBoundry = this.getDigitBoudry(index);

                if(this.array[index] === digitBoundry.max)
                {
                    this.array[index] = digitBoundry.min;
                    return;
                }
            }

            let tempArray = this.minValue;

            if(!this.yearDigits[0].isEnabled)
            {
                this.yearDigits.forEach(digit => digit.enable());
                tempArray = this.default;
            }

            this.resetArray(tempArray);

            return;
        }

        if(index < this.digitReset)
        {
            if(DigitCounterComponent.isGreaterThan(this.array, this.maxValue, index))
            {
                this.resetArray(this.maxValue);

                return;
            }
            if(DigitCounterComponent.isLessThan(this.array, this.minValue, index))
            {
                this.resetArray(this.minValue);

                return;
            }
        }

        const digitBoundry = (this.isYear && index === 3) ? {"min": 0, "max": 9} : this.getDigitBoudry(index);

        if(this.array[index] === digitBoundry.max)
        {
            this.array[index] = digitBoundry.min;
            return;
        }

        if(this.incrementStep !== 1)
            this.stepIncrement();
        else
        {
            this.array[index]++;
            if(DigitCounterComponent.isGreaterThan(this.array, this.maxValue))
            {
                this.resetArray(this.minValue);
            }
        }
    }

    ngOnInit()
    {
        this.dummyArray = new Array(this.digits);

        this.yearDigits = this.expressionsService.getDigits(this.isEnabled);

        this.array = new Array(this.digits);

        for(let x = 0; x < this.array.length; x++)
        {
            this.array[x] = 0;
        }
    }
}
