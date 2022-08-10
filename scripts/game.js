$(document).ready(function() {
    function setmultipleAttribute(element, attrs) {
        for (const key in attrs) {
            element.setAttribute(key, attrs[key]);
        }
    }

    loadquizz = function() {
        $.ajax({
            url: "https://plankton-app-mj9br.ondigitalocean.app/questions/all",
            dataType: "json",
            success: function(quizz) {
                let i;
                for (i = 0; i < quizz.length; i++) {
                    const { question, response } = quizz[i];
                    let quest = document.createElement("div");
                    let container = document.createElement("div");
                    setmultipleAttribute(container, {
                        class: "quizz-container",
                        id: `quizz${i}`,
                    });
                    quest.setAttribute("class", "quizz-title");
                    container.appendChild(quest);
                    quest.innerText = question;
                    for (let j in response) {
                        var qcm = document.createElement("div");
                        qcm.setAttribute("class", "qcm");
                        let checkbox = document.createElement("input");
                        setmultipleAttribute(checkbox, {
                            type: "checkbox",
                            id: `qcm${i}${j}`,
                            value: `${j}`,
                            name: `quizz${i}`,
                        });
                        qcm.appendChild(checkbox);
                        let label = document.createElement("label");
                        label.setAttribute("for", `qcm${i}${j}`);
                        label.innerText = response[j].text;
                        qcm.appendChild(label);
                        container.appendChild(qcm);
                    }
                    $("section#quizznum1 > .quizz-wrapper").append(container);
                }
                drawLine();
                let $resultat = {};

                function getQuizzId(quizzId) {
                    let id = 0,
                        tmp = "";
                    for (var i = 5; i < quizzId.length; i++) {
                        tmp += quizzId[i];
                    }
                    return parseInt(tmp, 10);
                }

                $(".quizz-container  input[type='checkbox']").click(function(e) {
                    let $next = $(this).parent().parent().next();
                    let $current = $(this);
                    let $nameVal = $current.attr("name");
                    let $quizzId = getQuizzId($nameVal);
                    let $group = $(`input[name=${$nameVal}]`);
                    for (let i = 0; i < $group.length; i++) {
                        $($group[i]).attr("disabled", "true");
                        if ($($group[i]).is(":checked")) {
                            $resultat[$quizzId] = $($group[i]).val();
                        }
                    }

                    let $resultLength = Object.keys($resultat).length;
                    console.log(Object.keys($resultat));
                    if ($next.length > 0 && quizz.length !== $resultLength) {
                        var offset = $($next).offset().top;
                        $("html,body").animate({ scrollTop: offset }, 800);
                    } else {
                        if ($resultLength != quizz.length) {
                            alert("Veuillez completer tout les reponse");
                        } else {
                            checkResult(quizz, $resultat);
                        }
                    }
                });
            },
            error: function() {
                console.log(" Impossible de Contacter le serveur");
            },
        });
    };
    loadquizz();

    function checkResult(quizz, $resultat) {
        let $good = 0,
            $bad = 0;
        for (var i = 0; i < quizz.length; i++) {
            if (quizz[i].response[$resultat[i]].isGood) {
                $(`#quizz${i}`)
                    .find(`[value="${$resultat[i]}"]`)
                    .parent()
                    .addClass("correct");
                $good++;
            } else {
                for (let j = 0; j < quizz[i].response.length; j++) {
                    if (quizz[i].response[j].isGood) {
                        $(`#quizz${i}`)
                            .find(`[value="${j}"]`)
                            .parent()
                            .addClass("correct");
                        break;
                    }
                }
                $(`#quizz${i}`)
                    .find(`[value="${$resultat[i]}"]`)
                    .parent()
                    .addClass("wrong");
                $bad++;
            }
        }
        $("#quizzresult").append(
            '<div class="container"><div class="title"></div><ul><li>Bonne réponse : <span class="bonne"></span></li><li>Mauvaise réponses: <span class="bad"></span></li></ul><div class="descision"></div><button class="button2 resetQuizz">Fermer</button></div>'
        );
        $("#quizzresult .title").text("QUIZZ NIVEAUX 1");
        $(".bonne").text($good);
        $(".bad").text($bad);
        if ($good >= quizz.length / 2) {
            $(".descision").text("Félicitation Vous avez passer le test!!!");
        } else {
            $(".descision").text("Vous Pouver Réessayer");
        }
        $("#quizzresult").slideToggle(600);
        $(".button2.resetQuizz").click(function() {
            $("#quizzresult").slideToggle(600);
            $("section#quizznum1 > .slider-quizz-wrapper").empty();
            $("html,body").animate({ scrollTop: `${$("section#quizznum1").offset().top}` },
                600
            );
            $("#quizznum1 .quizz-wrapper").empty();
            loadquizz();
        });
    }

    // QUIZZ NUMERO 2
    loadQuizz2 = function() {
        $.ajax({
            url: "https://plankton-app-mj9br.ondigitalocean.app/questions/all",
            dataType: "json",
            success: function(quizz) {
                let i;
                for (i = 0; i < quizz.length; i++) {
                    const { question, response } = quizz[i];
                    let quest = document.createElement("div");
                    let container = document.createElement("div");
                    setmultipleAttribute(container, {
                        class: "quizz-container",
                        id: `quizz${i}`,
                    });
                    quest.setAttribute("class", "quizz-title");
                    container.appendChild(quest);
                    quest.innerText = question;
                    for (let j in response) {
                        var qcm = document.createElement("div");
                        qcm.setAttribute("class", "qcm");
                        let checkbox = document.createElement("input");
                        setmultipleAttribute(checkbox, {
                            type: "checkbox",
                            id: `qcm${i}${j}`,
                            value: `${j}`,
                            name: `quizz${i}`,
                        });
                        qcm.appendChild(checkbox);
                        let label = document.createElement("label");
                        label.setAttribute("for", `qcm${i}${j}`);
                        label.innerText = response[j].text;
                        qcm.appendChild(label);
                        container.appendChild(qcm);
                    }
                    $(
                        "section#quizznum2 >.slider-quizz-wrapper .slider-quizz"
                    ).append(container);
                }
                drawLine();
                let $resultat = {};

                function getQuizzId(quizzId) {
                    let id = 0,
                        tmp = "";
                    for (var i = 5; i < quizzId.length; i++) {
                        tmp += quizzId[i];
                    }
                    return parseInt(tmp, 10);
                }
                $counter = 1;
                $curr = $(".curr");
                $curr.text($counter);
                $(".all").text(quizz.length);
                $(".slider-quizz img").toggle(500);
                $(
                    "#quizznum2>.slider-quizz-wrapper .slider-quizz #quizz0.quizz-container"
                ).toggle(500);
                $(".quizz-counter").fadeIn(500);
                $(".quizz-container  input[type='checkbox']").click(function(e) {
                    $counter += 1;
                    $curr.text($counter);
                    let $thisParent = $(this).parent().parent();
                    let $next = $thisParent.next();
                    let $current = $(this);
                    let $nameVal = $current.attr("name");
                    let $quizzId = getQuizzId($nameVal);
                    let $group = $(`input[name=${$nameVal}]`);
                    for (let i = 0; i < $group.length; i++) {
                        $($group[i]).attr("disabled", "true");
                        if ($($group[i]).is(":checked")) {
                            $resultat[$quizzId] = $($group[i]).val();
                        }
                    }
                    let $resultLength = Object.keys($resultat).length;
                    if ($next.length > 0 && quizz.length !== $resultLength) {
                        $thisParent.slideUp(500);
                        $next.toggle(500);
                    } else {
                        if ($resultLength != quizz.length) {
                            alert("Veuillez completer tout les reponse");
                        } else {
                            checkResult2(quizz, $resultat);
                        }
                    }
                });
            },
            error: function() {
                console.log(" Impossible de Contacter le serveur");
            },
        });
    };

    $("#startQuizz2").click(function(e) {
        e.preventDefault();
        loadQuizz2();
        $("#startQuizz2").toggle(1000);
        $(".slider-quizz").addClass("quizz2-bg");
    });

    function checkResult2(quizz, $resultat) {
        let $good = 0,
            $bad = 0,
            $svgGood =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>',
            $svgBad =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>';
        for (var i = 0; i < quizz.length; i++) {
            let $ans = document.createElement("div");
            let $num = document.createElement("div");
            let $texte = document.createElement("div");
            let $status = document.createElement("div");
            let $question = document.createElement("span");
            let $taRep = document.createElement("span");
            $ans.appendChild($num);
            $ans.appendChild($texte);
            $ans.appendChild($status);
            $texte.appendChild($question);
            $texte.appendChild($taRep);
            $($question).addClass("laquestion");
            $($status).addClass("circle");
            $($num).addClass("circle");
            $($ans).addClass("answers");
            $($texte).addClass("texte");
            $($taRep).addClass("info-quizz");
            $question.innerText = quizz[i].question;
            $num.innerText = i + 1;
            if (quizz[i].response[$resultat[i]].isGood) {
                $taRep.innerText =
                    "Votre réponse : " + quizz[i].response[$resultat[i]].text;
                $status.innerHTML = $svgGood;
                $($ans).addClass("correct");
                $good++;
            } else {
                let $good = document.createElement("span");
                $($good).addClass("info-quizz");
                $($ans).addClass("wrong");
                $texte.appendChild($good);
                $taRep.innerText =
                    "Votre réponse : " + quizz[i].response[$resultat[i]].text;
                $status.innerHTML = $svgBad;
                for (let j = 0; j < quizz[i].response.length; j++) {
                    if (quizz[i].response[j].isGood) {
                        $good.innerHTML =
                            "La réponse correcte : " +
                            quizz[i].response[j].text;
                        break;
                    }
                }
                $bad++;
            }
            $("#quizz2result").append($ans);
        }

        $("#quizz2result").append(
            '<div class="container"><div class="title"></div><ul><li>Bonne réponse : <span class="bonne"></span></li><li>Mauvaise réponses: <span class="bad"></span></li></ul><div class="descision"></div><button class="button2 resetQuizz2">Fermer</button></div>'
        );
        $("#quizz2result .title").text("QUIZZ NIVEAUX 2");
        $(".bonne").text($good);
        $(".bad").text($bad);
        if ($good >= quizz.length / 2) {
            $(".descision").text("Félicitation Vous avez passer le test!!!");
        } else {
            $(".descision").text("Vous Pouver Réessayer");
        }
        $("#quizznum2 .slider-quizz-wrapper").toggle(500);
        $("#quizz2result").toggle(500);

        $(".button2.resetQuizz2").click(function() {
            window.location.reload();
        });
    }
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

});