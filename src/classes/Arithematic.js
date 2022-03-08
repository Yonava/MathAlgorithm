import randNum from "./RandNum";

export default class Arithematic {

    static BaseEq(operator, minOperand = null, maxOperand = null, precision = 0) {

        if (minOperand === null && maxOperand === null) {
            switch (operator) {
                case '+':
                    minOperand = 1; 
                    maxOperand = 20;
                    break;
                case '-':
                    minOperand = 1;
                    maxOperand = 20;
                    break;
                case '*':
                    minOperand = 2;
                    maxOperand = 12;
                    break;
                case '/':
                    minOperand = 2;
                    maxOperand = 10;
                    break;
            }
        } else if (minOperand === null || maxOperand === null) {
            throw new Error("If Min or Max is Passed In, Both Must Be Passed In")
        }

        const validBaseOperators = ['+', '-', '*', '/']
        if (!validBaseOperators.includes(operator)) throw new Error("Invalid Operator");
        return `${randNum(minOperand, maxOperand, precision)} ${operator} ${randNum(minOperand, maxOperand, precision)}`;
    }

    static ExpoEq(min, max, minExponent = 0, maxExponent = 2, precision = 0) {
        return `${randNum(min, max, precision)} ** ${randNum(minExponent, maxExponent)}`
    }

    static SqrtEq(min, max, precision = 0) {
        return `${randNum(min, max, precision)}`
    }
}
