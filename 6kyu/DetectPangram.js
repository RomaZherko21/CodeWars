function isPangram(str){

    let alph = {};
    for(let i = 97; i<123;i++){
        alph[String.fromCharCode(i)] = 0;
    }
    
    str.split('').filter(item=>item!==' ').forEach(item=>{
        item = item.toLowerCase();
        alph[item] += 1;
    })
    for(let key in alph){
        if (alph[key]==0) return false;
    }
    return true;
    }