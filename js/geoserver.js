//URL Geoserver
var url_geoserver = "http://localhost:8080/geoserver/wms";
//noms des couches
var name_layer_landuse = "formation_gs_y:gis_osm_landuse";
var name_layer_roads = "formation_gs_y:gis_osm_roads_free_1";
var name_layer_pois = "formation_gs_y:gis_osm_pois_free_1";
var name_layer_places = "formation_gs:gis_osm_places_free_1";
var name_layer_Abidjan_HR_ext = "formation_gs_y:Abidjan_HR_ext";

var name_layer_adm1 = "	formation_gs_y:civ_adm1";
var name_layer_adm2 = "	formation_gs_y:civ_adm2";
var name_layer_adm3 = "	formation_gs_y:civ_adm3";

//déclaration des couches openlayers

var lyr_landuse = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_landuse, "TILED": "true"}
    })),
    title: "Occupation du sol"
});
var lyr_roads = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_roads, "TILED": "true"}
    })),
    title: "Routes"
});
var lyr_pois = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_pois, "TILED": "true"}
    })),
    title: "POIs"
});
var lyr_places = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_places, "TILED": "true"}
    })),
    title: "Lieux"
});
var lyr_adm1 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm1, "TILED": "true"}
    })),
    title: "adm1"
});
var lyr_adm2 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm2, "TILED": "true"}
    })),
    title: "adm2"
});
var lyr_adm3 = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_adm3, "TILED": "true"}
    })),
    title: "adm3"
});
var lyr_Abidjan_HR_ext = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
        url: url_geoserver,
        params: {"LAYERS": name_layer_Abidjan_HR_ext, "TILED": "true"}
    })),
    title: "image"
});
//visibilité par défaut des couches au chargement de la carte

lyr_landuse.setVisible(true);
lyr_roads.setVisible(true);
lyr_pois.setVisible(true);
lyr_places.setVisible(true);
lyr_adm1.setVisible(true);
lyr_adm2.setVisible(true);
lyr_adm3.setVisible(true);
lyr_Abidjan_HR_ext.setVisible(true);
//déclaration de la liste des couches à afficher dans un ordre précis
var layersList = [lyr_landuse,lyr_pois,lyr_adm1,lyr_adm2,lyr_adm3,lyr_roads ,lyr_Abidjan_HR_ext,lyr_places];
var mapView = new ol.View({
    projection: 'EPSG:4326',
    center:[-5.690183, 7.786829],
    zoom: 7
});
var map = new ol.Map({
    target: 'map',
    layers: layersList,
    view: mapView
});
var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Légende'
});
map.addControl(layerSwitcher);
var MousePosition = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326'
});