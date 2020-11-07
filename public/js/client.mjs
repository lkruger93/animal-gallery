//import animals module

import { animals } from './animals.js';

// Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
let outputHTML = '';
// Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
const gallery = document.querySelector('.gallery');  


// Loop through `animals` array using `array.forEach()`. 
animals.forEach(function(image){
  outputHTML += `<figure class="card">
  <img src="${image.address}" alt="${image.title}" width="${image.width}" height="${image.height}">
  <figcaption>photo by ${image.credit}, source is <a href="${image.url}">${image.url}</a></figcaption>
  </figure>`;
  
});

gallery.innerHTML = outputHTML;

  // hallelujah is my word of the day!!!!
  //i love when things work even though theyre confusing
