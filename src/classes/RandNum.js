export default function randNum(min, max, precision) {
    const difference = max - min;
    let output = Math.random() * difference;
    return (output += min).toFixed(precision);
}