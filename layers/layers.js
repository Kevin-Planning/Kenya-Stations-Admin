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
var format_FastChargers92_3 = new ol.format.GeoJSON();
var features_FastChargers92_3 = format_FastChargers92_3.readFeatures(json_FastChargers92_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastChargers92_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastChargers92_3.addFeatures(features_FastChargers92_3);
var lyr_FastChargers92_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastChargers92_3, 
                style: style_FastChargers92_3,
                popuplayertitle: 'Fast Chargers(92)',
                interactive: true,
                title: '<img src="styles/legend/FastChargers92_3.png" /> Fast Chargers(92)'
            });
var format_StabexStations16_4 = new ol.format.GeoJSON();
var features_StabexStations16_4 = format_StabexStations16_4.readFeatures(json_StabexStations16_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StabexStations16_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StabexStations16_4.addFeatures(features_StabexStations16_4);
var lyr_StabexStations16_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StabexStations16_4, 
                style: style_StabexStations16_4,
                popuplayertitle: 'Stabex Stations(16)',
                interactive: true,
                title: '<img src="styles/legend/StabexStations16_4.png" /> Stabex Stations(16)'
            });
var format_Rubis29_5 = new ol.format.GeoJSON();
var features_Rubis29_5 = format_Rubis29_5.readFeatures(json_Rubis29_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rubis29_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rubis29_5.addFeatures(features_Rubis29_5);
var lyr_Rubis29_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rubis29_5, 
                style: style_Rubis29_5,
                popuplayertitle: 'Rubis(29)',
                interactive: true,
                title: '<img src="styles/legend/Rubis29_5.png" /> Rubis(29)'
            });
var format_PetrolStations102_6 = new ol.format.GeoJSON();
var features_PetrolStations102_6 = format_PetrolStations102_6.readFeatures(json_PetrolStations102_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetrolStations102_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetrolStations102_6.addFeatures(features_PetrolStations102_6);
var lyr_PetrolStations102_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetrolStations102_6, 
                style: style_PetrolStations102_6,
                popuplayertitle: 'Petrol Stations(102)',
                interactive: true,
                title: '<img src="styles/legend/PetrolStations102_6.png" /> Petrol Stations(102)'
            });
var format_MegaStations178_7 = new ol.format.GeoJSON();
var features_MegaStations178_7 = format_MegaStations178_7.readFeatures(json_MegaStations178_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MegaStations178_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MegaStations178_7.addFeatures(features_MegaStations178_7);
var lyr_MegaStations178_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MegaStations178_7, 
                style: style_MegaStations178_7,
                popuplayertitle: 'Mega Stations(178)',
                interactive: true,
                title: '<img src="styles/legend/MegaStations178_7.png" /> Mega Stations(178)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenyanewscores_1.setVisible(true);lyr_kenyaadmin_2.setVisible(true);lyr_FastChargers92_3.setVisible(true);lyr_StabexStations16_4.setVisible(true);lyr_Rubis29_5.setVisible(true);lyr_PetrolStations102_6.setVisible(true);lyr_MegaStations178_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenyanewscores_1,lyr_kenyaadmin_2,lyr_FastChargers92_3,lyr_StabexStations16_4,lyr_Rubis29_5,lyr_PetrolStations102_6,lyr_MegaStations178_7];
lyr_kenyanewscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_kenyaadmin_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_FastChargers92_3.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_StabexStations16_4.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_Rubis29_5.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_PetrolStations102_6.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_MegaStations178_7.set('fieldAliases', {'Name': 'Name', 'Region': 'Region', 'latitude': 'latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Province': 'Province', 'Station Config': 'Station Config', });
lyr_kenyanewscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_kenyaadmin_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_FastChargers92_3.set('fieldImages', {'Name': '', 'Region': '', 'latitude': '', 'Longitude': '', 'Type': '', 'Province': '', 'Station Config': '', });
lyr_StabexStations16_4.set('fieldImages', {'Name': 'TextEdit', 'Region': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_Rubis29_5.set('fieldImages', {'Name': 'TextEdit', 'Region': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_PetrolStations102_6.set('fieldImages', {'Name': '', 'Region': '', 'latitude': '', 'Longitude': '', 'Type': '', 'Province': '', 'Station Config': '', });
lyr_MegaStations178_7.set('fieldImages', {'Name': 'TextEdit', 'Region': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Province': 'TextEdit', 'Station Config': 'TextEdit', });
lyr_kenyanewscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_kenyaadmin_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_FastChargers92_3.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_StabexStations16_4.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_Rubis29_5.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_PetrolStations102_6.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_MegaStations178_7.set('fieldLabels', {'Name': 'no label', 'Region': 'no label', 'latitude': 'no label', 'Longitude': 'no label', 'Type': 'no label', 'Province': 'no label', 'Station Config': 'no label', });
lyr_MegaStations178_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});