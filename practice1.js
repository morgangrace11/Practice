function getLongestWordOfMixedElements(array) {
  var funcArray = stringArray(array);
  if (funcArray.length > 0) {
    var longestWord = funcArray[0];
    funcArray.forEach(function(word) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
  } else {
    longestWord = "";
  }
  return longestWord;
}

var stringArray = function(array) {
  var strArr = array.filter(function(x) {
    return typeof(x) === 'string';
  });
  return strArr;
}


function getLongestNumberAmongMixed(array) {
  var tempNum = 0
   array.forEach(function(x) {
    if (typeof(x) === 'number' && array.length > 0) {
      if (x > tempNum) {
        tempNum = x;
      }
    }
  });
  return tempNum;
}

// getLongestNumberAmongMixed([3, 'word', 5, 'up', 3, 1])

function computeSummationToN(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function computeFactorialOfN(n) {
  var prod = 1;
  for (var i = 1; i <=n; i++) {
    prod *= i;
  }
  return prod;
}

function getLongestOfThreeWords(word1, word2, word3) {
  var wordArray = [word1, word2, word3];
  var longestWord = wordArray[0];
  var check = wordArray.filter(function(word) {
    if (word.length > longestWord.length) {
      return word;
    }
    return longestWord;
  });
  return check.toString();
}

function multiplyBetween(num1, num2) {
  var prod = 1;
  if (num2 < num1 || num1 === num2) {
    prod = 0;
  } else {
  for (var i = num1; i < num2; i++) {
    prod *= i;
    }
  }
  return prod;
}

function findShortestOfThreeWords(word1, word2, word3) {
  var wordArray = [word1, word2, word3];
  return wordArray.reduce(function(acc, curr) {
    return curr.length < acc.length ? curr : acc;
  });
}

function computeSumBetween(num1, num2) {
  var sum = 0;
  if (num2 < num1 || num1 === num2) {
    return 0;
  }
  for (var i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}





function transformFirstAndLast(array) {
  var object = {}
  object[array[0]] = array[array.length-1]
  return object;
}

function fromListToObject(array) {
  var obj = {};
  array.forEach(function(nest) {
    obj[nest[0]] = nest[1];
  });
  return obj;
}


function transformEmployeeData(array) {
  var array = [];
  for (var i = 0; i < array.length; i++) {
    var obj = {};
    for (var j = 0; j < array[i].length; j++) {
      obj[array[i][j][0]] = array[i][j][1];
    }
  array.push(obj);
  }
  return array;
}

function getAllKeys(obj) {
  var keysArr = [];
  for (var key in obj) {
    keysArr.push(key);
  }
  return keysArr;
}

function convertObjectToList(obj) {
  var array1 = [];
  for (var key in obj) {
    var array2 = [];
    array2.push(key, obj[key]);
      array1.push(array2);
  }
  return array1;
}

