var cookie = (function(){
  return {
    setCookie : function(name,value,time){
      document.cookie = name + '=' + value + "; expires" + time;
      return this;
    },
    removeCookie : function(name){
      this.setCookie(name,"",-1);
      return this;
    },
    getCookie : function(name,callback){
      var allCookieArr = document.cookie.split("; ");
      var len = allCookieArr.length;
      for(var i = 0 ; i < len ; i ++){
        var tempAll = allCookieArr[i].split("=");
        if(tempAll[0] == name){
          callback(tempAll[1]);
          return this;
        }
      }
      callback(undefined);
      return this;
    }
  }
}())
