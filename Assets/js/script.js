var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hello <span style="color:#000;"><b>Guys</b></span>')
  .pauseFor(550)
  .deleteChars(11)
  .typeString("WELCOME TO <strong style='color:#000;'>OFFICIAL SITE OF ST.ANTHONY'S COLLEGE</strong>")
  .pauseFor(1000)
  .start();

  //purecounter
  new PureCounter();

new PureCounter({
 
    selector: '.purecounter',	

  
    start: 0, 			            
    end: 100, 			            
    duration: 2, 	                
    delay: 10, 			            
    once: true, 		           
    repeat: false, 		            
    decimals: 0, 		           
    legacy: true,                   
    filesizing: false, 	           
    currency: false, 	            
    separator: false, 	          
});
//purecounter