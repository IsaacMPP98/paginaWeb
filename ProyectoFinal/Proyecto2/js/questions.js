import { Question } from "./question.js";
import { data, suffle } from "./data.js";


export const questions = suffle.map(question =>new Question(question.question,question.choices,question.answer,question.img))
