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

    /* Apparition au défilement */
    const $options = { root: null, rootMargin: "0px", threshold: 0.1 }
    const $ratio = 0.17
    $show = function(entries, $observer) {
        entries.forEach($entry => {
            if ($entry.intersectionRatio > $ratio) {
                $($entry.target).addClass("show").slideDown(3000);
                $observer.unobserve($entry.target);
            }
        });
    }
    const $observer = new IntersectionObserver($show, $options)
    const $scrollShow = $(".scroll-show,.scroll-show > *")
    for (let i = 0; i < $scrollShow.length; i++) {
        $observer.observe($scrollShow[i])
    }
    //pop-up-box
    // ****************************************************************************************************
    const popUpBox = document.getElementById('popUpBox');
    const closeBtn = document.getElementById('closeBtn');
    const msg = document.getElementById('msg');
    const value = document.querySelector('select');
    const checkBox = document.getElementById('check');
    const radio1 = document.getElementById('myRadio1');
    const radio2 = document.getElementById('myRadio2');
    const radio3 = document.getElementById('myRadio3')

    const confirm = document.getElementById('confirm');

    confirm.addEventListener('submit', function(e) {
        const email = document.getElementById('email');

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

    $('.box, h2').animate({ left: '0px' }, 1800);

});

const slideshowImages = document.querySelectorAll('.slideshow-img');
const imageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = 'block';

setInterval(nextImage, imageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.display = 'none';
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.display = 'block';

}

const slidingParagraphes = document.querySelectorAll('.slidingparagraphe');
const citationsDelay = 3000;
let currentCitationsCounter = 0;

slidingParagraphes[currentCitationsCounter].style.display = 'block';

setInterval(nextCitation, citationsDelay);

function nextCitation() {
    slidingParagraphes[currentCitationsCounter].style.display = 'none';
    currentCitationsCounter = (currentCitationsCounter + 1) % slidingParagraphes.length;
    slidingParagraphes[currentCitationsCounter].style.display = 'block';
}

const myImage = document.querySelector('.mainImage');
const imageArray = ['Bathome8.png', 'Bathome10.png', 'Bathome11.png'];
let imageIndex = 0;

function next() {
    if (imageIndex >= imageArray.length - 1) imageIndex = -1.
    imageIndex++;
    return setImg();
}

function prev() {
    if (imageIndex <= 0) imageIndex = imageArray.length;
    imageIndex--;
    return setImg();

}

function setImg() {
    return myImage.setAttribute('src', `./Assets/img/Home/${imageArray[imageIndex]}`);
}
const content = document.querySelector('.card-text');
const subtitle = document.getElementById('card-subtitle');
const reference = document.getElementById('reference');
const trailer = document.querySelector('.trailer');


function changeContent() {
    if (imageIndex == 0) {
        content.innerText = "Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman."
        subtitle.innerText = "Batman Begins"
        reference.innerText = "IMDB:8.2"
        trailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/jXrFsn9pcZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    } else if (imageIndex == 1) {
        content.innerText = "Batman aborde une phase décisive dans sa guerre contre le crime.Avec l'aide du lieutnant de police Jim Gordon et du nouveau procureur Harvey Dent, il entreprend de démanteler les dernières organisations criminelles qui infestent les rues de la ville. L'association s'avère efficace, mais le trio se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham: le Joker."
        subtitle.innerText = "The Dark Knight"
        reference.innerText = "IMDB: 9"
        trailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/UMgb3hQCb08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    } else if (imageIndex == 2) {
        content.innerText = "Huit ans ont passé depuis que Batman a disparu, passant du statut de héros à celuis de fugitif. Le 'Chevalier Noir' a tout sacrifié pour le mieux. Pendant un certain temps, le mensonge a l'effet escompté: la criminalité de Gotham City est presque éliminée par le commissaire James Gordon avec l'unité anticrime d'Harvey Dent. Mais l'arrivée à Gotham de Bane, un terroriste masqué, chamboule l'ordre établi et pousse Bruce à sortir de l'exil qu'il s'est imposé"
        subtitle.innerText = "The Dark Knight Rises"
        reference.innerText = "IMDB: 8.4"
        trailer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/OiqPQ7L_C00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

}