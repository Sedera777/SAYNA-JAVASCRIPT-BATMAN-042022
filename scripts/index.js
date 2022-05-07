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
    //pop-up-box
    // ****************************************************************************************************
    const popUpBox = document.getElementById('popUpBox');
    const closeBtn = document.getElementById('closeBtn');
    var msg = document.getElementById('msg');
    var value = document.querySelector('select');
    var checkBox = document.getElementById('check');
    var radio1 = document.getElementById('myRadio1');
    var radio2 = document.getElementById('myRadio2');
    var radio3 = document.getElementById('myRadio3')

    const confirm = document.getElementById('confirm');

    confirm.addEventListener('submit', function(e) {
        var email = document.getElementById('email');

        e.preventDefault()


        if (value.selectedIndex != 0 && email.value != '' && checkBox.checked == true && (radio1.checked == true || radio2.checked == true || radio3.checked == true)) {
            popUpBox.style.display = 'block';
            msg.innerText = 'MESSAGE REÇU !';


        } else {
            popUpBox.style.display = 'block';
            msg.innerText = 'Veuillez remplir tous les champs s\'il  vous plaît !!! 🙏 ';
        }


    })

    closeBtn.addEventListener('click', () => {
        popUpBox.style.display = 'none'

    })

    // ****************************************************************************************************
    let btn = document.getElementsByClassName('btn');
    btn[0].href = '#heros';
    btn[1].href = '#ennemis';

    $('.box').animate({ left: '0px' }, 1800);
    $('h2').animate({ left: '0px' }, 1800);



});