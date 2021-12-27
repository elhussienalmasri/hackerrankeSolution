// url
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


function jumpingOnClouds(c) {
    // Write your code here
    let count=0;
    for(let i=0;i<c.length;i++){
        if(c[i+2]===0){ count++; i=i+1}
        else if(c[i+2]===1||i===c.length-2) {count++}
      
    }
    return count;

}
