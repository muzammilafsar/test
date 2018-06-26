import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    // $(document).ready(function($) {
    //   $(".scroll").click(function(event){		
    //     event.preventDefault();
    //     $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    //   });
    // });
    // $(document).ready(function() {		
			// $().UItoTop({ easingType: 'easeOutQuart' });
								
      // });
      // $(document).ready(function(){
      //   $('#demo1').skdslider({'delay':5000, 'animationSpeed': 2000,'showNextPrev':true,'showPlayButton':true,'autoSlide':true,'animationType':'fading'});
              
      //   $('#responsive').change(function(){
      //     $('#responsive_wrapper').width($(this).val());
      //   });
        
      // });
  }
  
}
