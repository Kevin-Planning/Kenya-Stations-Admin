var wms_layers = [];

var format_kenyaadmin_0 = new ol.format.GeoJSON();
var features_kenyaadmin_0 = format_kenyaadmin_0.readFeatures(json_kenyaadmin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyaadmin_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyaadmin_0.addFeatures(features_kenyaadmin_0);
var lyr_kenyaadmin_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyaadmin_0, 
                style: style_kenyaadmin_0,
                popuplayertitle: 'kenya - admin',
                interactive: true,
                title: '<img src="styles/legend/kenyaadmin_0.png" /> kenya - admin'
            });
var format_2026Plan_1 = new ol.format.GeoJSON();
var features_2026Plan_1 = format_2026Plan_1.readFeatures(json_2026Plan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026Plan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026Plan_1.addFeatures(features_2026Plan_1);
var lyr_2026Plan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026Plan_1, 
                style: style_2026Plan_1,
                popuplayertitle: '2026 Plan',
                interactive: true,
                title: '<img src="styles/legend/2026Plan_1.png" /> 2026 Plan'
            });

lyr_kenyaadmin_0.setVisible(true);lyr_2026Plan_1.setVisible(true);
var layersList = [lyr_kenyaadmin_0,lyr_2026Plan_1];
lyr_kenyaadmin_0.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_2026Plan_1.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Number of Racks': 'Number of Racks', });
lyr_kenyaadmin_0.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_2026Plan_1.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Number of Racks': 'Range', });
lyr_kenyaadmin_0.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_2026Plan_1.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Status': 'no label', 'Number of Racks': 'no label', });
lyr_2026Plan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});