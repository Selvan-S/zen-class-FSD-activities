// Print odd numbers in an array
//IIFE
(function printOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7]);

//Anonymous
let printOddNumber = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};
printOddNumber([1, 2, 3, 4, 5, 6, 7]);

//Arrow function
let printOddinArrow = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};
printOddinArrow([1, 2, 3, 4, 5, 6, 7]);

// Convert all the strings to title caps in a string array

//IIFE
(function convertToTitleCaps(str) {
  const strArr = str.trim().split(" ");
  let titleCapsStr = "";
  for (let i = 0; i < strArr.length; i++) {
    titleCapsStr +=
      strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase() + " ";
  }
  console.log(titleCapsStr);
})("i am selvan s ");

// Anonymous
let convertToTitleCaps = function (str) {
  const strArr = str.trim().split(" ");
  let titleCapsStr = "";
  for (let i = 0; i < strArr.length; i++) {
    titleCapsStr +=
      strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase() + " ";
  }
  console.log(titleCapsStr);
};
convertToTitleCaps("The Task name is");

//Arrow function
let convertToTitleCapsInArrow = (str) => {
  const strArr = str.trim().split(" ");
  let titleCapsStr = "";
  for (let i = 0; i < strArr.length; i++) {
    titleCapsStr +=
      strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase() + " ";
  }
  console.log(titleCapsStr);
};
convertToTitleCapsInArrow(
  "Convert all the strings to title caps in a string array"
);

// Sum of all numbers in an array
//IIFE
(function sumAllNum(numArr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  console.log(sum);
})([1, 5, 1, 5, 9, 23, 25]);

// Anonymous
let sumAllNum = function (numArr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  console.log(sum);
};
sumAllNum([684, 654, 98755, 6548]);

//Arrow function
let sumAllNumInArrow = (numArr) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  console.log(sum);
};
sumAllNumInArrow([15, 587, 4657]);

// Return all the prime numbers in an array
//IIFE
(function primeNum(numArr) {
  let primeNums = "";
  let flag = false;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] == 1 || typeof numArr[i] !== "number") {
      flag = true;
    } else {
      for (let j = 2; j <= Math.round(numArr[i] / 2); j++) {
        if (numArr[i] % j == 0) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      flag = false;
    } else {
      primeNums += numArr[i] + " ";
    }
  }
  console.log(primeNums);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 653]);

// Anonymous
let primeNum = function (numArr) {
  let primeNums = "";
  let flag = false;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] == 1 || typeof numArr[i] !== "number") {
      flag = true;
    } else {
      for (let j = 2; j <= Math.round(numArr[i] / 2); j++) {
        if (numArr[i] % j == 0) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      flag = false;
    } else {
      primeNums += numArr[i] + " ";
    }
  }
  if (primeNums === "") {
    console.log("No prime numbers in this array");
  } else {
    console.log(primeNums);
  }
};
primeNum([684, 654, 98755, 6548]);

// Arrow function
let primeNumInArrow = (numArr) => {
  let primeNums = "";
  let flag = false;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] == 1 || typeof numArr[i] !== "number") {
      flag = true;
    } else {
      for (let j = 2; j <= Math.round(numArr[i] / 2); j++) {
        if (numArr[i] % j == 0) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      flag = false;
    } else {
      primeNums += numArr[i] + " ";
    }
  }
  console.log(primeNums);
};
primeNumInArrow([15, 587, 4657]);

// Return all the palindromes in an array
//IIFE
(function palindrome(palindromesArr) {
  let palindromes = "";
  for (let i = 0; i < palindromesArr.length; i++) {
    let str = palindromesArr[i].toString();
    if (str.length <= 1) {
      continue;
    } else {
      if (str == str.split("").reverse().join("")) {
        palindromes += str;
        if (i < palindromesArr.length - 1) {
          palindromes += ", ";
        }
      }
    }
  }
  if (palindromes == "") {
    console.log("No palindromes in this array");
  } else {
    console.log(palindromes);
  }
})([1, 5, "as", 5, 93, 2002, "mom"]);

// Anonymous
let palindrome = function (palindromesArr) {
  let palindromes = "";
  for (let i = 0; i < palindromesArr.length; i++) {
    let str = palindromesArr[i].toString();
    if (str.length <= 1) {
      continue;
    } else {
      if (str == str.split("").reverse().join("")) {
        palindromes += str;
        if (i < palindromesArr.length - 1) {
          palindromes += ", ";
        }
      }
    }
  }
  if (palindromes == "") {
    console.log("No palindromes in this array");
  } else {
    console.log(palindromes);
  }
};
palindrome([684, 654, 98755, 6548]);

// Arrow function
let palindromeInArrow = (palindromesArr) => {
  let palindromes = "";
  for (let i = 0; i < palindromesArr.length; i++) {
    let str = palindromesArr[i].toString();
    if (str.length <= 1) {
      continue;
    } else {
      if (str == str.split("").reverse().join("")) {
        palindromes += str;
        if (i < palindromesArr.length - 1) {
          palindromes += ", ";
        }
      }
    }
  }
  if (palindromes == "") {
    console.log("No palindromes in this array");
  } else {
    console.log(palindromes);
  }
};
palindromeInArrow([15, 587, 4657]);

// Return median of two sorted arrays of the same size.
function getMedian(ar1, ar2, n) {
  let i = 0;
  let j = 0;
  let count;
  let m1 = -1,
    m2 = -1;

  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = ar1[0];

      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];

      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];

      j++;
    }
  }

  return (m1 + m2) / 2;
}
let ar1 = [1, 3, 4, 9, 6].sort((a, b) => a - b);
let ar2 = [2, 5, 7, 8, 10].sort((a, b) => a - b);
let n1 = ar1.length;
let n2 = ar2.length;
if (n1 == n2) console.log("Median is " + getMedian(ar1, ar2, n1));
else console.log("Doesn't work for arrays of unequal size");

// Remove duplicates from an array
(function removeDuplicate(arr) {
  let obj = {};
  let removedDuplicateArr = [];
  for (const element of arr) {
    if (!obj[element]) {
      removedDuplicateArr.push(element);
      obj[element] = true;
    }
  }
  console.log(removedDuplicateArr);
})([1, 5, 6, 5, 93, 2002, 54, 93]);

// Rotate an array by k times
(function rotateArray(arr, k) {
  let rotatedArr = [...arr];
  for (let i = 0; i < k; i++) {
    let lastElement = rotatedArr.splice(rotatedArr.length - 1, 1);
    rotatedArr = [...lastElement, ...rotatedArr];
  }
  console.log(rotatedArr);
})([1, 5, 6, 5, 93, 2002, 54, 93], 3);
