import Arithematic from "@/classes/Arithematic";

export default function levelOne() {
    
    const basicOperators = ['+', '-', '*'];

    const template = [
        `${Arithematic.BaseEq(basicOperators[Math.floor(Math.random() * basicOperators.length)])}`,
        `${Arithematic.ExpoEq(2, 12)}`,
        `${Arithematic.BaseEq(basicOperators[Math.floor(Math.random() * basicOperators.length)], 0.1, 2.5, 2)}`
    ];
    return template[Math.floor(Math.random() * template.length)];
}