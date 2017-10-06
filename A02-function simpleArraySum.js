function simpleArraySum(n, ar) {
   return (ar[0]+ar[1]+ar[2]+ar[3]+ar[4]+ar[5])
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = simpleArraySum(n, ar);
    process.stdout.write("" + result + "\n");

}