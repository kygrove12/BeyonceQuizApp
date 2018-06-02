const quizQuestions = [
  { 
    number: 1,
    question: "A diva is a female version of a:",
    option1: "Player",
    option2: "Hustler", 
    option3: "Rockstar", 
    option4: "Gangsta",
    rightAnswer: "Hustler"
  }, 

  {
    number: 2,
    question: "How many Grammy Awards does Beyonce have?",
    option1: '27', 
    option2: '9', 
    option3:'16', 
    option4: '22',
    rightAnswer: "22"
  }, 

  {
    number: 3,
    question: "What are Beyonce’s twins named?",
    option1: 'Ella & Alexander', 
    option2: 'Rumi & Sir', 
    option3: 'Knox & Vivienne', 
    option4: 'Blue & Ivy',
    rightAnswer: 'Rumi & Sir'
  }, 
  {
    number: 4, 
    question: "What was the name of Beyonce’s first band?",
    option1:"Destiny's Child",
    option2: "Girls Tyme",
    option3: "Knowlez",
    option4: "On the Run",
    rightAnswer: "Girls Tyme"
  }, 
  {
    number: 5,
    question: "How did Bey wake up?",
    option1: "Like this",
    option2: "Flawless", 
    option3: `In the kitchen saying, "How the hell did this shit happen?"`, 
    option4: "All of the above",
    rightAnswer: 'All of the above'
  }, 
  {
    number: 6,
    question: "Who was Beyonce's alter ego?",
    option1: "Roman", 
    option2: "Cindi Mayweather", 
    option3: "Solange", 
    option4: "Sasha Fierce",
    rightAnswer: 'Sasha Fierce'
  }, 
  {
    number: 7,
    question: "Which of these movies was Beyonce NOT in?",
    option1: "Obsessed", 
    option2: "Dreamgirls", 
    option3: "Catwoman", 
    option4: "Epic",
    rightAnswer: 'Catwoman'
  }, 
  {
    number: 8,
    question: "What is Beyonce's middle name?",
    option1: 'Giselle', 
    option2:'Ivy', 
    option3:'Tina', 
    option4:"She doesn't have one",
    rightAnswer: 'Giselle'
  }, 
  {
    number: 9,
    question: "Some call it arrogant, Bey calls it:",
    option1: "Ignorant", 
    option2: "Innocent", 
    option3: "Confident", 
    option4: "Triumphant",
    rightAnswer: 'Confident'
  }, 
  {
    number: 10,
    question: "Who run the world?",
    option1: "The Beyhive", 
    option2: "Jay Z", 
    option3: "Haters", 
    option4: "Girls",
    rightAnswer: 'Girls'
  }
];

let questionNumber = 0;
let rightAnswers = 0;

function createQuestionPage(questionNumber, quizQuestions){
  if (questionNumber < quizQuestions.length) {
    return `<div class="question-page">
    <h2>${quizQuestions[questionNumber].question}</h2>
    <form name=quizTemplate role=form>
    <fieldset role="radioset">
    <label class="answerOption">
    <input type="radio" value="${quizQuestions[questionNumber].option1}" name="answer" role="radio" required>
    <span>${quizQuestions[questionNumber].option1}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${quizQuestions[questionNumber].option2}" name="answer" role="radio" required>
    <span>${quizQuestions[questionNumber].option2}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${quizQuestions[questionNumber].option3}" name="answer" role="radio" required>
    <span>${quizQuestions[questionNumber].option3}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${quizQuestions[questionNumber].option4}" name="answer" role="radio" required>
    <span>${quizQuestions[questionNumber].option4}</span>
    </label>
    <button type="button" id="submitButton">Submit Answer</button>
    </fieldset>
    </form>
    <h4>Current Question: ${(questionNumber+1)}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Your Score: ${rightAnswers}/10<h4>
    </div>`;
} else {
    return`
  <section class="feedback-page" role="main">
    <h2>Your Final Score is ${rightAnswers}/10</h2>
    <img src="http://www.sharegif.com/wp-content/uploads/2014/04/hair-flipbeyonce-gif.gif" alt="Beyonce hair flip" class="gif">
    <button id="final-button">Start Again!</button>
  </section>`;
  }
 
}

function goToNext(){
  $('#container').html(createQuestionPage(questionNumber, quizQuestions));
}

function startQuiz(){
   $('#container').on('click', `#start-button`, event=> {
    goToNext();
  });
}

function rightAnswerPage(){
  if(questionNumber<9){
   return `
   <section class="feedback-page" role="main">
     <h2>Correct!</h2>
     <img src="http://www.reactiongifs.com/wp-content/uploads/2013/03/fabulous.gif" alt="proud Beyonce" class="gif">
     <button id="next-button">Next Question</button>
   </section>`;
   }
   else{
     return`
      <section class="feedback-page" role="main">
     <h2>Correct!</h2>
     <img src="http://www.reactiongifs.com/wp-content/uploads/2013/03/fabulous.gif" alt="proud Beyonce" class="gif">
     <button id="next-button">Finish Quiz!</button>
   </section>`;
   }
 }
 
 function wrongAnswerPage(){
  if(questionNumber<9){
   return `
   <section class="feedback-page" role="main">
     <h2>Sorry, the answer is ${quizQuestions[questionNumber].rightAnswer}!</h2>
     <img src="http://www.reactiongifs.com/wp-content/uploads/2013/12/nono.gif" alt="Beyonce wags her finger, is disappointed" class="gif">
     <button id="next-button">Next Question</button>
   </section>`;
   }
   else{
     return`
     <section class="feedback-page" role="main">
     <h2>Sorry, the answer is ${quizQuestions[questionNumber].rightAnswer}!</h2>
     <img src="http://www.reactiongifs.com/wp-content/uploads/2013/12/nono.gif" alt="Beyonce wags her finger, is disappointed" class="gif">
     <button id="next-button">Finish Quiz!</button>
   </section>`;
   }
 }

 function countRightAnswers(){
   rightAnswers++;
   console.log("countRightAnswers ran");
 }

 function evaluateAnswer(){
   let userChoice=$('input:checked');
   let userAnswer=userChoice.val();
   let correctAnswer = quizQuestions[questionNumber].rightAnswer;
  if (userAnswer===correctAnswer){
     countRightAnswers();
     $('#container').html(rightAnswerPage());
  }
  else{
    $('#container').html(wrongAnswerPage());
  }
 }

function questionCount(){
  questionNumber++;
  console.log("questionNumber is", questionNumber);
  console.log("rightAnswers is", rightAnswers);
}

function nextButton(){
  $('#next-button').click(function(event) {
    goToNext();
  });
}


function respondToAnswer(){
  $('#container').on('click', `#submitButton`, event=>{
     console.log ("respondToAnswer ran");
     evaluateAnswer();
     questionCount();
     nextButton();
  });
}

function startPage(){
  return `
  <section id="start-page" role="main">
			<h1>BEYONCE QUIZ</h1>
			<button id="start-button">Get in Formation</button>
			<h2>The Definitive Beyhive Entrance Exam</h2>
		</section>`;
}

function startAgain(){
   $('#container').on('click', `#final-button`, event=>{
     $('#container').html(startPage());
     questionNumber = 0;
     rightAnswers = 0
     console.log ("startAgain ran");
     console.log ("questionNumber is", questionNumber)
     console.log ("rightAnswers is", rightAnswers)
   });
}

function runQuiz(){
  startQuiz();
  respondToAnswer();
  startAgain();
  
}

$(runQuiz)