"strict mode"

// declare empty array
let selectionArray = []

let elImageContainer = document.getElementById('imageContainer')
let elStartOver = document.getElementById('startOver')


let BusMall = function (name, filePath, id){
  this.name = name;
  this.filePath = filePath;
  this.id = id;
  this.selected = 0;
  this.shown = 0
}

let totalSelected;

if(localStorage.length > 0){
  let getData = localStorage.getItem('BusMallStorage');
  selectionArray = JSON.parse(getData);
  let getMoreData = localStorage.getItem('TotalSelectedStorage');
  totalSelected = parseInt(getMoreData)
} else{
  totalSelected = 0; //instantiating new reference to our images objects
  let airMax = new BusMall('Nike Air Max', './assets/airmax.jpg', 'air max');
  let airOne = new BusMall('Air Force One', './assets/airone.jpg', 'red air force');
  let vespa = new BusMall('vespaBike', './assets/vesp.jpg', 'vintage vespa');
  let sportsBra = new BusMall('Sports Bra', './assets/sportsbra.jpg', 'sports bra');
  let baking = new BusMall('Baking items', './assets/baking.jpg', 'baking');
  let brownAirForce = new BusMall('Brown Airforce One', './assets/brownairforce.jpg', 'brown Air');
  let dogMask = new BusMall('Doggie disguise', './assets/dogdisguise.jpg', 'dog guise')
  let eggHolder = new BusMall('Egg Holder', './assets/egholder.jpg', 'egg holder');
  let hippie = new BusMall('Hippie', './assets/hippie.jpg', 'hippie');
  let hipster = new BusMall('Hipster', './assets/hipster.jpg', 'hipster');
  let lakersJersey = new BusMall('Laker Jersey', './assets/lakersjersey.jpg', 'laker jersey');
  let mixBowl = new BusMall('Mixing Bowl', './assets/mixbowl.jpg', 'mixing bowl');
  let nikeBall = new BusMall('Nike Basketball', './assets/nikeball.jpg', 'nike basketball');
  let nikeBoots = new BusMall('Nike Boots', './assets/nikeboots.jpg', 'soccer boots');
  let oldBike = new BusMall('Old Bike', './assets/oldbike.jpg', 'nike boots');
  let oldRecords = new BusMall('Old Records', './assets/oldrecords.jpg', 'old records');
  let oldTyper = new BusMall('Old Typewriter', './assets/oldtyper.jpg', 'old typer');
  let polaroidCam = new BusMall('Polaroid Camera', './assets/polaroidcamera.jpg', 'polaroid camera');
  let redKettle = new BusMall('Red Kettle', './assets/redkettle.jpg', 'red kettle');
  let redVespa = new BusMall('Red Vespa', './assets/redvespa.jpg', 'redvesp');
  let retroJordan = new BusMall('Retro Jordan', './assets/retrojordan.jpg', 'retro jordans');
  let smokePipe = new BusMall('Smoking Pipe', './assets/smokingpipe.jpg', 'smoking pipe');
  let spoons = new BusMall('Spoons', './assets/spoons.jpg', 'plastic spoons');
  let teaCup = new BusMall('Tea Cup', './assets/teacup.jpg', 'fancy teacup');
  let utensils = new BusMall('Utensils', './assets/utensils.jpg', 'kitchen utensils');
  let vintageType = new BusMall('Vintage Typewriter', './assets/vintagetype.jpg', 'type writer');
  let wok = new BusMall('Iron Wok', './assets/wok.jpg', 'iron wok');
  let yellowMoped = new BusMall('Yellow Moped', './assets/yellowmoped.jpg', 'yellow vesp');
  selectionArray.push(airMax, airOne, vespa, sportsBra, baking, brownAirForce, dogMask, eggHolder, hippie, hipster, lakersJersey, mixBowl, nikeBall, nikeBoots, oldBike, oldRecords, oldTyper, polaroidCam, redKettle, redVespa, retroJordan, smokePipe, spoons, teaCup, utensils, vintageType, wok, yellowMoped) 
} //all pushed to fill the empty selectionArray

// Create a function to shuffle/randomize the images in the array
function shuffleImage(){
  let randomNumber = Math.floor(Math.random()* selectionArray.length);
  let imageIndex = selectionArray[randomNumber];
  return imageIndex; //verify use of imageIndex and imageObject usage
}

// Declarations/Placeholders for three images as per app parameters
let firstImage;
let secondImage;
let thirdImage;

//function called to ensure images are seen once page is initiated
displayImages()

// declare a function to display images in body of page
function displayImages(){
  elImageContainer.innerHTML = '';
  for(let i=0; i<3; i++){
    let imageObject = shuffleImage();
    if(i===0){
      firstImage = imageObject;
    }else if (i === 1){
      while(imageObject.id === firstImage.id){
        imageObject = shuffleImage();
      }
      secondImage = imageObject;
    }else {
      while(imageObject.id === firstImage.id || imageObject.id === secondImage.id){
        imageObject = shuffleImage();
      }
      thirdImage = imageObject
    } 
    let elImage = document.createElement('img');
    elImageContainer.appendChild(elImage);
    elImage.setAttribute('id', imageObject.id);
    elImage.src = imageObject.filePath;
    elImage.addEventListener('click', imageClicked);
    imageObject.shown += 1;
    if(totalSelected > 24){
      elImage.removeEventListener('click', imageClicked);
    } // Display chart function declared below to show chart at the end of eventListener
    let elCountDown = document.getElementById('selectTracker');
    elCountDown.innerHTML = 25 - totalSelected;
  }  
}

// displayImages()
//function called after function declaration as well to facilitate image listening functionalities

function startOver(){
  localStorage.clear();
  location.reload();
}


function imageClicked(event){
  console.log(localStorage);
  if (event.target.id === firstImage.id){
    firstImage.selected += 1;
  }else if(event.target.id === secondImage.id){
    secondImage.selected += 1;
  }else if(event.target.id === thirdImage.id){
    thirdImage.selected += 1;
  };
  totalSelected += 1;
  console.log(totalSelected);
  displayImages();
  localStorage.setItem('BusMallStorage', JSON.stringify(selectionArray));
  localStorage.setItem('TotalSelectedStorage', totalSelected);
  displayMyChart(); 
};

function displayMyChart(){
  if(totalSelected > 24){
    elImageContainer.innerHTML = '';
    displayChart();
  }
};
