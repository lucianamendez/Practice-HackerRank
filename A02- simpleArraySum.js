/*Given an array of n integers, can you find the sum of its elements?

Input Format

The first line contains an integer, n, denoting the size of the array. 
The second line contains ar space-separated integers representing the array's elements.

Output Format

Print the sum of the array's elements as a single integer.*/

function simpleArraySum(n, ar) {
   var sum = 0;		    		    
   for (var i = 0; i < ar.length; i++) {
   sum += ar[i];		    
}	
    return sum;
}

function main() {
    
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = simpleArraySum(n, ar);
    process.stdout.write("" + result + "\n");

}