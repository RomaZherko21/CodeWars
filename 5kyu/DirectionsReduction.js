function dirReduc(arr, counter = 1) {
    counter = 0;
    let dir = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
};
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (dir[arr[i]] == arr[i + 1]) {
        counter++;
        i++;
    } else {
        newArr.push(arr[i]);
    }
}
if (counter == 0){
    return arr;  
} else{
return dirReduc(newArr, counter);
}
}