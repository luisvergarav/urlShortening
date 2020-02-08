var map = new Map(); 
function getShortStringUrl(stringUrl){
  
  var k = Math.random().toString(36).replace(/[^a-z]+/g, '');

  map.set(k, stringUrl); 
  return k;
}

function initialUrl(shortStringUrl){
return map.get(shortStringUrl);  
}

var shortStringUrl = getShortStringUrl('https://github.com/apiaryio/');
console.log('Short String Url : ' + shortStringUrl );

var stringUrl = initialUrl(shortStringUrl);
console.log('Initial Url : ' + stringUrl);
