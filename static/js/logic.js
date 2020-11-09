// Tile layers

// Satellite layer
let satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Streets layer
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Base layer
let baseMaps = {
    "Satellite": satellite,
    "Streets": streets
};

// Map object
let map = L.map("map", {
    center: [53.60, -113.5],
    zoom: 11,
    layers: [satellite]
});

// Pass layers into layers control & add to map
L.control.layers(baseMaps).addTo(map);

// Markers
var redMarker1 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '1'
});

var redMarker2 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '2'
});

var redMarker3 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '3'
});

var redMarker4 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '4'
});

var redMarker5 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '5'
});

var redMarker6 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '6'
});

var redMarker7 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '7'
});

var redMarker8 = L.ExtraMarkers.icon({
    icon: 'fa-number',
    markerColor: 'orange-dark',
    shape:'circle',
    prefix: 'fa',
    number: '8'
});

L.marker([53.601391, -113.372253], {icon: redMarker1}).addTo(map)
    .bindPopup('<h6>CLAREVIEW</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//13912+20+St+NW,+Edmonton,+AB+T5Y+1P8/@53.6025093,-113.3756234,627m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x53a03c8ad57138dd:0xe5a892898d7f65b5!2m2!1d-113.3734294!2d53.6025093!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/13912+20+St+NW,+Edmonton,+AB+T5Y+1P8//@53.6025092,-113.3778175,1254m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x53a03c8ad57138dd:0xe5a892898d7f65b5!2m2!1d-113.3734294!2d53.6025093!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Stair Count:</b> 111<br><b>Lat, Long:</b> 53.601391, -113.372253<br><b>Street Parking:</b> 13912 20 St NW, Edmonton, AB T5Y 1P8')
    .bindTooltip("CLAREVIEW");

L.marker([53.558961, -113.442285], {icon: redMarker2}).addTo(map)
    .bindPopup('<h6>CONCORDIA COLLEGE</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//7040+Ada+Blvd+NW,+Edmonton,+AB+T5B+4E3/@53.5599953,-113.446503,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a022e0a44f5977:0x299bcad465c2bf45!2m2!1d-113.4443143!2d53.5599953!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/7040+Ada+Blvd+NW,+Edmonton,+AB+T5B+4E3//@53.5599952,-113.4487024,16z/data=!4m9!4m8!1m5!1m1!1s0x53a022e0a44f5977:0x299bcad465c2bf45!2m2!1d-113.4443143!2d53.5599953!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Stair Count:</b> 244<br><b>Lat, Long:</b> 53.558961, -113.442285<br><b>Street Parking:</b> 7040 Ada Blvd NW, Edmonton, Alberta')
    .bindTooltip("CONCORDIA COLLEGE");

L.marker([53.534811, -113.468342], {icon: redMarker3}).addTo(map)
    .bindPopup('<h6>CONNORS HILL</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//9103+Strathearn+Dr+NW,+Edmonton,+AB+T6C+4C9/@53.5343362,-113.469658,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a022672ad3a31b:0x771fb76379d565b9!2m2!1d-113.467464!2d53.5343362!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/9103+Strathearn+Dr+NW,+Edmonton,+AB+T6C+4C9//@53.5343361,-113.4718521,16z/data=!4m9!4m8!1m5!1m1!1s0x53a022672ad3a31b:0x771fb76379d565b9!2m2!1d-113.467464!2d53.5343362!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Lat, Long:</b> 53.534811, -113.468342<br><b>Street parking:</b> 9103 Strathearn Dr NW, Edmonton, Alberta<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipPUFPFcXJGAPeJo19donSHjeKPOoYGBXM5wDNM3=s1536" onclick="openModal();currentSlide(1)">')
    .bindTooltip("CONNORS HILL");

L.marker([53.538805, -113.489561], {icon: redMarker4}).addTo(map)
    .bindPopup('<h6>FAIRMONT HOTEL MACDONALD</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//9769+Grierson+Hill+NW,+Edmonton,+AB+T5J+1N9/@53.5416529,-113.4854148,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a02244d4d172b1:0xb54358d24c28c642!2m2!1d-113.4832208!2d53.5416529!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/9769+Grierson+Hill+NW,+Edmonton,+AB+T5J+1N9//@53.5416528,-113.4876089,16z/data=!4m9!4m8!1m5!1m1!1s0x53a02244d4d172b1:0xb54358d24c28c642!2m2!1d-113.4832208!2d53.5416529!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Stair Count:</b> 201-204<br><b>Lat, Long:</b> 53.538805, -113.489561<br><b>Parking Lot:</b> Grierson Hill NW Parking (9769-9939 Grierson Hill NW, Edmonton, AB T5J 1N9)<br>Notes: Parking lot for Louise McKinney Riverfront Park.<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipM8OXLE3BBQieyqk2Rvk_obHT7BO1o4n6PeFA1b=s1536" onclick="openModal();currentSlide(2)">')
    .bindTooltip("FAIRMONT HOTEL MACDONALD");

L.marker([53.532510, -113.511644], {icon: redMarker5}).addTo(map)
    .bindPopup('<h6>GLENORA EZIO/FARAONE</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//11160+River+Valley+Rd+NW,+Edmonton,+AB+T5K+2M6/@53.533398,-113.515727,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a0223b54fe8ee9:0xca0cea3a989e9839!2m2!1d-113.513533!2d53.533398!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/11160+River+Valley+Rd+NW,+Edmonton,+AB+T5K+2M6//@53.5333979,-113.5179211,16z/data=!4m9!4m8!1m5!1m1!1s0x53a0223b54fe8ee9:0xca0cea3a989e9839!2m2!1d-113.513533!2d53.533398!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Stair Count:</b> 186-202<br><b>Lat, Long:</b> 53.532510, -113.511644<br><b>Parking Lot:</b> Royal Glenora Club (11160 River Valley Rd NW, Edmonton, AB T5J 2G7)<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipNg2j_QXBAkb293oMVMYCKK7hnjxIV2KoacEXZ-=s1536" onclick="openModal();currentSlide(3)">')
    .bindTooltip("GLENORA EZIO/FARAONE");

L.marker([53.501849, -113.559412], {icon: redMarker6}).addTo(map)
    .bindPopup('<h6>GRANDVIEW WHITEMUD PARK</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//13909+Fox+Dr+NW,+Edmonton,+AB+T6H+4P3/@53.5025493,-113.5621029,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a021da7695be0d:0xb25a63e04637da2!2m2!1d-113.5599089!2d53.5025493!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/13909+Fox+Dr+NW,+Edmonton,+AB+T6H+4P3//@53.5025492,-113.564297,16z/data=!4m9!4m8!1m5!1m1!1s0x53a021da7695be0d:0xb25a63e04637da2!2m2!1d-113.5599089!2d53.5025493!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Stair Count:</b> 242-261<br><b>Lat, Long:</b> 53.501849, -113.559412<br><b>Parking Lot:</b> Alfred H. Savage Centre (13909 Fox Dr NW, Edmonton, AB T6H 4P3)<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipMueO4d4TXGYfSOwsd6SVKSoQkeeTQ_9RuWXHww=s1536" onclick="openModal();currentSlide(4)">')
    .bindTooltip("GRANDVIEW WHITEMUD PARK");

L.marker([53.508143, -113.566463], {icon: redMarker7}).addTo(map)
    .bindPopup('<h6>LAURIER DRIVE</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//121+Laurier+Dr+NW,+Edmonton,+AB+T5R+5P6/@53.5106079,-113.5689131,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a021c5e1e9a4c9:0x6a6a09726c8cbd7d!2m2!1d-113.5667191!2d53.5106079!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/121+Laurier+Dr+NW,+Edmonton,+AB+T5R+5P6//@53.5105873,-113.63693,12z/data=!4m9!4m8!1m5!1m1!1s0x53a021c5e1e9a4c9:0x6a6a09726c8cbd7d!2m2!1d-113.5667191!2d53.5106079!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Stair Count:</b> 165<br><b>Lat, Long #1:</b> 53.508143, -113.566463<br><b>Lat, Long #2: </b> 53.508232, -113.563099<br><b>Street parking:</b> 121 Laurier Dr NW, Edmonton, Alberta<br><b>Notes:</b> Two separate staircases with same entrance from street parking.')
    .bindTooltip("LAURIER DRIVE");

L.marker([53.499416, -113.592445], {icon: redMarker8}).addTo(map)
    .bindPopup('<h6>WOLF WILLOW</h6><b>Directions:</b> <a href="https://www.google.com/maps/dir//162+Wolf+Willow+Cres,+Edmonton,+AB+T5T+1T2/@53.501844,-113.597972,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x53a02030f50c9c89:0x9d9df0ef606450c4!2m2!1d-113.595778!2d53.501844!3e0" target="_blank" class="text-primary">To</a> | <a href="https://www.google.com/maps/dir/162+Wolf+Willow+Cres,+Edmonton,+AB+T5T+1T2//@53.5018439,-113.6001661,16z/data=!4m9!4m8!1m5!1m1!1s0x53a02030f50c9c89:0x9d9df0ef606450c4!2m2!1d-113.595778!2d53.501844!1m0!3e0" target="_blank" class="text-primary">From</a><br><b>Stair Count:</b> 200-201<br><b>Lat, Long:</b> 53.499416, -113.592445<br><b>Street Parking:</b> 162 Wolf Willow Cres, Edmonton, Alberta<br><br><img id="myImg" src="https://lh3.ggpht.com/p/AF1QipNII55xNMEPfgUTKqD4pTAX5cmiizsyMlXJATFm=s1536" onclick="openModal();currentSlide(5)">')
    .bindTooltip("WOLF WILLOW");

// Modal

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].className += " active";
    captionText.innerHTML = slides[slideIndex-1].id;
}