function domainName(url){
    if(url.indexOf('://')!==-1) url=url.slice(url.indexOf('://')+3, url.lengt);
    if(url.indexOf('www')!==-1) url=url.slice(url.indexOf('www')+4, url.lengt);
    return url.split('.')[0];
  
  }