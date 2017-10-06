/*Review the code provided in the editor below, then complete the solveMeFirst function 
so that it returns the sum of two integers read from stdin.

Input Format
Code that reads input from stdin is provided for you in the editor. 
There are  lines of input, and each line contains a single integer.

Output Format
Code that prints the sum calculated and returned by solveMeFirst is provided for you in the editor.*/

function solveMeFirst(a, b) {
  return(a+b);  
  
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}
