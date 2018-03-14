var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_BAIRROS_0 = new ol.format.GeoJSON();
var features_BAIRROS_0 = format_BAIRROS_0.readFeatures(json_BAIRROS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAIRROS_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BAIRROS_0.addFeatures(features_BAIRROS_0);var lyr_BAIRROS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BAIRROS_0, 
                style: style_BAIRROS_0,
    title: 'BAIRROS<br />\
    <img src="styles/legend/BAIRROS_0_0.png" /> ALPHAVILLE GRACIOSA<br />\
    <img src="styles/legend/BAIRROS_0_1.png" /> ALTO TARUMA<br />\
    <img src="styles/legend/BAIRROS_0_2.png" /> ATUBA<br />\
    <img src="styles/legend/BAIRROS_0_3.png" /> CENTRO<br />\
    <img src="styles/legend/BAIRROS_0_4.png" /> EMILIANO PERNETA<br />\
    <img src="styles/legend/BAIRROS_0_5.png" /> ESTANCIA PINHAIS<br />\
    <img src="styles/legend/BAIRROS_0_6.png" /> JARDIM AMELIA<br />\
    <img src="styles/legend/BAIRROS_0_7.png" /> JARDIM CLAUDIA<br />\
    <img src="styles/legend/BAIRROS_0_8.png" /> JARDIM KARLA<br />\
    <img src="styles/legend/BAIRROS_0_9.png" /> MARIA ANTONIETA<br />\
    <img src="styles/legend/BAIRROS_0_10.png" /> PARQUE DAS AGUAS<br />\
    <img src="styles/legend/BAIRROS_0_11.png" /> PARQUE DAS NASCENTES<br />\
    <img src="styles/legend/BAIRROS_0_12.png" /> PINEVILLE<br />\
    <img src="styles/legend/BAIRROS_0_13.png" /> VARGEM GRANDE<br />\
    <img src="styles/legend/BAIRROS_0_14.png" /> WEISSOPOLIS<br />'
        });var format_Cervejarias_1 = new ol.format.GeoJSON();
var features_Cervejarias_1 = format_Cervejarias_1.readFeatures(json_Cervejarias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cervejarias_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cervejarias_1.addFeatures(features_Cervejarias_1);var lyr_Cervejarias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cervejarias_1, 
                style: style_Cervejarias_1,
                title: '<img src="styles/legend/Cervejarias_1.png" /> Cervejarias'
            });

lyr_BAIRROS_0.setVisible(true);lyr_Cervejarias_1.setVisible(true);
var layersList = [baseLayer,lyr_BAIRROS_0,lyr_Cervejarias_1];
lyr_BAIRROS_0.set('fieldAliases', {'BAIRRO': 'BAIRRO', 'POPULA': 'POPULA', 'DENDEM': 'DENDEM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Cervejarias_1.set('fieldAliases', {'address': 'address', 'Nome': 'Nome', });
lyr_BAIRROS_0.set('fieldImages', {'BAIRRO': 'TextEdit', 'POPULA': 'TextEdit', 'DENDEM': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Cervejarias_1.set('fieldImages', {'address': 'TextEdit', 'Nome': 'TextEdit', });
lyr_BAIRROS_0.set('fieldLabels', {'BAIRRO': 'no label', 'POPULA': 'no label', 'DENDEM': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Cervejarias_1.set('fieldLabels', {'address': 'no label', 'Nome': 'no label', });
lyr_Cervejarias_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});