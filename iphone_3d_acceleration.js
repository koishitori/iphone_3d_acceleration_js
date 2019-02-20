class iphone_3d_acceleration{
  init(func){
    var ua = navigator.userAgent;
//    if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod')  > -1){
      this.do_action = function(){func();};
      window.addEventListener('devicemotion', function(event) {
      	var gv = event.accelerationIncludingGravity;
      	this.gx = gv.x;
      	this.gy = gv.y;
      	this.gz = gv.z;
        this.do_action();
      }.bind(this));
//    }
  }

  do_action(){
    return 0;
  }
}
