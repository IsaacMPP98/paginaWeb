export class Question {
    constructor(text,choices,answer,img) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.img = img;
    }

    correctAnswer(choice) {
        return choice === this.answer
    }

    imgId(img){
        return img === this.img;
    }
}


