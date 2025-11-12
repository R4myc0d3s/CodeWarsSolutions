export function sumDigits(n: number): number {
  const numString: string = Math.abs(n).toString();
  let digitString: string;
  let numSum: number =0;
  for (let i =0; i < numString.length; i++) {
     let digit: number = parseInt(numString[i]);
     numSum += digit;
  }
  return numSum;
}