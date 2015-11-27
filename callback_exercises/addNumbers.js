var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  numsLeft -= 1;
  reader.question("Enter a number: ", function (numString) {
    var num = parseInt(numString);
      sum += num;

      if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
      }
      else {
        console.log(sum);
        addNumbers(sum, numsLeft, completionCallback);
      }
  });
}


addNumbers (0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
