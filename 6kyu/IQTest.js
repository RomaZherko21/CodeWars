function iqTest(numbers) {
    numbers = numbers.split(" ");
    let even = numbers.filter(item=>item%2==0)
    let odd = numbers.filter(item=>item%2!==0)
    if(odd.length==1) return numbers.indexOf(odd[0])+1;
    if(even.length==1) return numbers.indexOf(even[0])+1;
  }