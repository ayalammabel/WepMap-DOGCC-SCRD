var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Localidad_1 = new ol.format.GeoJSON();
var features_Localidad_1 = format_Localidad_1.readFeatures(json_Localidad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidad_1.addFeatures(features_Localidad_1);
var lyr_Localidad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidad_1, 
                style: style_Localidad_1,
                popuplayertitle: "Localidad",
                interactive: true,
                title: '<img src="styles/legend/Localidad_1.png" /> Localidad'
            });
var format_UPL_2 = new ol.format.GeoJSON();
var features_UPL_2 = format_UPL_2.readFeatures(json_UPL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPL_2.addFeatures(features_UPL_2);
var lyr_UPL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPL_2, 
                style: style_UPL_2,
                popuplayertitle: "UPL",
                interactive: true,
                title: '<img src="styles/legend/UPL_2.png" /> UPL'
            });
var format_PolgonosMetro_3 = new ol.format.GeoJSON();
var features_PolgonosMetro_3 = format_PolgonosMetro_3.readFeatures(json_PolgonosMetro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolgonosMetro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolgonosMetro_3.addFeatures(features_PolgonosMetro_3);
var lyr_PolgonosMetro_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolgonosMetro_3, 
                style: style_PolgonosMetro_3,
                popuplayertitle: "Polígonos Metro",
                interactive: true,
                title: '<img src="styles/legend/PolgonosMetro_3.png" /> Polígonos Metro'
            });
var format_BienesdeIntersCultural2022_4 = new ol.format.GeoJSON();
var features_BienesdeIntersCultural2022_4 = format_BienesdeIntersCultural2022_4.readFeatures(json_BienesdeIntersCultural2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BienesdeIntersCultural2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BienesdeIntersCultural2022_4.addFeatures(features_BienesdeIntersCultural2022_4);
var lyr_BienesdeIntersCultural2022_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BienesdeIntersCultural2022_4, 
                style: style_BienesdeIntersCultural2022_4,
                popuplayertitle: "Bienes de Interés Cultural 2022",
                interactive: true,
                title: '<img src="styles/legend/BienesdeIntersCultural2022_4.png" /> Bienes de Interés Cultural 2022'
            });
var format_SDHTPolgonosRevitalizacin_5 = new ol.format.GeoJSON();
var features_SDHTPolgonosRevitalizacin_5 = format_SDHTPolgonosRevitalizacin_5.readFeatures(json_SDHTPolgonosRevitalizacin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDHTPolgonosRevitalizacin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDHTPolgonosRevitalizacin_5.addFeatures(features_SDHTPolgonosRevitalizacin_5);
var lyr_SDHTPolgonosRevitalizacin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDHTPolgonosRevitalizacin_5, 
                style: style_SDHTPolgonosRevitalizacin_5,
                popuplayertitle: "SDHT- Polígonos Revitalización",
                interactive: true,
                title: '<img src="styles/legend/SDHTPolgonosRevitalizacin_5.png" /> SDHT- Polígonos Revitalización'
            });
var format_DADEPPuntosCrticos_6 = new ol.format.GeoJSON();
var features_DADEPPuntosCrticos_6 = format_DADEPPuntosCrticos_6.readFeatures(json_DADEPPuntosCrticos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DADEPPuntosCrticos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DADEPPuntosCrticos_6.addFeatures(features_DADEPPuntosCrticos_6);
var lyr_DADEPPuntosCrticos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DADEPPuntosCrticos_6, 
                style: style_DADEPPuntosCrticos_6,
                popuplayertitle: "DADEP- Puntos Críticos",
                interactive: true,
                title: '<img src="styles/legend/DADEPPuntosCrticos_6.png" /> DADEP- Puntos Críticos'
            });
var format_SDELmitedeEntornosEducativos_7 = new ol.format.GeoJSON();
var features_SDELmitedeEntornosEducativos_7 = format_SDELmitedeEntornosEducativos_7.readFeatures(json_SDELmitedeEntornosEducativos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDELmitedeEntornosEducativos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDELmitedeEntornosEducativos_7.addFeatures(features_SDELmitedeEntornosEducativos_7);
var lyr_SDELmitedeEntornosEducativos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDELmitedeEntornosEducativos_7, 
                style: style_SDELmitedeEntornosEducativos_7,
                popuplayertitle: "SDE- Límite de Entornos Educativos ",
                interactive: true,
                title: '<img src="styles/legend/SDELmitedeEntornosEducativos_7.png" /> SDE- Límite de Entornos Educativos '
            });
var format_SDE_Entornos_8 = new ol.format.GeoJSON();
var features_SDE_Entornos_8 = format_SDE_Entornos_8.readFeatures(json_SDE_Entornos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDE_Entornos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDE_Entornos_8.addFeatures(features_SDE_Entornos_8);
var lyr_SDE_Entornos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDE_Entornos_8, 
                style: style_SDE_Entornos_8,
                popuplayertitle: "SDE_Entornos",
                interactive: true,
                title: '<img src="styles/legend/SDE_Entornos_8.png" /> SDE_Entornos'
            });
var format_SDHTBarriosCulturales_9 = new ol.format.GeoJSON();
var features_SDHTBarriosCulturales_9 = format_SDHTBarriosCulturales_9.readFeatures(json_SDHTBarriosCulturales_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDHTBarriosCulturales_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDHTBarriosCulturales_9.addFeatures(features_SDHTBarriosCulturales_9);
var lyr_SDHTBarriosCulturales_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDHTBarriosCulturales_9, 
                style: style_SDHTBarriosCulturales_9,
                popuplayertitle: "SDHT- Barrios Culturales",
                interactive: true,
                title: '<img src="styles/legend/SDHTBarriosCulturales_9.png" /> SDHT- Barrios Culturales'
            });
var format_DADEPLneadeaccin_10 = new ol.format.GeoJSON();
var features_DADEPLneadeaccin_10 = format_DADEPLneadeaccin_10.readFeatures(json_DADEPLneadeaccin_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DADEPLneadeaccin_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DADEPLneadeaccin_10.addFeatures(features_DADEPLneadeaccin_10);
var lyr_DADEPLneadeaccin_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DADEPLneadeaccin_10, 
                style: style_DADEPLneadeaccin_10,
                popuplayertitle: "DADEP- Línea de acción",
                interactive: true,
                title: '<img src="styles/legend/DADEPLneadeaccin_10.png" /> DADEP- Línea de acción'
            });
var format_PuntosdelMetro_11 = new ol.format.GeoJSON();
var features_PuntosdelMetro_11 = format_PuntosdelMetro_11.readFeatures(json_PuntosdelMetro_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosdelMetro_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosdelMetro_11.addFeatures(features_PuntosdelMetro_11);
var lyr_PuntosdelMetro_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosdelMetro_11, 
                style: style_PuntosdelMetro_11,
                popuplayertitle: "Puntos del Metro",
                interactive: true,
                title: '<img src="styles/legend/PuntosdelMetro_11.png" /> Puntos del Metro'
            });
var format_SDEColegiosEntornos_12 = new ol.format.GeoJSON();
var features_SDEColegiosEntornos_12 = format_SDEColegiosEntornos_12.readFeatures(json_SDEColegiosEntornos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDEColegiosEntornos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDEColegiosEntornos_12.addFeatures(features_SDEColegiosEntornos_12);
var lyr_SDEColegiosEntornos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDEColegiosEntornos_12, 
                style: style_SDEColegiosEntornos_12,
                popuplayertitle: "SDE- Colegios Entornos",
                interactive: true,
                title: '<img src="styles/legend/SDEColegiosEntornos_12.png" /> SDE- Colegios Entornos'
            });
var format_SDEColegiosPriorizados_13 = new ol.format.GeoJSON();
var features_SDEColegiosPriorizados_13 = format_SDEColegiosPriorizados_13.readFeatures(json_SDEColegiosPriorizados_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDEColegiosPriorizados_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDEColegiosPriorizados_13.addFeatures(features_SDEColegiosPriorizados_13);
var lyr_SDEColegiosPriorizados_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDEColegiosPriorizados_13, 
                style: style_SDEColegiosPriorizados_13,
                popuplayertitle: "SDE- Colegios Priorizados",
                interactive: true,
                title: '<img src="styles/legend/SDEColegiosPriorizados_13.png" /> SDE- Colegios Priorizados'
            });
var format_DADEPPuntosdeaccion_14 = new ol.format.GeoJSON();
var features_DADEPPuntosdeaccion_14 = format_DADEPPuntosdeaccion_14.readFeatures(json_DADEPPuntosdeaccion_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DADEPPuntosdeaccion_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DADEPPuntosdeaccion_14.addFeatures(features_DADEPPuntosdeaccion_14);
var lyr_DADEPPuntosdeaccion_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DADEPPuntosdeaccion_14, 
                style: style_DADEPPuntosdeaccion_14,
                popuplayertitle: "DADEP- Puntos de accion",
                interactive: true,
                title: '<img src="styles/legend/DADEPPuntosdeaccion_14.png" /> DADEP- Puntos de accion'
            });
var format_SDHTCallesyEspaciosMgicos2020_15 = new ol.format.GeoJSON();
var features_SDHTCallesyEspaciosMgicos2020_15 = format_SDHTCallesyEspaciosMgicos2020_15.readFeatures(json_SDHTCallesyEspaciosMgicos2020_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDHTCallesyEspaciosMgicos2020_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDHTCallesyEspaciosMgicos2020_15.addFeatures(features_SDHTCallesyEspaciosMgicos2020_15);
var lyr_SDHTCallesyEspaciosMgicos2020_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDHTCallesyEspaciosMgicos2020_15, 
                style: style_SDHTCallesyEspaciosMgicos2020_15,
                popuplayertitle: "SDHT- Calles y Espacios Mágicos 2020",
                interactive: true,
                title: '<img src="styles/legend/SDHTCallesyEspaciosMgicos2020_15.png" /> SDHT- Calles y Espacios Mágicos 2020'
            });
var format_SDHTCallesyEspaciosMgicos2021_16 = new ol.format.GeoJSON();
var features_SDHTCallesyEspaciosMgicos2021_16 = format_SDHTCallesyEspaciosMgicos2021_16.readFeatures(json_SDHTCallesyEspaciosMgicos2021_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDHTCallesyEspaciosMgicos2021_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDHTCallesyEspaciosMgicos2021_16.addFeatures(features_SDHTCallesyEspaciosMgicos2021_16);
var lyr_SDHTCallesyEspaciosMgicos2021_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDHTCallesyEspaciosMgicos2021_16, 
                style: style_SDHTCallesyEspaciosMgicos2021_16,
                popuplayertitle: "SDHT- Calles y Espacios Mágicos 2021",
                interactive: true,
                title: '<img src="styles/legend/SDHTCallesyEspaciosMgicos2021_16.png" /> SDHT- Calles y Espacios Mágicos 2021'
            });
var format_SDHTCallesyEspaciosMgicos2022_17 = new ol.format.GeoJSON();
var features_SDHTCallesyEspaciosMgicos2022_17 = format_SDHTCallesyEspaciosMgicos2022_17.readFeatures(json_SDHTCallesyEspaciosMgicos2022_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDHTCallesyEspaciosMgicos2022_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDHTCallesyEspaciosMgicos2022_17.addFeatures(features_SDHTCallesyEspaciosMgicos2022_17);
var lyr_SDHTCallesyEspaciosMgicos2022_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDHTCallesyEspaciosMgicos2022_17, 
                style: style_SDHTCallesyEspaciosMgicos2022_17,
                popuplayertitle: "SDHT- Calles y Espacios Mágicos 2022",
                interactive: true,
                title: '<img src="styles/legend/SDHTCallesyEspaciosMgicos2022_17.png" /> SDHT- Calles y Espacios Mágicos 2022'
            });
var format_SDHTCallesyEspaciosMgicos2023_18 = new ol.format.GeoJSON();
var features_SDHTCallesyEspaciosMgicos2023_18 = format_SDHTCallesyEspaciosMgicos2023_18.readFeatures(json_SDHTCallesyEspaciosMgicos2023_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDHTCallesyEspaciosMgicos2023_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDHTCallesyEspaciosMgicos2023_18.addFeatures(features_SDHTCallesyEspaciosMgicos2023_18);
var lyr_SDHTCallesyEspaciosMgicos2023_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDHTCallesyEspaciosMgicos2023_18, 
                style: style_SDHTCallesyEspaciosMgicos2023_18,
                popuplayertitle: "SDHT- Calles y Espacios Mágicos 2023",
                interactive: true,
                title: '<img src="styles/legend/SDHTCallesyEspaciosMgicos2023_18.png" /> SDHT- Calles y Espacios Mágicos 2023'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Localidad_1.setVisible(true);lyr_UPL_2.setVisible(false);lyr_PolgonosMetro_3.setVisible(false);lyr_BienesdeIntersCultural2022_4.setVisible(false);lyr_SDHTPolgonosRevitalizacin_5.setVisible(false);lyr_DADEPPuntosCrticos_6.setVisible(true);lyr_SDELmitedeEntornosEducativos_7.setVisible(true);lyr_SDE_Entornos_8.setVisible(false);lyr_SDHTBarriosCulturales_9.setVisible(false);lyr_DADEPLneadeaccin_10.setVisible(false);lyr_PuntosdelMetro_11.setVisible(true);lyr_SDEColegiosEntornos_12.setVisible(false);lyr_SDEColegiosPriorizados_13.setVisible(false);lyr_DADEPPuntosdeaccion_14.setVisible(true);lyr_SDHTCallesyEspaciosMgicos2020_15.setVisible(false);lyr_SDHTCallesyEspaciosMgicos2021_16.setVisible(true);lyr_SDHTCallesyEspaciosMgicos2022_17.setVisible(false);lyr_SDHTCallesyEspaciosMgicos2023_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Localidad_1,lyr_UPL_2,lyr_PolgonosMetro_3,lyr_BienesdeIntersCultural2022_4,lyr_SDHTPolgonosRevitalizacin_5,lyr_DADEPPuntosCrticos_6,lyr_SDELmitedeEntornosEducativos_7,lyr_SDE_Entornos_8,lyr_SDHTBarriosCulturales_9,lyr_DADEPLneadeaccin_10,lyr_PuntosdelMetro_11,lyr_SDEColegiosEntornos_12,lyr_SDEColegiosPriorizados_13,lyr_DADEPPuntosdeaccion_14,lyr_SDHTCallesyEspaciosMgicos2020_15,lyr_SDHTCallesyEspaciosMgicos2021_16,lyr_SDHTCallesyEspaciosMgicos2022_17,lyr_SDHTCallesyEspaciosMgicos2023_18];
lyr_Localidad_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LocNombre': 'LocNombre', 'LocAAdmini': 'LocAAdmini', 'LocArea': 'LocArea', 'LocCodigo': 'LocCodigo', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UPL_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO_UPL': 'CODIGO_UPL', 'NOMBRE': 'NOMBRE', 'VOCACION': 'VOCACION', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Prioridad': 'Prioridad', });
lyr_PolgonosMetro_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BienesdeIntersCultural2022_4.set('fieldAliases', {'fid': 'fid', 'LotCodigo': 'LotCodigo', 'NUMERO_FIC': 'NUMERO_FIC', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ACTO_ADMIN': 'ACTO_ADMIN', 'NUMERO_ACT': 'NUMERO_ACT', 'FECHA_ACTO': 'FECHA_ACTO', 'OBSERVACIO': 'OBSERVACIO', 'OTROS': 'OTROS', 'LOCALIZACI': 'LOCALIZACI', 'ÁMBITO': 'ÁMBITO', 'Nivel_Inte': 'Nivel_Inte', 'Categoría': 'Categoría', 'Responsabl': 'Responsabl', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SDHTPolgonosRevitalizacin_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DADEPPuntosCrticos_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'UPL___PuCr': 'UPL___PuCr', });
lyr_SDELmitedeEntornosEducativos_7.set('fieldAliases', {'Numero': 'Numero', 'ENTORNO': 'ENTORNO', 'LOCALIDAD': 'LOCALIDAD', 'AREA': 'AREA', 'COMPARTE': 'COMPARTE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SDE_Entornos_8.set('fieldAliases', {'Numero': 'Numero', 'ENTORNO': 'ENTORNO', 'LOCALIDAD': 'LOCALIDAD', 'AREA': 'AREA', 'COMPARTE': 'COMPARTE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SDHTBarriosCulturales_9.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DADEPLneadeaccin_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'problemati': 'problemati', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PuntosdelMetro_11.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_SDEColegiosEntornos_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Localidad_': 'Localidad_', 'DANE12_EST': 'DANE12_EST', 'NOMBRE_EST': 'NOMBRE_EST', 'NIT': 'NIT', 'DANE12_SED': 'DANE12_SED', 'NOMBRE_SED': 'NOMBRE_SED', 'ORDEN_DE_S': 'ORDEN_DE_S', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'Nuevo_Cód': 'Nuevo_Cód', 'COORDENADA': 'COORDENADA', 'COORDENA_1': 'COORDENA_1', });
lyr_SDEColegiosPriorizados_13.set('fieldAliases', {'FID_': 'FID_', 'NuevoCódi': 'NuevoCódi', 'DANE_12__E': 'DANE_12__E', 'NOMBRE_EST': 'NOMBRE_EST', 'DANE_12_SE': 'DANE_12_SE', 'NOMBRE_SED': 'NOMBRE_SED', 'ORDEN_DE_S': 'ORDEN_DE_S', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'Barrio': 'Barrio', 'COORDENADA': 'COORDENADA', 'COORDENA_1': 'COORDENA_1', 'Localidad_': 'Localidad_', 'UPZ_COLEGI': 'UPZ_COLEGI', 'NOMBRE_UPZ': 'NOMBRE_UPZ', 'Matricula': 'Matricula', 'IPEE': 'IPEE', 'ECO': 'ECO', 'DBE': 'DBE', 'Acumulativ': 'Acumulativ', });
lyr_DADEPPuntosdeaccion_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_GEO_URB': 'ID_GEO_URB', 'OBSERVACIO': 'OBSERVACIO', 'PROBLEMATI': 'PROBLEMATI', });
lyr_SDHTCallesyEspaciosMgicos2020_15.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', });
lyr_SDHTCallesyEspaciosMgicos2021_16.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', });
lyr_SDHTCallesyEspaciosMgicos2022_17.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', });
lyr_SDHTCallesyEspaciosMgicos2023_18.set('fieldAliases', {'(se dilige': '(se dilige', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', });
lyr_Localidad_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'LocNombre': 'TextEdit', 'LocAAdmini': 'TextEdit', 'LocArea': 'TextEdit', 'LocCodigo': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UPL_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO_UPL': 'TextEdit', 'NOMBRE': 'TextEdit', 'VOCACION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Prioridad': 'TextEdit', });
lyr_PolgonosMetro_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BienesdeIntersCultural2022_4.set('fieldImages', {'fid': 'TextEdit', 'LotCodigo': 'TextEdit', 'NUMERO_FIC': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'ACTO_ADMIN': 'TextEdit', 'NUMERO_ACT': 'TextEdit', 'FECHA_ACTO': 'DateTime', 'OBSERVACIO': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIZACI': 'TextEdit', 'ÁMBITO': 'TextEdit', 'Nivel_Inte': 'TextEdit', 'Categoría': 'TextEdit', 'Responsabl': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SDHTPolgonosRevitalizacin_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DADEPPuntosCrticos_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'UPL___PuCr': 'TextEdit', });
lyr_SDELmitedeEntornosEducativos_7.set('fieldImages', {'Numero': 'TextEdit', 'ENTORNO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'AREA': 'TextEdit', 'COMPARTE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SDE_Entornos_8.set('fieldImages', {'Numero': 'TextEdit', 'ENTORNO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'AREA': 'TextEdit', 'COMPARTE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SDHTBarriosCulturales_9.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DADEPLneadeaccin_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'problemati': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PuntosdelMetro_11.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_SDEColegiosEntornos_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Localidad_': 'TextEdit', 'DANE12_EST': 'TextEdit', 'NOMBRE_EST': 'TextEdit', 'NIT': 'TextEdit', 'DANE12_SED': 'TextEdit', 'NOMBRE_SED': 'TextEdit', 'ORDEN_DE_S': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'Nuevo_Cód': 'TextEdit', 'COORDENADA': 'TextEdit', 'COORDENA_1': 'TextEdit', });
lyr_SDEColegiosPriorizados_13.set('fieldImages', {'FID_': 'TextEdit', 'NuevoCódi': 'TextEdit', 'DANE_12__E': 'TextEdit', 'NOMBRE_EST': 'TextEdit', 'DANE_12_SE': 'TextEdit', 'NOMBRE_SED': 'TextEdit', 'ORDEN_DE_S': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'Barrio': 'TextEdit', 'COORDENADA': 'TextEdit', 'COORDENA_1': 'TextEdit', 'Localidad_': 'TextEdit', 'UPZ_COLEGI': 'TextEdit', 'NOMBRE_UPZ': 'TextEdit', 'Matricula': 'TextEdit', 'IPEE': 'TextEdit', 'ECO': 'TextEdit', 'DBE': 'TextEdit', 'Acumulativ': 'TextEdit', });
lyr_DADEPPuntosdeaccion_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_GEO_URB': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'PROBLEMATI': 'TextEdit', });
lyr_SDHTCallesyEspaciosMgicos2020_15.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'Range', 'field_10': 'TextEdit', 'field_11': 'Range', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'Range', 'field_16': 'TextEdit', 'field_17': 'TextEdit', });
lyr_SDHTCallesyEspaciosMgicos2021_16.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'Range', 'field_10': 'TextEdit', 'field_11': 'Range', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', });
lyr_SDHTCallesyEspaciosMgicos2022_17.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', });
lyr_SDHTCallesyEspaciosMgicos2023_18.set('fieldImages', {'(se dilige': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', });
lyr_Localidad_1.set('fieldLabels', {'OBJECTID': 'no label', 'LocNombre': 'no label', 'LocAAdmini': 'no label', 'LocArea': 'no label', 'LocCodigo': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UPL_2.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO_UPL': 'no label', 'NOMBRE': 'no label', 'VOCACION': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Prioridad': 'no label', });
lyr_PolgonosMetro_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BienesdeIntersCultural2022_4.set('fieldLabels', {'fid': 'no label', 'LotCodigo': 'no label', 'NUMERO_FIC': 'no label', 'NOMBRE': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'ACTO_ADMIN': 'no label', 'NUMERO_ACT': 'no label', 'FECHA_ACTO': 'no label', 'OBSERVACIO': 'no label', 'OTROS': 'inline label - always visible', 'LOCALIZACI': 'no label', 'ÁMBITO': 'inline label - visible with data', 'Nivel_Inte': 'inline label - visible with data', 'Categoría': 'inline label - visible with data', 'Responsabl': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SDHTPolgonosRevitalizacin_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DADEPPuntosCrticos_6.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'UPL___PuCr': 'no label', });
lyr_SDELmitedeEntornosEducativos_7.set('fieldLabels', {'Numero': 'no label', 'ENTORNO': 'no label', 'LOCALIDAD': 'no label', 'AREA': 'no label', 'COMPARTE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SDE_Entornos_8.set('fieldLabels', {'Numero': 'no label', 'ENTORNO': 'no label', 'LOCALIDAD': 'no label', 'AREA': 'inline label - visible with data', 'COMPARTE': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SDHTBarriosCulturales_9.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'inline label - visible with data', 'PopupInfo': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DADEPLneadeaccin_10.set('fieldLabels', {'OBJECTID': 'no label', 'problemati': 'inline label - visible with data', 'SHAPE_Leng': 'no label', });
lyr_PuntosdelMetro_11.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'inline label - visible with data', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_SDEColegiosEntornos_12.set('fieldLabels', {'OBJECTID': 'no label', 'Localidad_': 'inline label - visible with data', 'DANE12_EST': 'inline label - visible with data', 'NOMBRE_EST': 'inline label - visible with data', 'NIT': 'no label', 'DANE12_SED': 'no label', 'NOMBRE_SED': 'no label', 'ORDEN_DE_S': 'no label', 'ZONA': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'Nuevo_Cód': 'no label', 'COORDENADA': 'no label', 'COORDENA_1': 'no label', });
lyr_SDEColegiosPriorizados_13.set('fieldLabels', {'FID_': 'inline label - visible with data', 'NuevoCódi': 'inline label - visible with data', 'DANE_12__E': 'no label', 'NOMBRE_EST': 'no label', 'DANE_12_SE': 'no label', 'NOMBRE_SED': 'no label', 'ORDEN_DE_S': 'no label', 'ZONA': 'no label', 'DIRECCION': 'no label', 'Barrio': 'no label', 'COORDENADA': 'no label', 'COORDENA_1': 'no label', 'Localidad_': 'no label', 'UPZ_COLEGI': 'no label', 'NOMBRE_UPZ': 'no label', 'Matricula': 'no label', 'IPEE': 'no label', 'ECO': 'no label', 'DBE': 'no label', 'Acumulativ': 'no label', });
lyr_DADEPPuntosdeaccion_14.set('fieldLabels', {'OBJECTID': 'no label', 'ID_GEO_URB': 'no label', 'OBSERVACIO': 'no label', 'PROBLEMATI': 'no label', });
lyr_SDHTCallesyEspaciosMgicos2020_15.set('fieldLabels', {'field_1': 'inline label - visible with data', 'field_2': 'inline label - visible with data', 'field_3': 'inline label - visible with data', 'field_4': 'inline label - visible with data', 'field_5': 'inline label - visible with data', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', });
lyr_SDHTCallesyEspaciosMgicos2021_16.set('fieldLabels', {'field_1': 'no label', 'field_2': 'inline label - visible with data', 'field_3': 'inline label - visible with data', 'field_4': 'inline label - visible with data', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', });
lyr_SDHTCallesyEspaciosMgicos2022_17.set('fieldLabels', {'field_1': 'inline label - visible with data', 'field_2': 'inline label - visible with data', 'field_3': 'inline label - visible with data', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'inline label - visible with data', 'field_11': 'inline label - visible with data', 'field_12': 'inline label - visible with data', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', });
lyr_SDHTCallesyEspaciosMgicos2023_18.set('fieldLabels', {'(se dilige': 'inline label - visible with data', 'field_2': 'inline label - visible with data', 'field_3': 'inline label - visible with data', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', });
lyr_SDHTCallesyEspaciosMgicos2023_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});