
 // Repeated String hackerrank rank
//https://www.hackerrank.com/challenges/repeated-string/submissions/code/247637381?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function repeatedString(s, n) {
    // Write your code here
    let count=0;
    for (let i=0;i<s.length;i++){
        if (s[i]=='a') count++;
    }
    count=(Math.trunc(n/s.length))*count;
    let remainder= n % (s.length);
    for(let i=0;i<remainder;i++){
        if(s[i]==='a') count++;
    }
    return count;

}