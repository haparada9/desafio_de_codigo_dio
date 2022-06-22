let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if(n%2 === 0){
             totalMatches += n/2;
              n = n/2;
        }else{
            totalMatches += (n-1)/2;
            n = (n-1)/2+1;
        }
    }

print(totalMatches);


//No matter how your heart is grieving
//if you keep on believing
//the dream that you wish will come true.