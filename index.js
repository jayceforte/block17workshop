// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    let numOfWords = this.data.split(' ');

    return numOfWords.length;
  }
  printNumbers() {
    //print the numbers in data
    for (let i = 1; i <= 9; i++) {
      console.log(i); 
    }
  }
  odds() {
    //return the odd numbers in data
    function getOdds(numbers) {
      const oddNumbers = [];
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
          oddNumbers.push(numbers[i]);
        }
      }
      return oddNumbers;
    }
  }
  evens() {
    //return the even numbers in data
    function getEvens(numbers) {
      const evenNumbers = [];
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
          evenNumbers.push(numbers[i]);
        }
      }
      return evenNumbers;
    }

  }

  sum() {
    //return the sum of the numbers
    function getSum(numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    
  }
  product() {
    //return the product of the numbers

  }
  greaterThan(target) {
    //return the numbers greater than the target
  }
  howMany(target) {
    //return the count of a given number
    let howMany = 0
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i] === target) {
          howMany += 1;
       }
    return howMany;
}
}
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,4,5,6,7,8,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds('1,3,5,7,9')); //returns odd numbers
console.log(n1.evens('2,4,6,8')); //returns even numbers
console.log(n1.sum('45')); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
