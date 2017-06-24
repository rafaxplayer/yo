var current='.targeta';

var serializeObject = function(form){
        var dArray = form.serializeArray();
        var objectData = {}
        for (var i in dArray) {
            objectData[dArray[i].name] = dArray[i].value;
        }
        return objectData;
}

var getContainer = function(path){
    switch(path){
        case '/':
            return '.targeta';
        case '/home':
            return '.targeta';
        case '/proyects':
            return '.portafolio';
        case '/contact':
            return '.contacto';
        default:
            return '.notfound';
        

    }
         
}

var navigate = function(ctx){
    console.log(ctx)
    var container = getContainer(ctx.path);
    console.log(container)
    if(container != current){
        $(current).fadeOut("fast","linear",function(){
            $(container).fadeIn('slow');
        });
    }
    current = container;

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
    
    $('.fa-angle-down').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('fa-angle-up fa-angle-down');
        $(this).next().slideToggle("slow");
                  
    });

    $('.fa-window-maximize').on('click',function(e){
        e.preventDefault();
        $('#contacto')[0].reset();
                     
    });

    $('#contacto').on('submit',function(){
        
        var data = serializeObject($(this));
        Email.send(data.email,
                    "rafaxplayer72@gmail.com",
                    "From: "+ data.name + " Email : " + data.email,
                    data.message,
                    "smtp.gmail.com",
                    "exhowi72@gmail.com",
                    "uuo03mskGHOd");
        alert('Ok Correo enviado');
        $(this)[0].reset();
        
        return false;
    });
    page('/', navigate)
    page('/home', navigate)
    page('/proyects', navigate)
    page('/contact', navigate)
    page('/*',navigate)
    page()

});

