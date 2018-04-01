// Utilizes Google Tutorial and Google Maps API

// This file contains the google map that provides the closest hospitals
// within a 30,000m radius of the user's current location


      var map, infoWindow;
 
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.070264, lng: -118.444056},
          zoom: 8
        });
        infoWindow = new google.maps.InfoWindow;
        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            console.log('Geolocating');
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Current Location');
            infoWindow.open(map);
            map.setCenter(pos);

            setPosition(pos);

            }, 

            function() {
            handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
          }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :  
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      function setPosition(myLocation) {
              var service = new google.maps.places.PlacesService(map);
              service.nearbySearch({
                location: myLocation,
                radius: 30000,
                types: ['hospital']
              }, processResults);

            }

            function processResults(results, status, pagination) {
              console.log(results);
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.log(status);
                return;
              } else {
                console.log('Success');

                createMarkers(results);

              }
            }

      function createMarkers(places) {
              var bounds = new google.maps.LatLngBounds();
              var placesList = document.getElementById('places');

              for (var i = 0, place; place = places[i]; i++) {
                var image = {
                  url: place.icon,
                  size: new google.maps.Size(71, 71),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(17, 34),
                  scaledSize: new google.maps.Size(25, 25)
                };

                var marker = new google.maps.Marker({
                  map: map,
                  icon: image,
                  title: place.name,
                  animation: google.maps.Animation.DROP,
                  position: place.geometry.location
                });

               bounds.extend(place.geometry.location);
              }
              map.fitBounds(bounds);
            }
