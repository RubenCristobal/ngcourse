export class Card {
    question = '';
    rightAnswer = '';
    answers: string[] = [];
    responded = false;
    correct = false;
    response = '';

    constructor(json?: any) {
        if (json !== undefined) {
            this.question = json.question;
            this.rightAnswer = json.correct_answer;
            this.answers = json.incorrect_answers;
            this.answers.push(this.rightAnswer);
        }
    }
}