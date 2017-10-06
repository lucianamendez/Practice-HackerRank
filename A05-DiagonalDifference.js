/*Given a square matrix of size NxN, calculate the absolute difference between the sums of its diagonals.

Input Format

The first line contains a single integer,N. The next N lines denote the matrix's rows, with each line containing N space-separated integers describing the columns.

Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.*/

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
  	var sum = 0, diagonal1 = 0, diagonal2 = 0;
    
	for (var i = 0; i < a.length; i++) {
		diagonal1 += a[i][i];
		diagonal2 += a[i][Math.abs(i -(a.length-1))];
	}

	
	sum = Math.abs(diagonal1 - diagonal2);
    console.log(sum);
}
