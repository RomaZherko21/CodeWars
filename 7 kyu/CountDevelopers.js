function countDevelopers(list) {
    return list.filter(item=>{
      if(item.continent=='Europe' && item.language=='JavaScript')return true
    }).length
  }