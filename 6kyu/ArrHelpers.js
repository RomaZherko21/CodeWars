Array.prototype.sum = function(){
    return this.reduce((prev, item)=>{
        return prev+=item;
    },0)
}

Array.prototype.square = function(){
    return this.map(item=>{
        return item**2;
    })
}

Array.prototype.cube = function(){
    return this.map(item=>{
        return item**3;
    })
}

Array.prototype.average = function(){
    return (this.reduce((prev, item)=>{
        return prev+=item;
    },0))/this.length;
}

Array.prototype.even = function(){
    return this.filter(item=>{
        return item%2==0;
    })
}

Array.prototype.odd = function(){
    return this.filter(item=>{
        return item%2!==0;
    })
}