window.onload=function(){

	if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function(){
                FastClick.attach(document.body);
            }, false);
        }

	var view =document.getElementById('view');
	var box=view.getElementsByTagName('div');
	for(var i=0;i<40;i++){
		var p=parseInt(Math.random()*4);
		for(var j=0;j<4;j++){
			if(j==p){
				view.innerHTML+="<div class='black'></div>";
			}
			else
			view.innerHTML+='<div></div>';
		}
	}
	var timer;
	var longs=0;
	var l=1.5;
	var link=39;
	var last;
	// view.style.transform='translate3d(0,3000px,0)'
	// timer=setInterval(move, 1);
	function move(){
		// console.log(longs);
		 longs+=l;
		view.style.transform='translate3d(0,'+longs+'px,0)';
		if(view.offsetHeight-last.offsetTop<=longs){
			clearInterval(timer);
			var returnlongs=longs;
			var returntimer=setInterval(function(){
				returnlongs--;
				view.style.transform='translate3d(0,'+returnlongs+'px,0)';
				if(returnlongs-longs<=-last.offsetHeight){
					clearInterval(returntimer);
					var timer=setTimeout(function(){
						window.location.reload();
					}, 1000);
				}

			}, 1)
		}
	}
	for(var i=0;i<160;i++){
		(function(j){

			box[j].addEventListener('click',function(){
				if(parseInt((j/4))==link&&box[j].className=='black'){
					box[j].className='grey';
					link--;
					last=box[j];
					if(link==38){
					timer=setInterval(move, 1);

				}
					// l+=0.1;		
				}
				
				else if(box[j].className=='grey'){

				}
				else{
					if(parseInt((j/4))<=link){
						box[j].className='red';
						window.location.reload();
					}
					
				}	
				if(box[0].className=='grey'||box[1].className=='grey'||box[2].className=='grey'||box[3].className=='grey'){
					alert('youwin');
				}
			},false);
		})(i)
	}
}