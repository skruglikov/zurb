import $ from 'jquery';
import 'what-input';
var slick = require('slick-carousel');

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();


$(document).ready(function(){
  $('#tweets-slider').slick({
  	infinite: false,
  	slidesToShow: 3,
  	arrows: true,
  	responsive: [
  		{
      		breakpoint: 1024,
      		settings: {
        		slidesToShow: 3,
        		infinite: true
     	 	}
    	}, {
      		breakpoint: 640,
      		settings: {
        		slidesToShow: 1,
        		dots: true
      		}
    	}
    ]
  });
});