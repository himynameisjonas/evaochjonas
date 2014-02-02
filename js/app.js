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

  var form = $('form');
  if (form.length) {
    $('form').submit(function(evt){
      evt.preventDefault();
      $.ajax({
        dataType: 'jsonp',
        url: $(this).attr('action').replace("?", "/ajax?"),
        data: $(this).serialize()
      }).done(function() {
        $("#osa, article>h2").fadeOut(function(){
          $('.rsvp-response, .rsvp-response .'+ $('input:radio[name=rsvp]:checked').val()).fadeIn();
        });
      });
    });
    $('.rsvp-response a').click(function(evt){
      evt.preventDefault();
      $('.rsvp-response, .rsvp-response .yes, .rsvp-response .no').fadeOut(function(){
        $('#osa, article>h2').fadeIn();
      });
    });
  };

  if ($('#map').length) {
    var locations = $('#map').data('locations');

    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(locations[1].lat, locations[1].long),
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    for (var i = 0; i < locations.length; i++) {
      var location = new google.maps.LatLng(locations[i].lat,locations[i].long);
      var marker = new google.maps.Marker({icon: locations[i].icon, position: location, map: map, title: locations[i].title});
    };

  };
})
