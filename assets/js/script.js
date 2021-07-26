// UNIVERSAL VARIABLES

const bingoImgArray = ["./assets/images/baby-haipe.jpg", "./assets/images/bee-house.jpg", "./assets/images/clint-mad.jpg", "./assets/images/do-not-eat.jpg", "./assets/images/good-old-fashioned.jpg", "./assets/images/hype-goat.jpg", "./assets/images/mermaids-pendant.jpg", "./assets/images/peanut-butt.jpg", "./assets/images/pierre-mad.jpg", "./assets/images/pizza.jpg", "./assets/images/marnie-closed.jpg", "./assets/images/robin-closed.jpg", "./assets/images/sandy-lonely.jpg", "./assets/images/careless-death.jpg"]

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

// SHUFFLE BINGO IMAGES ON LOAD
shuffleBingoImages(bingoImgArray)