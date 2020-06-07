// Patrickdoran.js




function generateHappyClouds(){
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  
  var cloudFilterOne = document.getElementById('cloudFilterOne'),
      cloudFilterTwo = document.getElementById('cloudFilterTwo'),
    cloudFilterThree = document.getElementById('cloudFilterThree');
  
    
    cloudFilterOne.setAttribute('seed',getRandomInt(2000));
    cloudFilterTwo.setAttribute('seed',getRandomInt(4000));
    cloudFilterThree.setAttribute('seed',getRandomInt(1000));
    

  
};

generateHappyClouds();