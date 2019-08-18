console.log("(⌐■_■)");

// // Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCCJzvIcPUPTcn5jsc1T727-OWc3AittmM",
//     authDomain: "event-meta-search.firebaseapp.com",
//     databaseURL: "https://event-meta-search.firebaseio.com",
//     projectId: "event-meta-search",
//     storageBucket: "",
//     messagingSenderId: "650900915826",
//     appId: "1:650900915826:web:919356c789cac91a"
//   };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

var events = ['Music','Sports','Festivals'];

// onload page will display events near New York
$( document ).ready(function() {
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?stateCode=NY&apikey=jMH0oHQBw8sCR7SRnBKCRRoG6gn2I5S8"; 

  $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      method: "GET",
      contentType: "application/json",
  }).then(function (response){
      var data = response;
      var eventArray = data._embedded.events;
      
      for (var i= 0; i < eventArray.length; i++) { 
          var event = eventArray[i];
          console.log(event);
          var name = event.name;
          var date = event.dates.start.localDate; 
          var city = event._embedded.venues[0].city.name;
          var state = event._embedded.venues[0].state.name;
          var venue = event._embedded.venues[0].name;
          var latitude = event._embedded.venues[0].location.latitude;
          var longitude = event._embedded.venues[0].location.longitude;
          var imgURL = event.images[0].url;
          var ticketURL = event.url;
            var modal = $(`<div class="modal fade" id="weather-${name}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <p>weather</p>
                </div>
              </div>
            </div>
          </div>`)
         
          
          var eventsListDiv = $('<div>');
          var eventDiv = 
              $(`<div class="row event-row">
                  <div class="col-md-2">
                      <img class="event-image" src="${imgURL}" width="200" height="200">
                  </div>
                  <div class="col-md-10">
                      <div class="card">
                          <div class="card-body">
                              <h5 class="card-title event-searched" value="${name}">${name}</h5>
                              <p class ="card-text">${date}</p>
                              <p class ="card-text">${city}, ${state}</p>
                              <p class ="card-text">${venue}</p>
                              <a href="${ticketURL}" id="tickets" class="btn" target="_blank">Find Tickets</a>
                              <button type="button" id="weather" data-toggle="modal" data-target="#weather-${name}">weather</button> 
                          </div>
                      </div>
                  </div>
              </div>`);
            
              $(eventsListDiv).append(eventDiv);
              $('#events').append(eventsListDiv);
            

            } 
          })
          $.ajax({
            url: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/839b69a98cd5813d622e1f438cd8494c/America/New_York`,
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            method: 'Get',
            contentType: "application/json",
          }).then(function (response){
            console.log(response);
            var alert = response.alerts[0].title;
            var summary = response.daily.summary;
            var temp = response.currently.temperature;
            console.log(temp);
            console.log(summary);
            console.log(alert);
          })
  })

// when the event button is clicked it will display button with name
function search(e){
  e.preventDefault();
  $('#events').show();
  var search = $('#event').val();
  events.push(search);
  $('#buttons-container').empty()
  renderButton();
}

// onclick event for search
 function displayEvents(){
  $('.event-row').remove();

  var event = $('#event').val();
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + event + "&apikey=jMH0oHQBw8sCR7SRnBKCRRoG6gn2I5S8";

    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        method: "GET",
        contentType: "application/json",
    }).then(function (response){
        var data = response;
        var eventArray = data._embedded.events;
        console.log(eventArray);
        
        for (var i= 0; i < eventArray.length; i++) {  
          var event = eventArray[i];
          var name = event.name;
          var date = event.dates.start.localDate;
          var city = event._embedded.venues[0].city.name;
          var state = event._embedded.venues[0].state.name;
          var venue = event._embedded.venues[0].name;
          var imgURL = event.images[0].url
          var ticketURL = event.url;

          var eventsDiv = $('<div class="events">');
          var eventDiv = 
          $(`<div class="row event-row">
              <div class="col-md-2">
                <img src="${imgURL}" width="200" height="200">
              </div>
              <div class="col-md-10">
                <div class="card">
                   <div class="card-body">
                      <h5 class="card-title event-searched" data-name="${name}" value="${name}">${name}</h5>
                      <p class ="card-text">Date: ${date}</p>
                      <p class ="card-text">${city}, ${state}</p>
                      <p class ="card-text">${venue}</p>
                      <a href="${ticketURL}" id="tickets" class="btn" target="_blank">Find Tickets</a>
                    </div>    
                </div>
              </div>
            </div>`)

          $('#events').append(eventDiv);

        }          
    })
    // $(document).on('click','.event-searched',test);
};


// when the user clicks a saved button an event is searched
function savedButtonSearch(){

  $('.event-row').remove();
  $('#events').show();
  var event = $(this).val();
  console.log(event);
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + event + "&apikey=jMH0oHQBw8sCR7SRnBKCRRoG6gn2I5S8";

    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        method: "GET",
        contentType: "application/json",
    }).then(function (response){
        var data = response;
        var eventArray = data._embedded.events;
        
        for (var i= 0; i < eventArray.length; i++) {  
          var event = eventArray[i];
          var name = event.name;
          var date = event.dates.start.localDate;
          var city = event._embedded.venues[0].city.name;
          var state = event._embedded.venues[0].state.name;
          var venue = event._embedded.venues[0].name;
          var imgURL = event.images[0].url
          var ticketURL = event.url;

          var eventDiv = 
          $(`<div class="row event-row">
              <div class="col-md-2">
                <img src="${imgURL}" width="200" height="200">
              </div>
              <div class="col-md-10">
                <div class="card">
                   <div class="card-body">
                      <h5 class="card-title"><a href="${ticketURL}" target="_blank">${name}</a></h5>
                      <p class ="card-text">Date: ${date}</p>
                      <p class ="card-text">${city}, ${state}</p>
                      <p class ="card-text">${venue}</p>
                      <a href="${ticketURL}" id="tickets" class="btn" target="_blank">Find Tickets</a>
                    </div>    
                </div>
              </div>
            </div>`)

          $('#events').append(eventDiv);
        } 
      })
    }         
    $(document).on('click','#search',search)
    $(document).on('click','#search',displayEvents);
    $(document).on('click','.saved-search',savedButtonSearch);

    function renderButton(){
      events.forEach(event =>{
        var newButton = $('<button type="button">');
        newButton.addClass('saved-search');
        newButton.attr('id',`${event}`)
        newButton.attr('value',event);
        newButton.text(event);
        $('#buttons-container').append(newButton);
      })
    }renderButton();




    // function test(){
    //   console.log($(this).val());
    //   var event = $(this).val();
    //   console.log(event);      
    // }

    // $(document).on('click','.event-searched',test);

    // $('#sign-up').on('shown.bs.modal', function () {
    //   $('#signUpModal').trigger('focus')
    // })

    // $('.event-searched').on('click',function(){
    //   console.log($(this).val());
    //   var event = $(this).val();
    //   console.log(event);
      
      
    // })
    function test(){
      console.log($(this).val());
      var eventy = "hello";
      console.log(eventy);
    }

      $(document).on('click','.card-title',test);




