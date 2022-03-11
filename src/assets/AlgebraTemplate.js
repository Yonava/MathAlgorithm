import randNum from "@/classes/RandNum"

function randVar() {
    const vars = ['a', 'b', 'c', 'x', 'y', 'z'];
    return vars[Math.floor(Math.random() * vars.length)];
}

export default function AlgebraQuestions(min = 2, max = 10) {

    let vars = [];
    let nums = [];

    for (let i = 0; i < 100; i++) {
        nums.push(randNum(min, max));
        vars.push(randVar())
    }

    vars = new Set(vars);
    vars = Array.from(vars);

    const template = [
        {
            equation: `${nums[0]} + ${vars[0]} - ${nums[2]} = ${nums[1]}`,
            evaluation: `${nums[1]} - ${nums[0]} + ${nums[2]}`,
            task: `Solve for ${vars[0]}`,
        },  
        {
            equation: `${nums[0]}${vars[0]} = ${nums[1]}`,
            evaluation: `${nums[1]} / ${nums[0]}`,
            task: `Solve for ${vars[0]}`
        },
        {
            equation: `${nums[0]}${vars[0]} + ${nums[2]} = ${nums[1]}`,
            evaluation: `(${nums[1]} - ${nums[2]}) / ${nums[0]}`,
            task: `Solve for ${vars[0]}`,
        }
    ];

    return template[Math.floor(Math.random() * template.length)];
}