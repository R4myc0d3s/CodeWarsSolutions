export function spinWords(words: string): string {
  const wrds_Separated: Array<string> = words.split(" ");
  let spin_Complete: Array<String> = []; 
  for (let i =0; i < wrds_Separated.length; i++ ) {
   wrds_Separated[i].length >= 5 ? spin_Complete.push(wrds_Separated[i].split('').reverse().join('')) : spin_Complete.push(wrds_Separated[i].split('').join(''))  ;
  } 
    return spin_Complete.join(' ');
} 
​
/* After finishing my solution, I used AI to assess how efficient my code is and 
found redundancy in the false part of my condition. I will submit it as is however as this was my final solution */