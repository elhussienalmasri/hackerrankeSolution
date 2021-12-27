 //sales by mtch hackerranke 
 //https://www.hackerrank.com/challenges/sock-merchant/submissions/code/247634550?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


 function sockMerchant(n, ar) {
    // Write your code here
    let map={};
    let count=0;
    for(let v of ar){
        map[v]=(map[v]||0)+1;
    }
    for(let key in map){
        count+=Math.floor(map[key]/2);
    }
    return count;
}

