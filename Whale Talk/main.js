const input = 'a whale of a deal';
const vowels = ['a', 'e', 'i', 'o', 'u' ]
const resultsArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  //console.log('inputIndex = '+ inputIndex)
  for (let vowel = 0; vowel < vowels.length; vowel++){
   if (input[inputIndex] === vowels[vowel]){
      if(input[inputIndex] === 'e'){
        resultsArray.push('ee')
      } else if (input[inputIndex] === 'u'){
        resultsArray.push('uu')
      }
       else {
        resultsArray.push(input[inputIndex]);
      }
   }
  }
};
console.log(resultsArray.join('').toUpperCase())