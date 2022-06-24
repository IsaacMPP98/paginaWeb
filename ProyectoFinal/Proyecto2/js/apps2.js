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

 const renderPage = (quizz,ui) =>{
   
 }

 function agregarElementos(){ 
    var lista=document.getElementById("h1"); 
    sera.forEach(function(sera){
    var linew= document.createElement("p"); 
    var contenido = document.createTextNode(sera.question+":  "+sera.answer);
    lista.appendChild(linew);
    linew.appendChild(contenido);
    
    })
    }   
 
 function main(){
    const quizz = new quiz(questions)
    const ui = new UI()
    renderPage(quizz,ui);
    agregarElementos();
    
 }
 
 main();
 