'use strict'

var allItems = [];

function Item ( displayName, filePath, id ){

    this.displayName = displayName;
    this.filePath = filePath;
    this.displayCount = 0;
    this.voteCount = 0;
    this.id = id;

    allItems.push( this );
}

var bag = new Item('bag', 'images/bag.jpg', 'bag');
var banana = new Item('banana', 'images/banana.jpg', 'banana');
var bathroom = new Item('bathroom', 'images/bathroom.jpg', 'bathroom');
var boots = new Item('boots', 'images/boots.jpg', 'boots');
var breakfast = new Item('breakfast', 'images/breakfast.jpg', 'breakfast');
var bubblegum = new Item('bubblegum', 'images/bubblegum.jpg' , 'bubblegum');
var chair = new Item('chair', 'images/chair.jpg' , 'chair');
var cthulhu = new Item('cthulhu', 'images/cthulhu.jpg' , 'cthulhu');
var dogDuck = new Item('dog-duck', 'images/dog-duck.jpg' , 'dogDuck');
var dragon = new Item('dragon', 'images/dragon.jpg' , 'dragon');
var pen = new Item('pen', 'images/pen.jpg' , 'pen');
var petSweep = new Item('pet-sweep', 'images/pet-sweep.jpg' , 'petSweep');
var scissors = new Item('scissors', 'images/scissors.jpg' , 'scissors');
var shark = new Item('shark', 'images/shark.jpg' , 'shark');
var sweep = new Item('sweep', 'images/sweep.png' , 'sweep');
var tauntaun = new Item('tauntaun', 'images/tauntaun.jpg' , 'tauntaun');
var unicorn = new Item('unicorn', 'images/unicorn.jpg' , 'unicorn');
var usb = new Item('usb', 'images/usb.gif' , 'usb');
var waterCan = new Item('water-can', 'images/water-can.jpg' , 'waterCan');
var wineGlass = new Item('wine-glass', 'images/wine-glass.jpg' , 'wineGlass');

var randomImage = function() {
    var numberItem = Math.floor (Math.random() * (allItems.length));
    return allItems[numberItem].filePath; // only pushing path, but later we want other properties
                                            // so we would return entire obj instead
}

var createSet = function () {
    // give an array of randomImages with no duplicates
    var images = [];
    do {
        var imgPath = randomImage();
        if ( !images.includes( imgPath ) ) { // does this random image exist in the images array
            images.push( imgPath );
        }
    } while ( images.length < 6 );

    return images; // ['images/water.', 'images/wine.', 'images/unicorn'];
}

var displayImage = function(){
    var imgPaths = createSet(); // ['images/water.', 'images/wine.', 'images/unicorn'];
    // var imgs = [{}, {}, { name: '', path: '', id: ''}];
    
    var elImage1 = document.getElementById('first');
    elImage1.setAttribute('src', imgPaths[0] );
    // elImage1.setAttribute('src', img[0].path );
    // elImage1.setAttribute( 'class', img[0].id );
    
    var elImage2 = document.getElementById('second');
    elImage2.setAttribute('src', imgPaths[1] );
    
    var elImage3 = document.getElementById('third');
    elImage3.setAttribute('src', imgPaths[2] );
}

// count: function(voteCount){
//     voteCount += 1;

//     var selectItems = allItems[voteCount.getAttribute( 'src')];
//     selectItems.count++;
// }

//     var el = document.getElementsByTagName('img');
//     el.addEventListener('click', count());

var survey = document.getElementById( 'survey' );
survey.addEventListener( 'click', voteHandler );

function voteHandler ( event ) {
    // determine which element was clicked
    // find that element's object in allItems
    // increase that object's votes
    // redraw the images

    console.log( event.target );
    var clickedEle = event.target;
    console.log( 'clicked ele id', clickedEle.id );
    console.log( 'clicked ele src', clickedEle.src );
    console.log( 'clicked ele classList', clickedEle.classList );
    
    console.log( 'allllll the items', allItems );
}

displayImage();