import getPos from "./lib/getposition.js";

try {
  const position = await getPos();
  console.log(position);
  // Creates a leaflet map binded to an html <div> with id "map"
  // setView will set the initial map view to the location at coordinates
  // 13 represents the initial zoom level with higher values being more zoomed in
  var map = L.map("map").setView([position.latitude, position.longitude], 15);

  // Adds the basemap tiles to your web map
  // Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Adds a popup marker to the webmap for GGL address
  // can use HTML in bindPopup!
  L.circleMarker([position.latitude, position.longitude])
    .addTo(map)
    .bindPopup("You are here");
} catch (err) {
  console.warn("ERROR OCCURED getting location:");
  console.warn(err);
}
