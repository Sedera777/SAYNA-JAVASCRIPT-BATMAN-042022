$(document).ready(function() {


    // ****************************************************************************************************
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

    // ****************************************************************************************************




});