/* Repo: boolean-uk-js-word-censor

Description
Our program takes in text, a list of words to censor, what to censor them with (****, BEEP, xxx, !!!, etc), and it returns a censored version of the text.

Instructions
- Download this template => https://codesandbox.io/s/word-censor-4doxt?from-embed=&file=/index.js
- Do not use Codesanbox to code your solution
- Use the provided array as a text input to be censored
- You don't have to use prompts for now, just hard-code the rest of your user inputs
- Create a function that takes a replacement string, a word to censor, and censors the text input
- Print out the censored text to the console

Tips
- Remember that functions should do only one thing very well
- Think of how you can make your code readable by using functions

Challenge 1
Together with the new censored version, return a count of how many words were censored in the original text.

Challenge 2
Instead of using hard-coded inputs, use prompts to grab:
- The full text to censor
- The words to be censored
- What should replace the censored words
*/

//Function:
// => Inputs:"replacement string", word to censor 
// => Action: replaces word to censor it the replacement string 
// => Return: the new array if one was found, flase if string couldt be found 


function censor(text, replacementString, wordToCensor) {
  
  //✔ take the string, and put each word in an array called words
  const wordsArray = text.split(' ')
  console.log(`words: ${wordsArray}`)
  
  //✔ check the array against wordToCensor, note down its index in an array, make a count of the words frequency
  let wordCount = 0

  for (let word in wordsArray) {

    if (wordsArray[word] === wordToCensor) {
      
      wordsArray.splice(word, 1, replacementString)
      console.log(wordsArray)

      wordCount ++

      console.log(`count ${wordCount}`)

    }
    // if there has been no word counted, and we are on the last word in the array thn print there is no word
    else if (wordsArray[word] === wordsArray[wordsArray.length-1]) {
      console.log()
    }
    else if (wordCount === 0 && wordsArray[word] === wordsArray[wordsArray.length-1]) {
      console.log(`There is no such word ☹`)
      return false
    }
  
  }
 }

 const text =
 "Lorem, ipsum ipsum ipsum dolor sit amet, consectetur adipisicing elit, \
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
 ut aliquip ex ea tempor commodo consequat. Duis aute irure dolor in reprehenderit \
 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
 Excepteur sint occaecat tempor cupidatat non proident, \
 sunt in culpa qui officia deserunt mollit anim id est laborum.";

 
  censor(text, "******", "lndsnj")




