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