class iphone_3d_acceleration{
  constructor(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod')  > -1){
      window.addEventListener('devicemotion', function(event) {
      	var gv = event.accelerationIncludingGravity;
      	x = gv.x;
      	y = gv.y;
      	z = gv.z;
      	this.rotX=Math.atan(x/z)/Math.PI*180;
      	this.rotY=Math.atan(y/z)/Math.PI*180;
      	this.rotZ=Math.atan(x/y)/Math.PI*180;
        do_action();
      }.bind(this));
    }
  }

  do_action(){
    return 0;
  }
}
