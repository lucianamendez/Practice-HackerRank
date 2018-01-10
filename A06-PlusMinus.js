/*Given an array of integers, calculate which fraction of its elements are positive,
 which fraction of its elements are negative, and which fraction of its elements are zeroes, 
 respectively. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places,
 though answers with absolute error of up to  are acceptable.

Input Format

The first line contains an integer,N, denoting the size of the array. 
The second line contains N space-separated integers describing an array of numbers .

Output Format

You must print the following 3 lines:

1) A decimal representing of the fraction of positive numbers in the array compared to its size.
2) A decimal representing of the fraction of negative numbers in the array compared to its size.
3) A decimal representing of the fraction of zeroes in the array compared to its size.*/


function plusMinus(arr) {
    var pos = 0;
    var neg = 0;
    var zer = 0;
        for(var i=0; i<arr.length; i++){
            if (arr[i] == 0){
                zer++;
            } else if (arr[i] < 0){
                    neg++;
                }
                else{
                    pos++;
                    
                }
            }
        console.log(pos/arr.length);
        console.log(neg/arr.length);
        console.log(zer/arr.length);
        }
    
function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinus(arr);
    
    }
    