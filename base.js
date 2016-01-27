// JS doucment

window.onload=function(){
	var oDiv=document.getElementById('div1');
	
	oDiv.onmousedown=function(ev){
		var oEvent=ev||event;
		
		var disX=oEvent.clientX-oDiv.offsetLeft;
		var disY=oEvent.clientY-oDiv.offsetTop;
		
		oDiv.onmousemove=function(){
			
		}
		
	}



}