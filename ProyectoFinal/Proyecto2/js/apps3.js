import { sera } from "./data.js";
import { Question } from './question.js'
import {questions} from './questions.js'
import { quiz } from './quiz.js'
import {UI} from './UI.js'

/**
 * 
 * @param {quiz} quizz 
 * @param {UI} ui 
 */


 function myFunction() {
   ocument.getElementById("h2").style.color = "red";
 }


 const renderPage = (quizz,ui) =>{
 }

 function agregarElementos(){ 
   
    
  
    }   
 
 function main(){
    const quizz = new quiz(questions)
    const ui = new UI()
    renderPage(quizz,ui);
    agregarElementos();
    
 }
 
 main();
 