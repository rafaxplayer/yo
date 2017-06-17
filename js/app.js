var current='.targeta'
var serializeObject = function(form){
        var dArray = form.serializeArray();
        var objectData = {}
        for (var i in dArray) {
            objectData[dArray[i].name] = dArray[i].value;
        }
        return objectData;
}
$(function() {
      $('#slides').slidesjs({
             
            play: {
                active: false,
                    // [boolean] Generate the play and stop buttons.
                    // You cannot use your own buttons. Sorry.
                effect: "fade",
                    // [string] Can be either "slide" or "fade".
                interval: 5000,
                    // [number] Time spent on each slide in milliseconds.
                auto: true,
                    // [boolean] Start playing the slideshow on load.
                swap: true,
                    // [boolean] show/hide stop and play buttons
                pauseOnHover: false,
                    // [boolean] pause a playing slideshow on hover
                restartDelay: 2500
                    // [number] restart delay on inactive slideshow
            },
            navigation: {
                active: false,
                
                effect: "slide"
                
            },
            pagination: {
                active: false,
                    // [boolean] Create pagination items.
                    // You cannot use your own pagination. Sorry.
                effect: "slide"
                    // [string] Can be either "slide" or "fade".
                }

        
      });
    $('.navigation li').on('click',function(e){
        e.preventDefault();
        $self = $(this);
        if($self.attr('data-page') != current){
            $(current).fadeOut("fast","linear",function(){
                $($self.attr('data-page')).fadeIn('slow');
            });
            current = $(this).attr('data-page');
        }
          
    });

    $('.fa-angle-down').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('fa-angle-up fa-angle-down');
        $(this).next().toggle("slow");
        
        
             
    });
    $('.fa-window-maximize').on('click',function(e){
        e.preventDefault();
        $('#contacto')[0].reset();
                     
    });
    $('#contacto').on('submit',function(){
        
        var data = serializeObject($(this));
        Email.send(data.email,
                    "rafaxplayer72@gmail.com",
                    data.name,
                    data.message,
                    "smtp.gmail.com",
                    "exhowi72@gmail.com",
                    "uuo03mskGHOd");
        
        return false;
    });

    
});

