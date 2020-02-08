# urlShortening
 JavaScript Function to shorten a url (saving the result in memory)
 and a function to obtain the initial url given the shortened string. 
 
 Example
 
 var shortStringUrl = getShortStringUrl('https://github.com/apiaryio/');
console.log('Short String Url : ' + shortStringUrl );

var stringUrl = initialUrl(shortStringUrl);
console.log('Initial Url : ' + stringUrl);

 Example output:
 
 "Short String Url : qegufeya"
"Initial Url : https://github.com/apiaryio/"
