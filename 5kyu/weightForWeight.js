function orderWeight(str) {
    let arr = [];
    str.split(' ').sort((a,b)=>a-b).forEach(item=>{
let num = item.split('').reduce((pre,d)=>{
return pre+=+d
},0)
arr.push([item,num])
    })
    return arr.sort((a,b)=>{
        if(a[1]>b[1]) return 1;
        if(a[1]<b[1]) return -1;
        if(a[1]==b[1]){
            if(a[0]>b[0]) return 1;
            if(a[0]<b[0]) return -1;
        }
    }).map(item=>item[0]).join(' ');
}