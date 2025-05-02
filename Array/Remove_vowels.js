let inputString = "Hey Geeks of GeeksforGeeks!";
function removeVowels(input) {
    console.log()
  return input
    .split("")
    .filter((char) => !"aeiouAEIOU".includes(char)).join('')
    
}

let result = removeVowels(inputString);
console.log(result);
// Hy Gks f GksfrGks!
