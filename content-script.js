const targetWords = ['must', 'slashdot'];
function createRegex(word) {
  return new RegExp(` ${word} `, 'gi');
}
const targetRegexes = targetWords.map(createRegex);
const wordMatchRegExp = /[^\s]+/g; // Regular expression
var totalWordCount = 0;
var totalMatchCount = 0;

console.log(targetWords);
console.log(targetRegexes);

var replace = "regex\\d";
var re = new RegExp(replace,"g");

"mystring1".replace(re, "newstring");


var elements = document.body.getElementsByTagName('*');

// Loop through all elements
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  if (element.tagName != 'SCRIPT'){
    const words = element.textContent.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordArray = [...words]
    totalWordCount = totalWordCount + wordArray.length;
    // Check if the element contains one of the targetWords
    for (var j = 0; j < targetWords.length; j++) {
      const matched = element.textContent.matchAll(targetRegexes[j]);
      // matchAll returns an iterator, convert to array to get word count
      const matchedArray = [...matched]
      totalMatchCount = totalMatchCount + matchedArray.length;
      if (matchedArray.length > 0) {
        // Highlight the word "help" in yellow
        element.innerHTML = element.innerHTML.replace(targetRegexes[j], ' <span style="background-color: yellow;">' + targetWords[j] + '</span> ');
      }
    }
  }
}

const percent = ((totalMatchCount / totalWordCount) * 100).toFixed(2);
alert(`⏱️ Matched ${totalMatchCount} out of ${totalWordCount} words (%${percent}) for target words such as ${targetWords[0]},  ${targetWords[1]}, ...`);
// commented out code below is to add to the top of the page directly but instead we are using the alert above
// const badge = document.createElement("h1");
// badge.classList.add("color-secondary-text", "type--caption");
// badge.textContent = `⏱️ Matched ${totalMatchCount} out of ${totalWordCount} words (%${percent}) for target words such as ${targetWords[0]},  ${targetWords[1]}, ...`;
// document.body.insertAdjacentElement("afterbegin", badge);