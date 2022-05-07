$(document).ready(function() {


    // Hover on buttons
    $(".hover").on({
        mouseenter: function() {
            $(this).css({
                "font-weight": "bold",
                "text-decoration": "underline"
            });

        }

    });
    $(".btn").on({
        mouseenter: function() {
            $(this).css({
                "background": "linear-gradient(to bottom right, #EDDEBF 40%, #890008 100%)",
            });
        },
        mouseleave: function() {
            $(this).css({
                "background": "linear-gradient(to bottom right, #EDDEBF 0%, #890008 100%)",

            });
        },
    });
    $("#submit").on({
        mouseenter: function() {
            $(this).css({
                "background": "linear-gradient(to bottom right, #EDDEBF 40%, #890008 100%)",
            });
        },
        mouseleave: function() {
            $(this).css({
                "background": "linear-gradient(to bottom right, #EDDEBF 0%, #890008 100%)",

            });
        },
    });
    $('.media').hover(function() {
        $(this).addClass('yellow');
    }, function() {
        $(this).removeClass('yellow');
    });

    $(".radio").on({
        mouseenter: function() {
            $(this).css({
                "background": "linear-gradient(to bottom right, #EDDEBF 0%, #19587D 100%)",
            });
        },
        mouseleave: function() {
            $(this).css({
                "background": "none",

            });
        },
    });

    $('.box').animate({ left: '0px' }, 1800);
    $('h2').animate({ left: '0px' }, 1800);

    // ****************************************************************************************************
    (function() {
        function buildQuiz() {
            const output = [];

            myQuestions.forEach(
                (currentQuestion, questionNumber) => {

                    const answers = [];

                    for (letter in currentQuestion.answers) {

                        answers.push(
                            `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                  </label>`
                        );
                    }

                    output.push(
                        `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
                    );
                }
            );

            quizContainer.innerHTML = output.join('');
        }

        function showResults() {

            const answerContainers = quizContainer.querySelectorAll('.answers');

            let numCorrect = 0;

            myQuestions.forEach((currentQuestion, questionNumber) => {

                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;

                    answerContainers[questionNumber].style.color = '#88f078';
                } else {
                    answerContainers[questionNumber].style.color = '#fd797b';
                }
            });

            resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        }

        const quizContainer = document.getElementById('quiz');
        const resultsContainer = document.getElementById('results');
        const submitButton = document.getElementById('submit');
        const myQuestions = [{
                question: "Quel est l’autre nom de l’Homme-Mystère ?",
                answers: {
                    a: "Le Sphinx",
                    b: "Saphir",
                    c: "Le Joker"
                },
                correctAnswer: "a"
            },
            {
                question: "Quelle est l'ancienne profession de Harley Quinn ?",
                answers: {
                    a: "Dentiste",
                    b: "Infirmière",
                    c: "Psychiatre"
                },
                correctAnswer: "c"
            },
            {
                question: "Quel est l'objet fétiche de Double Face ?",
                answers: {
                    a: "Un livre",
                    b: "Un pièce",
                    c: "Un couteau",
                },
                correctAnswer: "b"
            }, {
                question: "Quelle ville Batman défend-il ?",
                answers: {
                    a: "Gotham City",
                    b: "Hell's Kitchen",
                    c: "Starling City"
                },
                correctAnswer: "a"
            },
            {
                question: "Tim Burton a réalisé 2 Batman, qui jouait Batman ?",
                answers: {
                    a: "Val Kilmer",
                    b: "Mickeal Keaton",
                    c: "Georges Clooney"
                },
                correctAnswer: "b"
            },
            {
                question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
                answers: {
                    a: "L'homme Mystère",
                    b: "Le Pingouin",
                    c: "Le Joker",
                },
                correctAnswer: "c"
            },
            {
                question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
                answers: {
                    a: "Elaine & George",
                    b: "Martha & Thomas",
                    c: "Martha & James"
                },
                correctAnswer: "b"
            },
            {
                question: "Qui interprète le joker en 2008 ?",
                answers: {
                    a: "Heath Legder",
                    b: "Haeth Ledger",
                    c: "Heath Ledger"
                },
                correctAnswer: "c"
            },
            {
                question: "En quelle année Robin a t-il fait sa première apparition ?",
                answers: {
                    a: "1940",
                    b: "1941",
                    c: "1939",
                },
                correctAnswer: "a"
            },
            {
                question: "Qui est la fille de Batman & Catwoman ( Earth-2) ?",
                answers: {
                    a: "Huntress",
                    b: "Oracle",
                    c: "Black Canary"
                },
                correctAnswer: "a"
            },
            {
                question: "Qui est Jonathan Crane ?",
                answers: {
                    a: "Le Joker",
                    b: "Hugo Strange",
                    c: "L'epouvantail"
                },
                correctAnswer: "c"
            },
            {
                question: "Batman, c'est aussi le nom d'une ville en...",
                answers: {
                    a: "Islande",
                    b: "Turquie",
                    c: "Allemagne",
                },
                correctAnswer: "b"
            },
            {
                question: "Qui a produit Batman Dracula en 1964 ?",
                answers: {
                    a: "Roman Polanski",
                    b: "Stanley Kubrick",
                    c: "Andy Warhol"
                },
                correctAnswer: "c"
            },
            {
                question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
                answers: {
                    a: "Ra's al Ghul",
                    b: "Poison Ivy",
                    c: "Le pingouin"
                },
                correctAnswer: "a"
            },
            {
                question: "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
                answers: {
                    a: "Zoe Kravitz",
                    b: "Gigi Hadid",
                    c: "Lola lolani Momoa",
                    d: "Emma Watson",

                },
                correctAnswer: "a"
            }
        ];

        buildQuiz();

        submitButton.addEventListener('click', showResults);
    })();
});