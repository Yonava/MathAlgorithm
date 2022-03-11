import randNum from "@/classes/RandNum";
import levelOne from "./Level1";
import levelTwo from "./Level2";
import levelThree from "./Level3";
import Algebra from "./AlgebraTemplate"


export default function GenerateQuestions(numOfQuestions = [1, 1, 1, 1], numOfOptions = 4) {

    let questionObject;
    let output = [];

    for (let i = 0; i < numOfQuestions.length; i++) {

        for (let j = 0; j < numOfQuestions[i]; j++) {

            let options = [];
            let question;

            switch (i) {
                case 0:
                    question = levelOne();
                    break;
                case 1:
                    question = levelTwo();
                    break;
                case 2:
                    question = levelThree();
                    break;
                case 3:
                    question = Algebra();
                    break;
            }

            question.evaluation = question.evaluation ?? question.equation;
            question.task = question.task ?? "Evaluate";
            options.push(eval(question.evaluation));

            if (parseFloat(options[0]) % 1 != 0) options[0] = Number(parseFloat(options).toFixed(2));

            for (let k = 0; k < (numOfOptions - 1); k++) {
                let newOption;
                let mixIn = 0;
                if (options[0] % 1 === 0) {
                    do {
                        newOption = Math.round((options[0] + mixIn) * randNum(0.5, 1.5, 2));
                        Math.random() < .5 ? mixIn++:mixIn--;
                    } while (options.includes(newOption))
                    options.push(newOption);
                } else {
                    newOption = ((options[0] + mixIn) * randNum(0.5, 1.5, 2)).toFixed(2);
                    Math.random() < .5 ? mixIn++:mixIn--;
                    options.push(Number(newOption));
                }
            }

            questionObject = {
                equation: question.equation,
                task: question.task,
                answer: options[0],
                options,
            };

            output.push(questionObject);
        }
    }
    return output;
}