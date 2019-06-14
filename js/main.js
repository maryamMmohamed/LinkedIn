var btn = document.getElementById('img-dropdown');
  
  var flag=true;
  btn.addEventListener("click", function() {   
    if (flag) {
      document.getElementById('nav-settings__dropdown-options').style = 'display:block';
      flag= false;
    }else{
      document.getElementById('nav-settings__dropdown-options').style = 'display:none';
      flag= true;
    }
  });



  ///////////////////////////////////////////

  (function($) {
    $(document).ready(function() {
        var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
            $chatboxTitleClose = $('.chatbox__title__close'),
            $chatboxCredentials = $('.chatbox__credentials');
        $chatboxTitle.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
        });
        $chatboxTitleClose.on('click', function(e) {
            e.stopPropagation();
            $chatbox.addClass('chatbox--closed');
        });
        $chatbox.on('transitionend', function() {
            if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
        });
        
    });
})(jQuery);