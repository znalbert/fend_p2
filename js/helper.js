var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2 class="role">%data%</h2><hr/>';

var HTMLmobile = '<li class="flex-item fontawesome-mobile-phone"><a href="tel:%data%" class="contact">%data%</a></li>';
var HTMLemail = '<li class="flex-item fontawesome-envelope"><a href="mailto:%data%" class="contact">%data%</a></li>';
var HTMLtwitter = '<li class="flex-item fontawesome-twitter"><a href="http://www.twitter.com/%data%" class="contact">%data%</a></li>';
var HTMLgithub = '<li class="flex-item fontawesome-github"><a href="https://github.com/%data%" class="contact">%data%</a></li>';
var HTMLlinkedin = '<li class="flex-item fontawesome-linkedin-sign"><a href="https://www.linkedin.com/in/%data%" class="contact">LinkedIn</a></li>';
var HTMLlocation = '<li class="flex-item fontawesome-globe"><a href="http://maps.google.com/maps?q=%data%" class="contact">%data%</a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="Resume Profile Pic">';
var HTMLwelcomeMsg = '<div class="welcome-message">%data%</div>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item skills">%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a><br>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a><br>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a><br>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineURL = '<a href="%data%">';
var HTMLonlineTitle = '%data%</a>';
var HTMLonlineSchool = '<div class="online-school">%data%</div>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';

var internationalizeButton = '<button class="internationalize">Internationalize</button>';
var googleMap = '<div id="map"></div>';


// Capitalizes last name
$(document).ready(function() {
  $('.internationalize').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

// Print click locations to the console
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});


// Add map for places lived and worked
// https://developers.google.com/maps/documentation/javascript/reference

var map;    // declares a global map variable


function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // add Budapest, Hungary because I used to live and teach there
    locations.push("Budapest, Hungary");

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.close();
      infoWindow.open(map, marker);    
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
