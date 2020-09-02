
function solution(str){
    let newStr = '';
    for(let item of str){
if(item.charCodeAt()<=90){
    newStr+= ' '+item;
}else{
    newStr+=item;
}
    }
    return newStr;
}