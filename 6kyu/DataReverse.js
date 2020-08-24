function dataReverse(data) {
    let arr = [];
    let str = '';
    for(let item of data){
        if(str.length!==7){
            console.log(str.length)
            str+=item;
        }else{
            str+=item;
            arr.push(str);
            str = '';
    
        }
    }
    return arr.reverse().join('').split('').map(item=>item=+item)
    
    }