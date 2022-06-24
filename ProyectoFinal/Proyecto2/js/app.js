//@ts-check
import { Question } from './question.js'
import {questions} from './questions.js'
import { quiz } from './quiz.js'
import {UI} from './UI.js'

/**
 * 
 * @param {quiz} quizz 
 * @param {UI} ui 
 */

const renderPage = (quizz,ui) =>{

   
   if(quizz.isEnd()){
      console.log(quizz.score)
      ui.showScores(quizz.score)
      
      /*location.reload();*/
      
      
      
   }else{
   ui.showQuestions(quizz.getQuestionIndex().text);
   ui.showChoices(quizz.getQuestionIndex().choices,(currentChoice)=>{quizz.guess(currentChoice); 
      renderPage(quizz,ui);});
   ui.showProgress(quizz.QuestionIndex+1,quizz.questions.length)
   ui.showImg(quizz.getQuestionIndex().img);
   
}

}

function main(){
   const quizz = new quiz(questions)
   const answer2 = new Question(questions)
   const ui = new UI()
   renderPage(quizz,ui);
   
}

main();
