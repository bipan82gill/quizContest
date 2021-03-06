const quizData =[
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: '<script>',
        b: '<scripting>',
        c: '<javascript>',
        d: '<js>',
        correct: 'a'
    },
    {
        question: "How do you create a function in JavaScript?",
        a: 'function = myFunction()',
        b: 'function myFunction()',
        c: 'function:myFunction()',
        d: 'all of above',
        correct: 'b'
    },
    {
        question: "How do you call a function named myFunction?",
        a: 'call function myFunction()',
        b: 'call myFunction()',
        c: 'myFunction()',
        d: 'call:myFunction',
        correct: 'c'
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        a: 'Math.round(7.25)',
        b: 'rnd(7.25)',
        c: 'Math.rnd(7.25)',
        d: 'round(7.25)',
        correct: 'a'
    },
    {
        question: "How can you detect the client's browser name?",
        a: 'client.navName',
        b: 'browser.name',
        c: 'navigator.appName',
        d: 'all of above',
        correct: 'c'
    }
]
const  answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers()
const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;

a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

}
function getSelected(){
   
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer;
    
}
function deselectAnswers() {
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
        });
    }

submitBtn.addEventListener("click" , () => {
   
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            
            loadQuiz();
        }else{
        quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} Questions.</h2>
        <button onclick="location.reload()">Reload<button>`;
        }
    }
    });
    