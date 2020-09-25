function validISBN10(isbn) {
    if(/^[0-9]{9}[0-9Xx]$/.test(isbn)){
     let sum = isbn.split('').reduce((pre,item,id)=>{
return pre+= ++id * item;
    },0)%11
    if(!sum){
        return true;
    }else{
        return false;
    }
    }else{
        return false;
    }
}
