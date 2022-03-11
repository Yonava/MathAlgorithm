import Arithematic from "@/classes/Arithematic";

export default function levelThree() {
    const template = [
        {
            equation: `(${Arithematic.BaseEq('+', 1, 9)}) ** 2`
        }
    ];
    return template[Math.floor(Math.random() * template.length)];
}