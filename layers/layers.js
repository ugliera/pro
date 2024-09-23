var wms_layers = [];


lyr_OpenStreetMap_0.setVisible(true);lyr_prfectures_R76_1.setVisible(true);lyr_capa_faf_2024_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_prfectures_R76_1,lyr_capa_faf_2024_2];
lyr_prfectures_R76_1.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'X_COM': 'X_COM', 'Y_COM': 'Y_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', });
lyr_capa_faf_2024_2.set('fieldAliases', {'NOM': 'NOM', 'UAI_ETBLT': 'UAI_ETBLT', 'TYP_EXA_1': 'TYP_EXA_1', 'TYP_EXA_2': 'TYP_EXA_2', 'TYP_EXA_3': 'TYP_EXA_3', 'paddest_PA': 'paddest_PA', 'UAI_NOM': 'UAI_NOM', });
lyr_prfectures_R76_1.set('fieldImages', {'ID': '', 'NOM_COM': '', 'NOM_COM_M': '', 'INSEE_COM': '', 'STATUT': '', 'X_COM': '', 'Y_COM': '', 'SUPERFICIE': '', 'POPULATION': '', 'INSEE_ARR': '', 'NOM_DEP': '', 'INSEE_DEP': '', 'NOM_REG': '', 'INSEE_REG': '', });
lyr_capa_faf_2024_2.set('fieldImages', {'NOM': 'TextEdit', 'UAI_ETBLT': 'TextEdit', 'TYP_EXA_1': 'TextEdit', 'TYP_EXA_2': 'TextEdit', 'TYP_EXA_3': 'TextEdit', 'paddest_PA': 'TextEdit', 'UAI_NOM': 'TextEdit', });
lyr_prfectures_R76_1.set('fieldLabels', {'ID': '', 'NOM_COM': '', 'NOM_COM_M': '', 'INSEE_COM': '', 'STATUT': '', 'X_COM': '', 'Y_COM': '', 'SUPERFICIE': '', 'POPULATION': '', 'INSEE_ARR': '', 'NOM_DEP': '', 'INSEE_DEP': '', 'NOM_REG': '', 'INSEE_REG': '', });
lyr_capa_faf_2024_2.set('fieldLabels', {'NOM': '', 'UAI_ETBLT': '', 'TYP_EXA_1': '', 'TYP_EXA_2': '', 'TYP_EXA_3': '', 'paddest_PA': '', 'UAI_NOM': '', });
lyr_capa_faf_2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});