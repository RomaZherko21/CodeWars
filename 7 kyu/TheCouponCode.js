function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode==correctCode && Number(new Date(expirationDate))-Number(new Date(currentDate))>=0){
       return true;
       }else{
      return false;
    }
  }
