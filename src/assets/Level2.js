import Arithematic from "@/classes/Arithematic";
import randNum from "@/classes/RandNum";

export default function levelTwo() {
    const template = [
        {
            equation: `${randNum(5, 15)} + ${Arithematic.BaseEq('*', 2, 10)}`
        },
        {
            equation: `${randNum(2, 7)} - ${Arithematic.BaseEq('*', 2, 10)}`
        },
        {
            equation: `${Arithematic.ExpoEq(3, 9, 3, 3)}`
        }
    ];
    
    return template[Math.floor(Math.random() * template.length)];
}