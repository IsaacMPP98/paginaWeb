//@ts-check
import { Question } from "./question.js"
export class quiz{
    random1 = Math.floor(Math.random() * Question.length) ;
    QuestionIndex = 0
    score = 0
    
    constructor(questions ){
        this.questions=questions  
    }

    getQuestionIndex(){
        return this.questions[this.QuestionIndex]
    }

    isEnd(){
        return this.questions.length === this.QuestionIndex
    }
    guess(answer){
        console.log(answer)
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }
        this.QuestionIndex++

    }

    img(img){
        return this.questions.img;
    }
    
}

