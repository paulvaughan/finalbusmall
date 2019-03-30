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
 if(localStorage.length > 0){
    let getData = localStorage.getItem('storageCharacterImageArray');
//     //retrieve stored character Image array from local storage that contains updated clicks and showns
       characterImageArray = JSON.parse(getData);
//     //reassign the value of characterImageArray to the parsed version in local storage
    TotalClicked = localStorage.getItem('TotalClickedStorage');


} else {
    //     //if local storage does not exist, instantiate the constructor to create multiple objects of character images 
    //instantiate our counstructor to create multiple instances/objects of our character images
 //generate all 24 image objects as new "ImageConstructor(s) with the name, filePath and id  as properties within the constructor
let Disguise = new ImageConstructor ('disguise', './assets/dogdisguise.jpg', 'novelty', 'disguise')
let Polaroid = new ImageConstructor ('polaroid', './assets/polaroidcamera.jpg', 'novelty', 'polaroid')
let Typewriter = new ImageConstructor ('typewriter', './assets/oldtyper.jpg', 'novelty', 'typewriter')
let Vespa = new ImageConstructor ('vespa', './assets/vesp.jpg', 'novelty', 'vespa')
let Airforce = new ImageConstructor ('airforce', './assets/brownairforce.jpg', 'sports', 'airforce')
let Basketball = new ImageConstructor ('basketball', './assets/nikeball.jpg', 'sports', 'basketball')
let Jersey = new ImageConstructor ('jersey', './assets/lakersjersey.jpg', 'sports', 'jersey')
let Retro = new ImageConstructor ('retro', './assets/retrojordan.jpg', 'sports', 'retro')
let Soccer = new ImageConstructor ('soccer', './assets/nikeboot.jpg', 'sports', 'soccer')
let SmokingPipe = new ImageConstructor ('SmokingPipe', './assets/smokingpipe.jpg', 'novelty', 'SmokingPipe')
let Gear = new ImageConstructor ('gear', './assets/sportsbra.jpg', 'sports', 'gear')
let Oldbike = new ImageConstructor ('oldbike', './assets/oldbike.jpg', 'novelty', 'oldbike')
let Spoons = new ImageConstructor ('spoon', '.assets/spoons.jpg', 'kitchen', 'spoons')
let RedKettle = new ImageConstructor ('redkettle', './assets/redkettle.jpg', 'kitchen', 'redkettle')
let RedVespa = new ImageConstructor ('redvespa', './assets/redvespa.jpg', 'novelty', 'redvespa')
let Teacup = new ImageConstructor ('teacup', './assets/teacup.jpg', 'kitchen', 'teacup')
let Hippie = new ImageConstructor ('hippie', './assets/hippie.jpg', 'novelty', 'hippie')
let Mixbox = new ImageConstructor ('mixbowl', './assets/mixbowl.jpg', 'kitchen', 'mixbowl')
let Records = new ImageConstructor ('records', './assets/oldrecords.jpg', 'novelty', 'records')
let Wok = new ImageConstructor ('wok', './assets/wok.jpg', 'kitchen', 'wok')
let Moped = new ImageConstructor ('moped', './assets/yellowmoped', 'novelty', 'moped')
let TypeTwo = new ImageConstructor ('typetwo', './assets/vintagetype.jpg', 'novelty', 'typetwo')
let Utensils = new ImageConstructor ('utensils', './assets/utensils.jpg', 'kitchen', 'utensils')
let HippyTwo = new ImageConstructor ('hippy2', './assets/hippy', 'novelty', 'hippy')

pictureArray.push (Disguise, Polaroid,Typewriter,Vespa, Airforce,Basketball,Jersey,Retro, Soccer, SmokingPipe, Gear, Oldbike)

//declare unassigned global variables for the four images to use locally as containers per page

let firstImage;
let secondImage;
let thirdImage;;
// let fifthImage;
// let sixthImage;



//ImageArray.category(sports)

function randomImage(){
    let randomNumber = Math.floor(Math.random() * ImageArray.length);
    let pictureIndex = pictureArray[randomNumber];
    pictureIndex.shown += 1
    return pictureIndex
}



function displayImages(){
   //reassign the elImageContainer to innerHTML each time the for loop runs
   elImageContainer.innerHTML = '';
   for(let i = 0; i < 3 ; i++){
       //declared local variable imageObject and assigned it the randomImage method  which invokes the global variable randomImage() method 
       let pictureObject = randomImage();//declaration is moved up above the elImage, to prevent conflicts with DOM HTML 
       //declared local variable elImage an assigned it an img tag in HTML
       //assign the imageObject to one of the three images in the image container and validate the image
       //use a conditional statement to validate that current random imageObjects are chosen from the ImageIndex array  
       if (i === 0){//moved up to immediately validate that randomImages are populating properly
           //to populate the images the firstimage must be the imageObject with the index "0" or false
           firstImage = pictureObject; 
           
            //if ImageObject is assign as index 1 then it can be the secondImage   
       }else if (i === 1) {
           //run a while the conition is true generate a new random image if the shown  firstImage category is is equal to the  secondImage id
           while(pictureObject.id === firstImage.id){
            pictureObject = randomImage();
               console.log('second while', pictureObject.id);
           }
           secondImage = pictureObject;
        //if imageObject is not index 0 or 1, or 2, then it can be used as the thirdImage
       } else if (i === 2){
         // run a while the conition is true generate a new random image if the shown thirdImage  is equal to first OR secondImage id
         while(pictureObject.id === firstImage.id || pictureObject.id === secondImagefirstImage.id) {
             imageObject = randomImage();
             console.log('third while', pictureObject.id);
         }
         thirdImage = pictureObject; 
       
       } else {
           // run a while the conition is true generate a new random image if the shown thirdImage  is equal to first OR secondImage id
           while(pictureObject.id === firstImage.id || pictureObject.id === secondImagefirstImage.id || pictureObject.id === thirdImagefirstImage.id) {
               pictureObject = randomImage();
               console.log('fourth while', imageObject.category);
           }
           fourthImage = pictureObject; 



       };
       
       let elImage = document.createElement('img');
       // append elImage to the elImageContainer in HTML via the DOM
       elImageContainer.appendChild(elImage);
       //set an id attribute to image element
       elImage.setAttribute('id', id);
       //set the image HTML source tag as the images file path 
       elImage.src = picObject.filePath;
       //added an eventlistener to each image and to store the event within the "click" property of the image variable
       elImage.addEventListener('click', imageClicked);
       //increment the shown property  by 1 for each, time the imageObject "shown"   
       pictureObject.shown += 1;
   };
};


function displayChartNow(){
    if(TotalClicked > 25){
        elImageContainer.removeEventListener('click', imageClicked)
        displayChart();
        localStorage.clear();
    };

};

