//Noah Gagnier

let testArray = ['hello', 'and', 'welcome', 'to', 'the', 'first', 'annual'];

function start(){
console.log("word wizard!")
const {countWords, mostFrequentWord, uniqueWordSorted, longestShortestWord} = require ('./logic/logic.js')
console.log(countWords(testArray));
}

start();