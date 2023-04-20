
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Birds_1": {
            "type": "geojson",
            "data": json_Birds_1
        }
                    ,
        "Fishes_2": {
            "type": "geojson",
            "data": json_Fishes_2
        }
                    ,
        "Fungi_3": {
            "type": "geojson",
            "data": json_Fungi_3
        }
                    ,
        "Herps_4": {
            "type": "geojson",
            "data": json_Herps_4
        }
                    ,
        "Mammals_5": {
            "type": "geojson",
            "data": json_Mammals_5
        }
                    ,
        "Plants_6": {
            "type": "geojson",
            "data": json_Plants_6
        }
                    ,
        "GoogleLabels_7": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}"],
            "tileSize": 256
        }},
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_Birds_1_0",
            "type": "fill",
            "source": "Birds_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], 0.65, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], '#0000cd', ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], '#001bde', ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], '#0035ee', ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], '#0050ff', ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], '#0085cf', ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], '#00ba9f', ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], '#00f06e', ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], '#1ef554', ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], '#3cfa39', ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], '#5aff1e', ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], '#91ff14', ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], '#c8ff0a', ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], '#ffe300', ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], '#ffc600', ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], '#ffaa00', ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], '#ff8e00', ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], '#ff7100', ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], '#ff5500', ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], '#ff3800', ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], '#ff1c00', ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], '#ff0000', ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], '#e20000', ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], '#c60000', ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], '#aa0000', '#ffffff']}
        }
,
        {
            "id": "lyr_Fishes_2_0",
            "type": "fill",
            "source": "Fishes_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], 0.65, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], '#0000cd', ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], '#001bde', ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], '#0035ee', ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], '#0050ff', ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], '#0085cf', ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], '#00ba9f', ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], '#00f06e', ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], '#1ef554', ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], '#3cfa39', ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], '#5aff1e', ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], '#91ff14', ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], '#c8ff0a', ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], '#ffe300', ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], '#ffc600', ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], '#ffaa00', ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], '#ff8e00', ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], '#ff7100', ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], '#ff5500', ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], '#ff3800', ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], '#ff1c00', ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], '#ff0000', ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], '#e20000', ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], '#c60000', ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], '#aa0000', '#ffffff']}
        }
,
        {
            "id": "lyr_Fungi_3_0",
            "type": "fill",
            "source": "Fungi_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 0.1]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.1], ['<=', ['get', 'log_Samp'], 1.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], 0.65, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], '#0000cd', ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], '#001bde', ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], '#0035ee', ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], '#0050ff', ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 0.1]], '#0085cf', ['all', ['>', ['get', 'log_Samp'], 0.1], ['<=', ['get', 'log_Samp'], 1.2]], '#00ba9f', ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], '#00f06e', ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], '#1ef554', ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], '#3cfa39', ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], '#5aff1e', ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], '#91ff14', ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], '#c8ff0a', ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], '#ffe300', ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], '#ffc600', ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], '#ffaa00', ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], '#ff8e00', ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], '#ff7100', ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], '#ff5500', ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], '#ff3800', ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], '#ff1c00', ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], '#ff0000', ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], '#e20000', ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], '#c60000', ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], '#aa0000', '#ffffff']}
        }
,
        {
            "id": "lyr_Herps_4_0",
            "type": "fill",
            "source": "Herps_4",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], 0.65, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], '#0000cd', ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], '#001bde', ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], '#0035ee', ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], '#0050ff', ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], '#0085cf', ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], '#00ba9f', ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], '#00f06e', ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], '#1ef554', ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], '#3cfa39', ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], '#5aff1e', ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], '#91ff14', ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], '#c8ff0a', ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], '#ffe300', ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], '#ffc600', ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], '#ffaa00', ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], '#ff8e00', ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], '#ff7100', ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], '#ff5500', ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], '#ff3800', ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], '#ff1c00', ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], '#ff0000', ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], '#e20000', ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], '#c60000', ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], '#aa0000', '#ffffff']}
        }
,
        {
            "id": "lyr_Mammals_5_0",
            "type": "fill",
            "source": "Mammals_5",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], 0.65, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], '#0000cd', ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], '#001bde', ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], '#0035ee', ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], '#0050ff', ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], '#0085cf', ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], '#00ba9f', ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], '#00f06e', ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], '#1ef554', ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], '#3cfa39', ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], '#5aff1e', ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], '#91ff14', ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], '#c8ff0a', ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], '#ffe300', ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], '#ffc600', ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], '#ffaa00', ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], '#ff8e00', ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], '#ff7100', ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], '#ff5500', ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], '#ff3800', ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], '#ff1c00', ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], '#ff0000', ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], '#e20000', ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], '#c60000', ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], '#aa0000', '#ffffff']}
        }
,
        {
            "id": "lyr_Plants_6_0",
            "type": "fill",
            "source": "Plants_6",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], 0.65, ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], 0.65, ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], 0.65, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'log_Samp'], 0.0], ['<=', ['get', 'log_Samp'], 0.2]], '#0000cd', ['all', ['>', ['get', 'log_Samp'], 0.2], ['<=', ['get', 'log_Samp'], 0.4]], '#001bde', ['all', ['>', ['get', 'log_Samp'], 0.4], ['<=', ['get', 'log_Samp'], 0.6]], '#0035ee', ['all', ['>', ['get', 'log_Samp'], 0.6], ['<=', ['get', 'log_Samp'], 0.8]], '#0050ff', ['all', ['>', ['get', 'log_Samp'], 0.8], ['<=', ['get', 'log_Samp'], 1.0]], '#0085cf', ['all', ['>', ['get', 'log_Samp'], 1.0], ['<=', ['get', 'log_Samp'], 1.2]], '#00ba9f', ['all', ['>', ['get', 'log_Samp'], 1.2], ['<=', ['get', 'log_Samp'], 1.4]], '#00f06e', ['all', ['>', ['get', 'log_Samp'], 1.4], ['<=', ['get', 'log_Samp'], 1.6]], '#1ef554', ['all', ['>', ['get', 'log_Samp'], 1.6], ['<=', ['get', 'log_Samp'], 1.8]], '#3cfa39', ['all', ['>', ['get', 'log_Samp'], 1.8], ['<=', ['get', 'log_Samp'], 2.0]], '#5aff1e', ['all', ['>', ['get', 'log_Samp'], 2.0], ['<=', ['get', 'log_Samp'], 2.2]], '#91ff14', ['all', ['>', ['get', 'log_Samp'], 2.2], ['<=', ['get', 'log_Samp'], 2.4]], '#c8ff0a', ['all', ['>', ['get', 'log_Samp'], 2.4], ['<=', ['get', 'log_Samp'], 2.6]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.6], ['<=', ['get', 'log_Samp'], 2.8]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 2.8], ['<=', ['get', 'log_Samp'], 3.0]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.0], ['<=', ['get', 'log_Samp'], 3.2]], '#ffff00', ['all', ['>', ['get', 'log_Samp'], 3.2], ['<=', ['get', 'log_Samp'], 3.4]], '#ffe300', ['all', ['>', ['get', 'log_Samp'], 3.4], ['<=', ['get', 'log_Samp'], 3.6]], '#ffc600', ['all', ['>', ['get', 'log_Samp'], 3.6], ['<=', ['get', 'log_Samp'], 3.8]], '#ffaa00', ['all', ['>', ['get', 'log_Samp'], 3.8], ['<=', ['get', 'log_Samp'], 4.0]], '#ff8e00', ['all', ['>', ['get', 'log_Samp'], 4.0], ['<=', ['get', 'log_Samp'], 4.2]], '#ff7100', ['all', ['>', ['get', 'log_Samp'], 4.2], ['<=', ['get', 'log_Samp'], 4.4]], '#ff5500', ['all', ['>', ['get', 'log_Samp'], 4.4], ['<=', ['get', 'log_Samp'], 4.6]], '#ff3800', ['all', ['>', ['get', 'log_Samp'], 4.6], ['<=', ['get', 'log_Samp'], 4.8]], '#ff1c00', ['all', ['>', ['get', 'log_Samp'], 4.8], ['<=', ['get', 'log_Samp'], 5.0]], '#ff0000', ['all', ['>', ['get', 'log_Samp'], 5.0], ['<=', ['get', 'log_Samp'], 5.2]], '#e20000', ['all', ['>', ['get', 'log_Samp'], 5.2], ['<=', ['get', 'log_Samp'], 5.4]], '#c60000', ['all', ['>', ['get', 'log_Samp'], 5.4], ['<=', ['get', 'log_Samp'], 5.6]], '#aa0000', '#ffffff']}
        }
,
        {
            "id": "lyr_GoogleLabels_7_7",
            "type": "raster",
            "source": "GoogleLabels_7"
        }],
}