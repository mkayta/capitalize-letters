// Good Luck 💪🏾
function makeCapital(word){
let wordsplit=word.split(" ");
let wordcapital=wordsplit.map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
let wordjoin=wordcapital.join(" ");
return wordjoin

}

console.log(makeCapital("my name is ali")) 
console.log(makeCapital("fikrcamp Bootcamp")) 
console.log(makeCapital("i live In Paris")) 