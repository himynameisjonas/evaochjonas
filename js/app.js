function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

$(function(){
  people = $('.people img');
  people.each(function(){
    $('<img src="'+ $(this).attr('src').replace("2", "3") +'"/>');
  })

  people.mouseenter(function(){
    img = $(this)
    img.attr('src', img.attr('src').replace("2", "3"))
  });

  people.mouseleave(function(){
    img = $(this)
    img.attr('src', img.attr('src').replace("3", "2"))
  });

  $('form').submit(function(){
    createCookie('rsvp', $('input:radio[name=rsvp]:checked').val())
  });

  $('.rsvp-response.'+ readCookie('rsvp')).show();
})
