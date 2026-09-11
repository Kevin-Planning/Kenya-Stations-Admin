var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_kenyanewscores_1 = new ol.format.GeoJSON();
var features_kenyanewscores_1 = format_kenyanewscores_1.readFeatures(json_kenyanewscores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyanewscores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyanewscores_1.addFeatures(features_kenyanewscores_1);
var lyr_kenyanewscores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyanewscores_1, 
                style: style_kenyanewscores_1,
                popuplayertitle: 'kenya-new-scores',
                interactive: true,
    title: 'kenya-new-scores<br />\
    <img src="styles/legend/kenyanewscores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/kenyanewscores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/kenyanewscores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/kenyanewscores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/kenyanewscores_1_4.png" /> 4 - 5<br />' });
var format_kenyaadmin_2 = new ol.format.GeoJSON();
var features_kenyaadmin_2 = format_kenyaadmin_2.readFeatures(json_kenyaadmin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyaadmin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyaadmin_2.addFeatures(features_kenyaadmin_2);
var lyr_kenyaadmin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyaadmin_2, 
                style: style_kenyaadmin_2,
                popuplayertitle: 'kenya - admin',
                interactive: true,
                title: '<img src="styles/legend/kenyaadmin_2.png" /> kenya - admin'
            });
var format_2026Buffer_3 = new ol.format.GeoJSON();
var features_2026Buffer_3 = format_2026Buffer_3.readFeatures(json_2026Buffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026Buffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026Buffer_3.addFeatures(features_2026Buffer_3);
var lyr_2026Buffer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026Buffer_3, 
                style: style_2026Buffer_3,
                popuplayertitle: '2026 Buffer',
                interactive: true,
                title: '<img src="styles/legend/2026Buffer_3.png" /> 2026 Buffer'
            });
var format_FastChargers92_4 = new ol.format.GeoJSON();
var features_FastChargers92_4 = format_FastChargers92_4.readFeatures(json_FastChargers92_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastChargers92_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastChargers92_4.addFeatures(features_FastChargers92_4);
var lyr_FastChargers92_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastChargers92_4, 
                style: style_FastChargers92_4,
                popuplayertitle: 'Fast Chargers(92)',
                interactive: true,
                title: '<img src="styles/legend/FastChargers92_4.png" /> Fast Chargers(92)'
            });
var format_PetrolStations158_5 = new ol.format.GeoJSON();
var features_PetrolStations158_5 = format_PetrolStations158_5.readFeatures(json_PetrolStations158_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetrolStations158_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetrolStations158_5.addFeatures(features_PetrolStations158_5);
var lyr_PetrolStations158_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetrolStations158_5, 
                style: style_PetrolStations158_5,
                popuplayertitle: 'Petrol Stations(158)',
                interactive: true,
                title: '<img src="styles/legend/PetrolStations158_5.png" /> Petrol Stations(158)'
            });
var format_MegaStations179_6 = new ol.format.GeoJSON();
var features_MegaStations179_6 = format_MegaStations179_6.readFeatures(json_MegaStations179_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MegaStations179_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MegaStations179_6.addFeatures(features_MegaStations179_6);
var lyr_MegaStations179_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MegaStations179_6, 
                style: style_MegaStations179_6,
                popuplayertitle: 'Mega Stations(179)',
                interactive: true,
                title: '<img src="styles/legend/MegaStations179_6.png" /> Mega Stations(179)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenyanewscores_1.setVisible(true);lyr_kenyaadmin_2.setVisible(true);lyr_2026Buffer_3.setVisible(true);lyr_FastChargers92_4.setVisible(true);lyr_PetrolStations158_5.setVisible(true);lyr_MegaStations179_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenyanewscores_1,lyr_kenyaadmin_2,lyr_2026Buffer_3,lyr_FastChargers92_4,lyr_PetrolStations158_5,lyr_MegaStations179_6];
lyr_kenyanewscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_kenyaadmin_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_2026Buffer_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_FastChargers92_4.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_PetrolStations158_5.set('fieldAliases', {'Name': 'Name', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_MegaStations179_6.set('fieldAliases', {'Name': 'Name', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_kenyanewscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_kenyaadmin_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_2026Buffer_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_FastChargers92_4.set('fieldImages', {'Name': '', 'Region': '', 'latitude': '', 'Longitude': '', 'Type': '', 'Province': '', 'Station Config': '', });
lyr_PetrolStations158_5.set('fieldImages', {'Name': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_MegaStations179_6.set('fieldImages', {'Name': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_kenyanewscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_kenyaadmin_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_2026Buffer_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_FastChargers92_4.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_PetrolStations158_5.set('fieldLabels', {'Name': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_MegaStations179_6.set('fieldLabels', {'Name': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_MegaStations179_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});