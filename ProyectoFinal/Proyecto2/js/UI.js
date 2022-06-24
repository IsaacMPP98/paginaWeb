export class UI {
  constructor() {

  }

  showImg(img) {
    const Img = document.getElementById('img');
    Img.setAttribute("src", img)

    console.log(img);
  }

  showChoices(choices, callback) {

    const choicesContainer = document.getElementById('choice')
    choicesContainer.innerHTML = ' '


    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement('button')
      button.innerText = choices[i]
      button.className = 'button';
      button.addEventListener("click", () => callback(choices[i]))
      choicesContainer.append(button);
    }

  }
  /**
   * @param {number} score
   */
  showScores(score) {
    const quizEndHTML = `
    <h1>Resultado</h1>
    <h2 id="h2">Tu Puntuacion es: ${score} </h2>
    <form action="index.html">
        <button class="button">Reiniciar</button>
    </form>
    <form action="Score.html">
        <button class="button">Respuestas</button>
    </form>
    <form action="/ProyectoFinal/index.html">
    <button class="button">Menu</button>
    </form>
    `
    const element = document.getElementById('quiz');
    element.innerHTML = quizEndHTML;
    /**
     * 
     alert ('Tu puntuacion es de: '+score); 
    const quizEndHTML = `
    <h1>Resultado</h1>
    <h2>Puntuacion es: ${score} </h2>
    `
    const element = document.getElementById('quiz');
    element.innerHTML = quizEndHTML;

    */
  }

  showProgress(currentIndex, Total) {
    const element = document.getElementById('progress');
    element.innerHTML = `Pregunta ${currentIndex} de ${Total}`;
  }


  ShowTest(data) {
    console.log(data);
  }

  showQuestions(text) {
    const questionsTitle = document.getElementById('h2');
    questionsTitle.innerText = text;
    console.log(questionsTitle)
  }

  showQuestChoice(Quest, choice) {
    console.log('Esta es la Question ' + Quest);
  }

}
