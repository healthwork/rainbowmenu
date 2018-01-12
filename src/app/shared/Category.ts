import {Expression} from "./Expression";

export class Category
{
    selectedExpressionIndex: number;
    expressionList: Expression[];
    isRequired: boolean;

    constructor(expressionList: Expression[], isRequired: boolean, selectedExpressionIndex?: number)
    {
        this.expressionList = expressionList;
        this.isRequired = isRequired;
        this.selectedExpressionIndex = selectedExpressionIndex? selectedExpressionIndex: null;
    }

    getSelectedExpression(): Expression
    {
        return this.getExpression(this.selectedExpressionIndex);
    }

    setSelectedExpression(index: number)
    {
        this.selectedExpressionIndex = index;
    }

    getExpression(index: number)
    {
        return this.expressionList[index];
    }

    selectCategoryExpression(expressionIndex: number)
    {
        if(!this.isRequired && expressionIndex === this.selectedExpressionIndex)
        {
            this.getExpression(expressionIndex).flipEnabled();
            return;
        }

        if(this.selectedExpressionIndex != null)
            this.getExpression(this.selectedExpressionIndex).disable();

        this.selectedExpressionIndex = expressionIndex;

        this.getExpression(expressionIndex).flipEnabled();
    }

    reset()
    {
        this.selectedExpressionIndex = null;
        this.expressionList.forEach(expression => expression.disable());
    }
}
