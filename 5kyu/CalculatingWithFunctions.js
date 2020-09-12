function zero(foo) {
    if(foo){
        return Math.floor(eval(`0${foo}`));
    }else{
      return 0;
    } 
  }
  function one(foo) {
    if(foo){
        return Math.floor(eval(`1${foo}`));
    }else{
      return 1;
    } 
  }
  function two(foo) {
    if(foo){
        return Math.floor(eval(`2${foo}`));
      }else{
        return 2;
      } 
  }
  function three(foo) {
    if(foo){
        return Math.floor(eval(`3${foo}`));
    }else{
      return 3;
    } 
  }
  function four(foo) {if(foo){
        return Math.floor(eval(`4${foo}`));
    }else{
      return 4;
    } }
  function five(foo) {if(foo){
        return Math.floor(eval(`5${foo}`));
    }else{
      return 5;
    } }
  function six(foo) {if(foo){
        return Math.floor(eval(`6${foo}`));
    }else{
      return 6;
    } }
  function seven(foo) {if(foo){
        return Math.floor(eval(`7${foo}`));
    }else{
      return 7;
    } }
  function eight(foo) {if(foo){
        return Math.floor(eval(`8${foo}`));
    }else{
      return 8;
    } }
  function nine(foo) {if(foo){
        return Math.floor(eval(`9${foo}`));
    }else{
      return 9;
    } }
  
  function plus(num) {
      return `+${num}`;
  }
  function minus(num) {return `-${num}`;}
  function times(num) {return `*${num}`;}
  function dividedBy(num) {return `/${num}`;}
