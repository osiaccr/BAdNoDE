var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([23.78324180000004, 44.3173239]), // Coordinates
      zoom: 17 
    })
  });

var marker = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([23.78324180000004, 44.3173239])
    ),  // Cordinates of New York's Town Hall
});

marker.setStyle(new ol.style.Style({
    image: new ol.style.Icon(({
        color: '#ffcd46',
        crossOrigin: 'anonymous',
        src: '../images/map_pointer.png'
    }))
}));

var vectorSource = new ol.source.Vector({
    features: [marker]
});

var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
});

map.addLayer(markerVectorLayer);