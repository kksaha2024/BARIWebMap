ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([90.413294, 23.986690, 90.416265, 23.988231]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BlockA1_1 = new ol.format.GeoJSON();
var features_BlockA1_1 = format_BlockA1_1.readFeatures(json_BlockA1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BlockA1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlockA1_1.addFeatures(features_BlockA1_1);
var lyr_BlockA1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlockA1_1, 
                style: style_BlockA1_1,
                popuplayertitle: "Block A1",
                interactive: true,
    title: 'Block A1<br />\
    <img src="styles/legend/BlockA1_1_0.png" /> Block A1<br />\
    <img src="styles/legend/BlockA1_1_1.png" /> FMPE Field 1<br />\
    <img src="styles/legend/BlockA1_1_2.png" /> FMPE Field 2<br />\
    <img src="styles/legend/BlockA1_1_3.png" /> FMPE Field 3<br />\
    <img src="styles/legend/BlockA1_1_4.png" /> IWM Field 1<br />\
    <img src="styles/legend/BlockA1_1_5.png" /> IWM Field 2<br />\
    <img src="styles/legend/BlockA1_1_6.png" /> IWM Field 3<br />\
    <img src="styles/legend/BlockA1_1_7.png" /> IWM Field 4<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_BlockA1_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_BlockA1_1];
lyr_BlockA1_1.set('fieldAliases', {'Name': 'Name', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_BlockA1_1.set('fieldImages', {'Name': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_BlockA1_1.set('fieldLabels', {'Name': 'header label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_BlockA1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});