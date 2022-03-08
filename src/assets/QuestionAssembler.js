import randNum from "@/classes/RandNum";
import levelOne from "./Level1";
import levelTwo from './Level2';


export default function GenerateQuestions(numOfQuestions = [5, 5], numOfOptions = 3) {

    let question;
    let questionObject;
    let output = [];

    for (let i = 0; i < numOfQuestions.length; i++) {

        for (let j = 0; j < numOfQuestions[i]; j++) {
            let options = [];
            let generateEq = [levelOne(), levelTwo()];
            question = generateEq[i];
            options.push(eval(question))

            if (parseFloat(options[0]) % 1 != 0) options[0] = Number(parseFloat(options).toFixed(2));

            for (let k = 0; k < (numOfOptions - 1); k++) {
                let newOption;
                let mixIn = 0;
                if (options[0] % 1 === 0) {
                    do {
                        newOption = Math.round((options[0] + mixIn) * randNum(0.5, 1.5, 2));
                        mixIn++;
                    } while (options.includes(newOption))
                    options.push(newOption);
                } else {
                    newOption = ((options[0] + mixIn) * randNum(0.5, 1.5, 2)).toFixed(2);
                    mixIn++;
                    options.push(Number(newOption))
                }
            }

            questionObject = {
                question,
                options,
            };

            output.push(questionObject);
        }
    }
    return output;
}