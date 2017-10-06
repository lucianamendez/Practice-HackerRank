/*Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

Your task is to find their comparison points by comparing  with ,  with , and  with .

If a1>b1, then Alice is awarded 1 point.
If a1<b1, then Bob is awarded 1 point.
If a1=b1, then neither person receives a point.
Comparison points is the total points a person earned.

Given A and B, can you compare the two challenges and print their respective comparison points?

Input Format

The first line contains A space-separated integers, a0, a1, and a2, describing the respective values in triplet A. 
The second line contains B space-separated integers, b0, b1 and b2, describing the respective values in triplet B.

Constraints
1<= ai <=100
1<= bi <=100
Output Format

Print two space-separated integers denoting the respective comparison points earned by Alice and Bob.*/

function solve(a0, a1, a2, b0, b1, b2){
    var alice=0;
    var bob=0;
    if (a0 > b0 && a0 != b0){
        alice += 1;
    } 
    else if (a0 < b0 && a0 != b0){
        bob += 1;
    }
    
    if (a1 > b1 && a1 != b1){
        alice += 1;
    } 
    else if (a1 < b1 && a1 != b1){
        bob += 1;
    }
    
    if (a2 > b2 && a2 != b2){
        alice += 1;
    } 
    else if (a2 < b2 && a2 != b2){
        bob += 1;
    }
    
    return([alice,bob]);
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
    


}