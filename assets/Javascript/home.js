// $( document ).ready(function() {
//     console.log( "ready!" );
//     var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?stateCode=NY&apikey=jMH0oHQBw8sCR7SRnBKCRRoG6gn2I5S8"; 

//     $.ajax({
//         url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
//         headers: { 'X-Requested-With': 'XMLHttpRequest' },
//         method: "GET",
//         contentType: "application/json",
//     }).then(function (response){
//         var data = response;
//         var eventArray = data._embedded.events;
        
//         for (var i= 0; i < eventArray.length; i++) { 
//             var event = eventArray[i];
//             var name = event.name;
//             var imgURL = event.images[0].url
//             var ticketURL = event.url;
//             var city = event._embedded.venues[0].city.name;
//             var eventDiv = 
//                 $(`<div class="row event-row">
//                     <div class="col-md-2">
//                         <img class="event-image" src="${imgURL}" width="100" height="100">
//                     </div>
//                     <div class="col-md-10">
//                         <div class"card">
//                             <div class="card-body">
//                                 <h5 class="card-title"><a href="${ticketURL}" target="_blank">${name}</a></h5>
//                                 <p class ="card-text">Some quick example text to build on the card title and make</p>
//                                 <a href="${ticketURL}" id="tickets" class="btn" target="_blank">Tickets</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`)
                
//                 $('#events').append(eventDiv);
//               }           
//             })
//     })

        
// {/* <button type="button" id="sign-up" data-toggle="modal" data-target="#signUpModal">Sign Up</button> 
// <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//     <div class="modal-dialog modal-dialog-centered" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//             <!-- Form -->
//             <form>
//                 <div class="form-row">
//                   <div class="form-group col-md-6">
//                     <label for="inputEmail4">Email</label>
//                     <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
//                   </div>
//                   <div class="form-group col-md-6">
//                     <label for="inputPassword4">Password</label>
//                     <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
//                   </div>
//                 </div>
//                 <div class="form-group">
//                   <label for="inputAddress">Address</label>
//                   <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
//                 </div>
//                 <div class="form-group">
//                   <label for="inputAddress2">Address 2</label>
//                   <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
//                 </div>
//                 <div class="form-row">
//                   <div class="form-group col-md-6">
//                     <label for="inputCity">City</label>
//                     <input type="text" class="form-control" id="inputCity">
//                   </div>
//                   <div class="form-group col-md-4">
//                     <label for="inputState">State</label>
//                     <select id="inputState" class="form-control">
//                       <option selected>Choose...</option>
//                       <option>...</option>
//                     </select>
//                   </div>
//                   <div class="form-group col-md-2">
//                     <label for="inputZip">Zip</label>
//                     <input type="text" class="form-control" id="inputZip">
//                   </div>
//                 </div>
//                 <button type="submit" class="btn btn-primary">Sign in</button>
//               </form>
//         </div>
//       </div>
//     </div>
//   </div> */}
