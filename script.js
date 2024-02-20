// //object 1
$(document).ready(function() {
    const $imageTop1 = $('#image-top-1');
    const $imageBottom1 = $('#image-bottom-1');
    const $text1 = $('#text-1');
    const $audio1 = $('#audio-1');
  
    $imageTop1.on('mouseenter', function() {
      if ($(this).hasClass('active')) {
        $audio1.trigger('play');
      }
    });
  
    $imageTop1.on('mouseleave', function() {
      $audio1.trigger('pause');
      $audio1.prop('currentTime', 0);
    });
  
    $imageTop1.on('click', function() {
      $(this).toggleClass('active');
      $imageBottom1.toggleClass('active');
      $text1.toggleClass('active');
    });
  });
  
  // // //object 2
  $(document).ready(function() {
    const $imageTop2 = $('#image-top-2');
    const $imageBottom2 = $('#image-bottom-2');
    const $text2 = $('#text-2');
    const $audio2 = $('#audio-2');
  
    $imageTop2.on('mouseenter', function() {
      if ($(this).hasClass('active')) {
        $audio2.trigger('play');
      }
    });
  
    $imageTop2.on('mouseleave', function() {
      $audio2.trigger('pause');
      $audio2.prop('currentTime', 0);
    });
  
    $imageTop2.on('click', function() {
      $(this).toggleClass('active');
      $imageBottom2.toggleClass('active');
      $text2.toggleClass('active');
    });
  });

 //object 3
 $(document).ready(function() {
    const $imageTop3 = $('#image-top-3');
    const $imageBottom3 = $('#image-bottom-3');
    const $text3 = $('#text-3');
    const $audio3 = $('#audio-3');
  
    $imageTop3.on('mouseenter', function() {
      if ($(this).hasClass('active')) {
        $audio3.trigger('play');
      }
    });
  
    $imageTop3.on('mouseleave', function() {
      $audio3.trigger('pause');
      $audio3.prop('currentTime', 0);
    });
  
    $imageTop3.on('click', function() {
      $(this).toggleClass('active');
      $imageBottom3.toggleClass('active');
      $text3.toggleClass('active');
    });
  });


    //object 4
    $(document).ready(function() {
        const $imageTop4 = $('#image-top-4');
        const $imageBottom4 = $('#image-bottom-4');
        const $text4 = $('#text-4');
        const $audio4 = $('#audio-4');
      
        $imageTop4.on('mouseenter', function() {
          if ($(this).hasClass('active')) {
            $audio4.trigger('play');
          }
        });
      
        $imageTop4.on('mouseleave', function() {
          $audio4.trigger('pause');
          $audio4.prop('currentTime', 0);
        });
      
        $imageTop4.on('click', function() {
          $(this).toggleClass('active');
          $imageBottom4.toggleClass('active');
          $text4.toggleClass('active');
        });
      });
    

    //object 5
    $(document).ready(function() {
        const $imageTop5 = $('#image-top-5');
        const $imageBottom5 = $('#image-bottom-5');
        const $text5 = $('#text-5');
        const $audio5 = $('#audio-5');
      
        $imageTop5.on('mouseenter', function() {
          if ($(this).hasClass('active')) {
            $audio5.trigger('play');
          }
        });
      
        $imageTop5.on('mouseleave', function() {
          $audio5.trigger('pause');
          $audio5.prop('currentTime', 0);
        });
      
        $imageTop5.on('click', function() {
          $(this).toggleClass('active');
          $imageBottom5.toggleClass('active');
          $text5.toggleClass('active');
        });
      });

//object 6
    $(document).ready(function() {
        const $imageTop6 = $('#image-top-6');
        const $imageBottom6 = $('#image-bottom-6');
        const $text6 = $('#text-6');
        const $audio6 = $('#audio-6');
      
        $imageTop6.on('mouseenter', function() {
          if ($(this).hasClass('active')) {
            $audio6.trigger('play');
          }
        });
      
        $imageTop6.on('mouseleave', function() {
          $audio6.trigger('pause');
          $audio6.prop('currentTime', 0);
        });
      
        $imageTop6.on('click', function() {
          $(this).toggleClass('active');
          $imageBottom6.toggleClass('active');
          $text6.toggleClass('active');
        });
      });