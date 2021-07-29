// UNIVERSAL VARIABLES

const bingoImgArray = ["./assets/images/baby-haipe.jpg", "./assets/images/bee-house.jpg", "./assets/images/clint-mad.jpg", "./assets/images/do-not-eat.jpg", "./assets/images/good-old-fashioned.jpg", "./assets/images/hype-goat.jpg", "./assets/images/mermaids-pendant.jpg", "./assets/images/peanut-butt.jpg", "./assets/images/pierre-mad.jpg", "./assets/images/pizza.jpg", "./assets/images/marnie-closed.jpg", "./assets/images/robin-closed.jpg", "./assets/images/sandy-lonely.jpg", "./assets/images/careless-death.jpg", "./assets/images/raid.jpg", "./assets/images/goat-fact.jpg", "./assets/images/obamode.jpg", "./assets/images/laugh-track.jpg", "./assets/images/mr-krabs.jpg", "./assets/images/you-blew-it.jpg", "./assets/images/you-donkey.jpg", "./assets/images/change-hat.jpg", "./assets/images/leah-gives-gift.jpg", "./assets/images/hydrate.jpg", "./assets/images/bits.jpg", "./assets/images/new-follower.jpg", "./assets/images/subscription.jpg", "./assets/images/regifting.jpg", "./assets/images/forgot-mushrooms.jpg", "./assets/images/no-bed-sleep.jpg", "./assets/images/real-stumper.jpg", "./assets/images/cat-in-way.jpg"]

// ASSIGN IMAGES TO RANDOM POSITIONS

function shuffleBingoImages(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining image index
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current image
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }

    displayShuffleImg(array);
}

function displayShuffleImg(array) {
    console.log(array)
    for (let i = 0; i < bingoImgArray.length; i++) {
        document.getElementById(parseInt(i)).src = bingoImgArray[i]
        console.log(array[i])
    }
}

// HANDLING CLASS TOGGLES UPON CLICK EVENTS

let bingoSquare = document.getElementsByTagName("li")

for (var i = 0; i < bingoSquare.length; i++) {
    bingoSquare[i].addEventListener("click", highlightClass(i));
}

function highlightClass(i) {
 return function() {
    bingoSquare[i].classList.toggle("highlighted")
    bingoSquare[i].classList.toggle("unhighlighted")
 };
}

// SHUFFLE BINGO IMAGES ON LOAD
shuffleBingoImages(bingoImgArray)

