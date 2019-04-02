"strict mode"

let pictureArray = [];

//declare variables which represent the  the four  categories  types for each page
// let kitchenItemsArray = [];
// let therapeuticsArray = [];
// let noveltyItemsArray = [];
// let sportsAttireArray = [];

//find our image container using document.getElementById
let elImageContainer = document.getElementById('imageContainer');
//console.log(elImageContainer);


let ImageConstructor = function (name, filePath, category, id) {
    this.name = name;
    this.filePath = filePath;
    this.category = category;
    this.id = id;
    this.clicked = 0;
}


let TotalClicked = 0;

//check to verify if local storage exists
if (localStorage.length > 0) {
    let getData = localStorage.getItem('storagepictureArray');
    //     //retrieve stored character Image array from local storage that contains updated clicks and showns
      pictureArray = JSON.parse(getData);
    //     //reassign the value of characterImageArray to the parsed version in local storage
    TotalClicked = localStorage.getItem('TotalClickedStorage');


} else {
    //     //if local storage does not exist, instantiate the constructor to create multiple objects of character images 
    //instantiate our counstructor to create multiple instances/objects of our character images
    //generate all 24 image objects as new "ImageConstructor(s) with the name, filePath and id  as properties within the constructor
    let Disguise = new ImageConstructor('disguise', './assets/dogdisguise.jpg', 'novelty', 'disguise')
    let Polaroid = new ImageConstructor('polaroid', './assets/polaroidcamera.jpg', 'novelty', 'polaroid')
    let Typewriter = new ImageConstructor('typewriter', './assets/oldtyper.jpg', 'novelty', 'typewriter')
    let Vespa = new ImageConstructor('vespa', './assets/vesp.jpg', 'novelty', 'vespa')
    let Airforce = new ImageConstructor('airforce', './assets/brownairforce.jpg', 'sports', 'airforce')
    let Basketball = new ImageConstructor('basketball', './assets/nikeball.jpg', 'sports', 'basketball')
    let Jersey = new ImageConstructor('jersey', './assets/lakersjersey.jpg', 'sports', 'jersey')
    let Retro = new ImageConstructor('retro', './assets/retrojordan.jpg', 'sports', 'retro')
    let Soccer = new ImageConstructor('soccer', './assets/nikeboots.jpg', 'sports', 'soccer')
    let SmokingPipe = new ImageConstructor('SmokingPipe', './assets/smokingpipe.jpg', 'novelty', 'SmokingPipe')
    let Gear = new ImageConstructor('gear', './assets/sportsbra.jpg', 'sports', 'gear')
    let Oldbike = new ImageConstructor('oldbike', './assets/oldbike.jpg', 'novelty', 'oldbike')
    let Spoons = new ImageConstructor('spoon', './assets/spoons.jpg', 'kitchen', 'spoons')
    let RedKettle = new ImageConstructor('redkettle', './assets/redkettle.jpg', 'kitchen', 'redkettle')
    let RedVespa = new ImageConstructor('redvespa', './assets/redvespa.jpg', 'novelty', 'redvespa')
    let Teacup = new ImageConstructor('teacup', './assets/teacup.jpg', 'kitchen', 'teacup')
    let Hippie = new ImageConstructor('hippie', './assets/hippie.jpg', 'novelty', 'hippie')
    let Mixbox = new ImageConstructor('mixbowl', './assets/mixbowl.jpg', 'kitchen', 'mixbowl')
    let Records = new ImageConstructor('records', './assets/oldrecords.jpg', 'novelty', 'records')
    let Wok = new ImageConstructor('wok', './assets/wok.jpg', 'kitchen', 'wok')
    let Moped = new ImageConstructor('moped', './assets/yellowmoped.jpg', 'novelty', 'moped')
    let TypeTwo = new ImageConstructor('typetwo', './assets/vintagetype.jpg', 'novelty', 'typetwo')
    let Utensils = new ImageConstructor('utensils', './assets/utensils.jpg', 'kitchen', 'utensils')
    let HippyTwo = new ImageConstructor('hippy2', './assets/hipster.jpg', 'novelty', 'hippy')

    pictureArray.push(Disguise, Polaroid, Typewriter, Vespa, Airforce, Basketball, Jersey, Retro, Soccer, SmokingPipe, Gear, Oldbike, Spoons, RedKettle, RedVespa, Teacup, Hippie, Mixbox, Records, Wok, Moped, TypeTwo, Utensils, HippyTwo)

};
//declare unassigned global variables for the four images to use locally as containers per page

let firstImage;
let secondImage;
let thirdImage;
// let fifthImage;
// let sixthImage;



//ImageArray.category(sports)


function randomImage() {
    let randomNumber = Math.floor(Math.random() * pictureArray.length);
    let pictureIndex = pictureArray[randomNumber];
    pictureIndex.shown += 1
    return pictureIndex;
};



function displayImages() {
    //reassign the elImageContainer to innerHTML each time the for loop runs
    elImageContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        //declared local variable imageObject and assigned it the randomImage method  which invokes the global variable randomImage() method 
        let pictureObject = randomImage();//declaration is moved up above the elImage, to prevent conflicts with DOM HTML 
        //declared local variable elImage an assigned it an img tag in HTML
        //assign the imageObject to one of the three images in the image container and validate the image
        //use a conditional statement to validate that current random imageObjects are chosen from the ImageIndex array  
        if (i === 0) {//moved up to immediately validate that randomImages are populating properly
            //to populate the images the firstimage must be the imageObject with the index "0" or false
            firstImage = pictureObject;

            //if ImageObject is assign as index 1 then it can be the secondImage   
        } else if (i === 1) {
            //run a while the conition is true generate a new random image if the shown  firstImage category is is equal to the  secondImage id
            while (pictureObject.id === firstImage.id) {
                pictureObject = randomImage();
                console.log('second while', pictureObject.id);
            }
            secondImage = pictureObject;
            //if imageObject is not index 0 or 1, or 2, then it can be used as the thirdImage
        } else {
            // run a while the conition is true generate a new random image if the shown thirdImage  is equal to first OR secondImage id
            while (pictureObject.id === firstImage.id || pictureObject.id === secondImage.id) {
                pictureObject = randomImage();
                console.log('third while', pictureObject.id);
            }
            thirdImage = pictureObject;


        };

        let elImage = document.createElement('img');
        // append elImage to the elImageContainer in HTML via the DOM
        elImageContainer.appendChild(elImage);
        //set an id attribute to image element
        elImage.setAttribute('id', pictureObject.id);
        //set the image HTML source tag as the images file path 
        elImage.src = pictureObject.filePath;
        //added an eventlistener to each image and to store the event within the "click" property of the image variable
        elImage.addEventListener('click', imageClicked);
        //increment the shown property  by 1 for each, time the imageObject "shown"   
        pictureObject.shown += 1;
    };
};


//invoke the displayImages function 
displayImages();

// define even handler function that will increment thetimes clicked for the images
function imageClicked(event) {
    // if the id associated with the event target is associatd with firstImage, then  add click event increment by 1
    if (event.target.id === firstImage.id) {
        firstImage.clicked += 1;
        // if the id associated with event target the secondImage.id  is not the firstImage, but is the secondImage, add click event increment by 1
    } else if (event.target.id === secondImage.id) {
        secondImage.clicked += 1;
        // if the id associated with the event target is not firstImage, nor secondImage, but IS associated with thirdImage then add click event increment by 1
    } else if (event.target.id === thirdImage.id) {
        thirdImage.clicked += 1;
    }
    //prints the event target as the id of the ImageObject
    console.log('event target', event.target.id);
    //prints the number of click events in accordance with the associated image
    console.log('images', firstImage.clicked, secondImage.clicked, thirdImage.clicked);

    //invokes displayImages functions to display 3 new random images after the click event 
    displayImages();
    //Total clicks increases by 1 after each click
    TotalClicked += 1;
    //print the TotalClicked variable as each click increases
    console.log(TotalClicked);

    //every time image is clicked, local storage saves character image array.
    localStorage.setItem('storagepictureArray', JSON.stringify(pictureArray));
    localStorage.setItem('TotalClickedStorage', TotalClicked);
    //invoke chart function to display data  for images clicked and shown
    displayChartNow();
};







function displayChartNow() {
    if (TotalClicked > 25) {
        elImageContainer.removeEventListener('click', imageClicked)
        displayChart();
        localStorage.clear();
    };
};



function startOver() {
    localStorage.clear();
    location.reload();
};

