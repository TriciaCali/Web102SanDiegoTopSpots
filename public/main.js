  //get data from json file
    $.getJSON("./data.json", function (result){
      var topSpot ="";
      //iterate through objects
      $.each(result, (key,value)=>{
          //construct rows with data from json obj
          let locationGoogleAddress = `https://www.google.com/maps?q=${value.location}`;
           topSpot += '<br><br><tr>';
          topSpot += `<td><button name="${value.location} " id="${value.location}" type="button" onclick="clickChangeMap(event)">${value.name}</button></td>`;
          topSpot += `<br><br><td>${value.description}</td>`;
          topSpot += `<td><br><br><a href="${locationGoogleAddress}">Go to Google Maps</a></td><br>`; 
      });
        //inserting rows into table
        $("#myTable").append(topSpot);
      });
    

let clickChangeMap=(event)=> {
  let location = event.target.name;
  
  location = location.split(",");
 let latitude = parseFloat(location[0]);
 let longitude = parseFloat(location[1]);
 console.log("lat: " + latitude + "    long: "+ longitude);

 initMap(latitude,longitude);
}

// Initialize and add the map
function initMap(latitude,longitude) {
  // The location of Uluru
  const uluru = { lat: latitude, lng: longitude };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

