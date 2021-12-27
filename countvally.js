
//countingValleys hackerranke
//https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


function countingValleys( path) {
    // Write your code here
    let count=0;
    let result=0;
    for(let i=0;i<path.length;i++){
        if(path[i]==='U'){
            result+=1
            if (result===0)count++;
        }else result-=1;
    }
   return count;
}