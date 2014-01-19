var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents(); 
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false); 
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
    }, 
		
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        app.bgDiv = document.getElementById(id);  
        console.log('Received Event: ' + id);  
    },
	
	bgDiv:null, 
	
	onCancelButton:function(){	  
 		document.location.href="index.html";	
	},
	
	onBuyButton: function(){
		// change the image to the animation of cart
		jQuery('.cartanim').css('display','inherit');
		jQuery('.cartanim').html('<img src="img/addcartanim.gif">');
		jQuery('.cartanim img').mousedown(function(){return false});	
		
		// change the anim to static default cart image after anim finished play
		setTimeout(function(){  
			jQuery('.cartanim').html('<img src="img/cartonly.gif">');	
			jQuery('.cartanim img').mousedown(function(){return false});	
			 
			// hide shelfs image
			jQuery( "#draggable" ).css('display', 'inherit');	
			
			// display zoomed image
			jQuery('.zoomed').css('display', 'none');  
						 
		}, 2500);
	},
	
	doScenario: function(step){
		var lastStep = 7;
		var scenarioDiv = jQuery('.scenario2');
		scenarioDiv.css('background', 'url(img/' + step + '.jpg) no-repeat');
		
		if(step == lastStep){
			// back to initial (show bg.jpg);	
			setTimeout(function(){  
				document.location.href="index.html";				 
			}, 2000);
		}
	}
};
 
jQuery(document).ready(function(e) {	
	var drgbl = document.getElementById( "draggable" );
	if(typeof(drgbl) == "undefined" || drgbl == null)
		return;		
		
	jQuery('.cartanim img').mousedown(function(){return false});	
	
	var appdiv = jQuery('.app'); 
	var loadingGif = jQuery('.loadingGif');
	var zoomed = jQuery('.zoomed');
	
	// set to gone when zoomed display got clicked
	zoomed.click(function(){
		// hide the zoomed image
		zoomed.css('display', 'none');
		// and display big shelf image
	 	jQuery( "#draggable" ).css('display', 'inherit');	
	});
	
	jQuery( "#draggable" ).draggable({
		start: function(){
			jQuery( "#draggable" ).css('display', 'inherit');	
			loadingGif.html("");		 
		},
		
		stop: function() {	
			setTimeout(function(){ 
				// append and center loading gif
				loadingGif.center();
				loadingGif.html('<img src="img/anim.gif" />');	
				
				// disable drag loading gif image	 
				var imgs = jQuery('.loadingGif img'); 
				imgs.bind("mousedown",function(e){
					return false;
				});
			}, 1000);
				
			// zoom		
			setTimeout(function(){  
				// hide shelfs image
				jQuery( "#draggable" ).css('display', 'none');	
				
				// display zoomed image
				zoomed.css('display', 'inherit'); 
				
				// remove loading gif  (zooming animation)
				loadingGif.html("");		 
			}, 2500);
		}	
	}); 
});