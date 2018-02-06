
export const isNumberEven = (i) => {
  // i will be an integer.

  // Return true if it's even, and false if it isn't.
 
    if(i % 2 === 0) {
        return true;
    } else {
        return false;
    }

};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
  var filenameArray = str.split(".");
    if(filenameArray.length <= 1) {
        return false;
    } else {
        return filenameArray[filenameArray.length - 1];
    }
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
   arr.sort(function(c, d){
    if(typeof c === 'string')
    {
      if(typeof d === 'string') return d.length - c.length;
      else return -1;
    }
    else
    {
      if(typeof d === 'string') return 1;
      else return 0;
    }
  });

  return arr[0];

};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
  var strInArray = str.split( '' );
  var ReverseArray = strInArray.reverse(); 
  return ReverseArray.join( '' );
  
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
  return reverseString(str).toUpperCase() === str.toUpperCase(); 

};    

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
  var sum = 0,
        n, len;

    if(typeof arr === 'number') {
        //  i has been defined as a simple number through a recursive call
        sum += arr;
    } else if(Array.isArray(arr)) {
        //  i is an array, so iterate through it
        for(n= 0, len=arr.length; n<len; n++) {
            //  recursive call
            sum += nestedSum(arr[n]);
        }
    }

    return sum;
};
