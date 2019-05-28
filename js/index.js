var line = $('.line');

var tl = new TimelineLite({
			onComplete: function(){
				tl.restart();
			}
		});

 
TweenLite.defaultEase = Circ.easeInOut;

var time = 0.9;
var y = 100;

tl
	.add ( TweenMax.staggerFromTo (
		line, time,
			{
				opacity: 0,
				y:y,
			},
			{	
				opacity: 1,
				y: 0,
			},
		2 ))
	.add ( TweenMax.staggerTo (
		line, time,
			{
				delay: time,
				opacity: 0,
				y: -y,
			},
		2 ), 1.3)