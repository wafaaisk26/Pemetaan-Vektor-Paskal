var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JALAN_AR_25K_1 = new ol.format.GeoJSON();
var features_JALAN_AR_25K_1 = format_JALAN_AR_25K_1.readFeatures(json_JALAN_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_AR_25K_1.addFeatures(features_JALAN_AR_25K_1);
var lyr_JALAN_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_AR_25K_1, 
                style: style_JALAN_AR_25K_1,
                popuplayertitle: "JALAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_AR_25K_1.png" /> JALAN_AR_25K'
            });
var format_SUNGAI_AR_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_2 = format_SUNGAI_AR_25K_2.readFeatures(json_SUNGAI_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_2.addFeatures(features_SUNGAI_AR_25K_2);
var lyr_SUNGAI_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_2, 
                style: style_SUNGAI_AR_25K_2,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_2.png" /> SUNGAI_AR_25K'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_wafaadmcimahi_4 = new ol.format.GeoJSON();
var features_wafaadmcimahi_4 = format_wafaadmcimahi_4.readFeatures(json_wafaadmcimahi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wafaadmcimahi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wafaadmcimahi_4.addFeatures(features_wafaadmcimahi_4);
var lyr_wafaadmcimahi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wafaadmcimahi_4, 
                style: style_wafaadmcimahi_4,
                popuplayertitle: "wafa adm cimahi",
                interactive: true,
                title: '<img src="styles/legend/wafaadmcimahi_4.png" /> wafa adm cimahi'
            });
var format_CopyofWaypointsWafaCopyofWaypoints_5 = new ol.format.GeoJSON();
var features_CopyofWaypointsWafaCopyofWaypoints_5 = format_CopyofWaypointsWafaCopyofWaypoints_5.readFeatures(json_CopyofWaypointsWafaCopyofWaypoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CopyofWaypointsWafaCopyofWaypoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopyofWaypointsWafaCopyofWaypoints_5.addFeatures(features_CopyofWaypointsWafaCopyofWaypoints_5);
var lyr_CopyofWaypointsWafaCopyofWaypoints_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopyofWaypointsWafaCopyofWaypoints_5, 
                style: style_CopyofWaypointsWafaCopyofWaypoints_5,
                popuplayertitle: "Copy of Waypoints Wafa — Copy of Waypoints",
                interactive: true,
                title: 'Copy of Waypoints Wafa — Copy of Waypoints'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_JALAN_AR_25K_1.setVisible(true);lyr_SUNGAI_AR_25K_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_wafaadmcimahi_4.setVisible(true);lyr_CopyofWaypointsWafaCopyofWaypoints_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JALAN_AR_25K_1,lyr_SUNGAI_AR_25K_2,lyr_Buffered_3,lyr_wafaadmcimahi_4,lyr_CopyofWaypointsWafaCopyofWaypoints_5];
lyr_JALAN_AR_25K_1.set('fieldAliases', {});
lyr_SUNGAI_AR_25K_2.set('fieldAliases', {});
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_wafaadmcimahi_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_CopyofWaypointsWafaCopyofWaypoints_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JALAN_AR_25K_1.set('fieldImages', {});
lyr_SUNGAI_AR_25K_2.set('fieldImages', {});
lyr_Buffered_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_wafaadmcimahi_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_CopyofWaypointsWafaCopyofWaypoints_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_JALAN_AR_25K_1.set('fieldLabels', {});
lyr_SUNGAI_AR_25K_2.set('fieldLabels', {});
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_wafaadmcimahi_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_CopyofWaypointsWafaCopyofWaypoints_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CopyofWaypointsWafaCopyofWaypoints_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});