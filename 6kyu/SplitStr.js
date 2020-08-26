function solution(str){
    let arr = [];
    str = str.split('');
    for(let i = 0; i<str.length; i=i+2){
        str[i+1]==undefined ? arr.push(str[i]+"_") : arr.push(str[i]+str[i+1]);
    }
    return arr;
 }