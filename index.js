const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//check each word ,capitalize the first character of each word
//loop through each sentence and check each word.

//let us split the words
//const str = 'Hello world';

//const split = str.split(' ')
//console.log(split) 
function titleCased(){
    const capTutorials = tutorials.map(t => {
      const words = t.split(" ").map(w => {
        return w.charAt(0).toUpperCase() + w.slice(1);
      }).join(" ");
      console.log(words);
      return words; 
    })
    return capTutorials;
  }

  //I have a question on how to join the words in one sentence using the easier method

  /*--const titleCased = tutorials.map(words => words.split(" ")//splits the strings to separate words
.map(capsLetter => capsLetter.charAt(0) //checks the firstlettter of the words and capitalizes them
  .toUpperCase() + capsLetter.slice(1))).join(" ");
  console.log(titleCased)--*/



  //console.log(tutorials.map(words => words.split(" ").map(capsLetter => capsLetter.charAt(0)
  //.toUpperCase() + capsLetter.slice(1))).join(" "))
