/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_006_001_start',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_001_start.png",'0px','0px']
            },
            {
                id: '_006_002_depRightClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_002_depRightClick.png",'0px','0px']
            },
            {
                id: '_006_003_sendtopatOver',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_003_sendtopatOver.png",'0px','0px']
            },
            {
                id: '_006_004_sendtopatClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_004_sendtopatClick.png",'0px','0px']
            },
            {
                id: '_006_007_fatEnter',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_007_fatEnter.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                display: 'none',
                type: 'rect',
                rect: ['364px', '227px','29px','12px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: '_006_010a_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010a_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010b_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010b_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010c_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '-5px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010c_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010e_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010e_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010f_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010f_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010g_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010g_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010h_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010h_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010i_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010i_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_010j_tabDrag',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_010j_tabDrag.png",'0px','0px']
            },
            {
                id: '_006_011_getvaluesOver',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_011_getvaluesOver.png",'0px','0px']
            },
            {
                id: '_006_013_getvaluesClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_013_getvaluesClick.png",'0px','0px']
            },
            {
                id: '_006_014_routeClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_014_routeClick.png",'0px','0px']
            },
            {
                id: '_006_015_crsOver',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_015_crsOver.png",'0px','0px']
            },
            {
                id: '_006_016_crsClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_016_crsClick.png",'0px','0px']
            },
            {
                id: '_006_019_okClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_019_okClick.png",'0px','0px']
            },
            {
                id: '_006_021_xClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"006_021_xClick.png",'0px','0px']
            },
            {
                id: 'windows_cursor',
                type: 'image',
                rect: ['679', '436','13px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"windows_cursor.png",'0px','0px']
            },
            {
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['510', '286','320px','45px','auto', 'auto'],
                source: ['media/L2%20IPAC%20OH58_006.mp3'],
                preload: 'auto'
            },
            {
                id: 'play_pause',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'play_pause',
                symbolName: 'play_pause',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${__006_010f_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_010j_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_010b_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_003_sendtopatOver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_013_getvaluesClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_010c_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_010h_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_011_getvaluesOver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_010i_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '364px'],
                ["style", "top", '227px']
            ],
            "${__006_004_sendtopatClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_windows_cursor}": [
                ["style", "top", '498px'],
                ["style", "left", '1040px']
            ],
            "${__006_007_fatEnter}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_015_crsOver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_002_depRightClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_001_start}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__006_010g_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_016_crsClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_019_okClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_014_routeClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__006_021_xClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1008px'],
                ["style", "height", '572px'],
                ["style", "overflow", 'hidden']
            ],
            "${__006_010e_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_play_pause}": [
                ["style", "opacity", '1']
            ],
            "${__006_010a_tabDrag}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 47388,
            autoPlay: false,
            timeline: [
                { id: "eid52", tween: [ "style", "${__006_010c_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 31642, duration: 0, easing: "easeOutQuad" },
                { id: "eid61", tween: [ "style", "${__006_010c_tabDrag}", "display", 'none', { fromValue: 'block'}], position: 32522, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${__006_007_fatEnter}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${__006_010i_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 33057, duration: 0, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "style", "${__006_010b_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 31567, duration: 0, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${__006_010b_tabDrag}", "display", 'none', { fromValue: 'block'}], position: 32615, duration: 0, easing: "easeOutQuad" },
                { id: "eid5", tween: [ "style", "${_windows_cursor}", "left", '139px', { fromValue: '1040px'}], position: 2635, duration: 1870, easing: "easeOutQuad" },
                { id: "eid12", tween: [ "style", "${_windows_cursor}", "left", '266px', { fromValue: '139px'}], position: 5500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid17", tween: [ "style", "${_windows_cursor}", "left", '74px', { fromValue: '266px'}], position: 22000, duration: 992, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "style", "${_windows_cursor}", "left", '133px', { fromValue: '74px'}], position: 23415, duration: 500, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${_windows_cursor}", "left", '209px', { fromValue: '133px'}], position: 24500, duration: 500, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_windows_cursor}", "left", '390px', { fromValue: '209px'}], position: 26000, duration: 1250, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${_windows_cursor}", "left", '408px', { fromValue: '390px'}], position: 30500, duration: 500, easing: "easeOutQuad" },
                { id: "eid55", tween: [ "style", "${_windows_cursor}", "left", '412px', { fromValue: '408px'}], position: 31420, duration: 372, easing: "easeOutQuad" },
                { id: "eid75", tween: [ "style", "${_windows_cursor}", "left", '404px', { fromValue: '412px'}], position: 32322, duration: 835, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_windows_cursor}", "left", '885px', { fromValue: '404px'}], position: 33610, duration: 1390, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_windows_cursor}", "left", '598px', { fromValue: '885px'}], position: 36250, duration: 1020, easing: "easeOutQuad" },
                { id: "eid99", tween: [ "style", "${_windows_cursor}", "left", '598px', { fromValue: '598px'}], position: 37810, duration: 0, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_windows_cursor}", "left", '598px', { fromValue: '598px'}], position: 38195, duration: 0, easing: "easeOutQuad" },
                { id: "eid114", tween: [ "style", "${_windows_cursor}", "left", '540px', { fromValue: '598px'}], position: 39000, duration: 488, easing: "easeOutQuad" },
                { id: "eid122", tween: [ "style", "${_windows_cursor}", "left", '968px', { fromValue: '540px'}], position: 42750, duration: 1749, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${__006_010e_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 31707, duration: 0, easing: "easeOutQuad" },
                { id: "eid60", tween: [ "style", "${__006_010e_tabDrag}", "display", 'none', { fromValue: 'block'}], position: 32457, duration: 0, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${__006_010a_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 31500, duration: 0, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "style", "${__006_010a_tabDrag}", "display", 'none', { fromValue: 'block'}], position: 32712, duration: 0, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_windows_cursor}", "top", '116px', { fromValue: '498px'}], position: 2635, duration: 1870, easing: "easeOutQuad" },
                { id: "eid11", tween: [ "style", "${_windows_cursor}", "top", '220px', { fromValue: '116px'}], position: 5500, duration: 1000, easing: "easeOutQuad" },
                { id: "eid18", tween: [ "style", "${_windows_cursor}", "top", '58px', { fromValue: '220px'}], position: 22000, duration: 992, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_windows_cursor}", "top", '58px', { fromValue: '58px'}], position: 23415, duration: 0, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${_windows_cursor}", "top", '233px', { fromValue: '58px'}], position: 26000, duration: 1250, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "style", "${_windows_cursor}", "top", '271px', { fromValue: '233px'}], position: 30500, duration: 500, easing: "easeOutQuad" },
                { id: "eid47", tween: [ "style", "${_windows_cursor}", "top", '271px', { fromValue: '271px'}], position: 31420, duration: 0, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_windows_cursor}", "top", '271px', { fromValue: '271px'}], position: 31792, duration: 0, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${_windows_cursor}", "top", '271px', { fromValue: '271px'}], position: 32322, duration: 0, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "style", "${_windows_cursor}", "top", '271px', { fromValue: '271px'}], position: 33157, duration: 0, easing: "easeOutQuad" },
                { id: "eid89", tween: [ "style", "${_windows_cursor}", "top", '52px', { fromValue: '271px'}], position: 33610, duration: 1390, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_windows_cursor}", "top", '291px', { fromValue: '52px'}], position: 36250, duration: 1020, easing: "easeOutQuad" },
                { id: "eid103", tween: [ "style", "${_windows_cursor}", "top", '325px', { fromValue: '291px'}], position: 37810, duration: 485, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "style", "${_windows_cursor}", "top", '348px', { fromValue: '325px'}], position: 39000, duration: 488, easing: "easeOutQuad" },
                { id: "eid123", tween: [ "style", "${_windows_cursor}", "top", '21px', { fromValue: '348px'}], position: 42750, duration: 1749, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${__006_010j_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 33157, duration: 0, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "style", "${__006_019_okClick}", "display", 'block', { fromValue: 'none'}], position: 39888, duration: 0, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${__006_002_depRightClick}", "display", 'block', { fromValue: 'none'}], position: 4925, duration: 0, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "style", "${__006_003_sendtopatOver}", "display", 'block', { fromValue: 'none'}], position: 6097, duration: 0, easing: "easeOutQuad" },
                { id: "eid91", tween: [ "style", "${__006_013_getvaluesClick}", "display", 'block', { fromValue: 'none'}], position: 36000, duration: 0, easing: "easeOutQuad" },
                { id: "eid14", tween: [ "style", "${__006_004_sendtopatClick}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${__006_010f_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 32712, duration: 0, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${__006_014_routeClick}", "display", 'block', { fromValue: 'none'}], position: 37445, duration: 0, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "style", "${__006_014_routeClick}", "display", 'none', { fromValue: 'block'}], position: 38648, duration: 0, easing: "easeOutQuad" },
                { id: "eid105", tween: [ "style", "${__006_015_crsOver}", "display", 'block', { fromValue: 'none'}], position: 38000, duration: 0, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${__006_015_crsOver}", "display", 'none', { fromValue: 'block'}], position: 38648, duration: 0, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${__006_021_xClick}", "display", 'block', { fromValue: 'none'}], position: 44769, duration: 0, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 27500, duration: 0, easing: "easeOutQuad" },
                { id: "eid90", tween: [ "style", "${__006_011_getvaluesOver}", "display", 'block', { fromValue: 'none'}], position: 34797, duration: 0, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "style", "${__006_016_crsClick}", "display", 'block', { fromValue: 'none'}], position: 38648, duration: 0, easing: "easeOutQuad" },
                { id: "eid65", tween: [ "style", "${__006_010g_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 32907, duration: 0, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${__006_010h_tabDrag}", "display", 'block', { fromValue: 'none'}], position: 32987, duration: 0, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 27500, duration: 517, easing: "easeOutQuad" },
                { id: "eid1", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_audio}', [] ], ""], position: 0 }            ]
        }
    }
},
"play_pause": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '1008px', '572px', 'auto', 'auto'],
                    id: 'play_pause',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'pause_icon'
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                    id: 'play_icon'
                }
            ],
            symbolInstances: [
            {
                id: 'play_icon',
                symbolName: 'play_icon',
                autoPlay: {

               }
            },
            {
                id: 'pause_icon',
                symbolName: 'pause_icon',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ],
            "${_play_icon}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'none']
            ],
            "${_play_pause}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${_pause_icon}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "play": 500,
                "pause": 2000
            },
            timeline: [
                { id: "eid369", tween: [ "transform", "${_pause_icon}", "scaleY", '1.5', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid371", tween: [ "style", "${_play_icon}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutExpo" },
                { id: "eid372", tween: [ "style", "${_play_icon}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutExpo" },
                { id: "eid373", tween: [ "style", "${_play_icon}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutExpo" },
                { id: "eid367", tween: [ "transform", "${_pause_icon}", "scaleX", '1.5', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid366", tween: [ "transform", "${_play_icon}", "scaleY", '1.5', { fromValue: '1'}], position: 500, duration: 1000, easing: "easeOutExpo" },
                { id: "eid358", tween: [ "style", "${_pause_icon}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid368", tween: [ "style", "${_pause_icon}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid355", tween: [ "style", "${_play_icon}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid365", tween: [ "style", "${_play_icon}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000, easing: "easeOutExpo" },
                { id: "eid357", tween: [ "style", "${_play_icon}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0 },
                { id: "eid370", tween: [ "style", "${_pause_icon}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeOutExpo" },
                { id: "eid374", tween: [ "style", "${_pause_icon}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutExpo" },
                { id: "eid375", tween: [ "style", "${_pause_icon}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutExpo" },
                { id: "eid376", tween: [ "style", "${_pause_icon}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutExpo" },
                { id: "eid364", tween: [ "transform", "${_play_icon}", "scaleX", '1.5', { fromValue: '1'}], position: 500, duration: 1000, easing: "easeOutExpo" }            ]
        }
    }
},
"pause_icon": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'pause_icon',
                    type: 'image',
                    rect: ['0px', '0px', '1008px', '572px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/pause_icon2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_pause_icon}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"play_icon": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    filter: [0, 0, 1, 0, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'play_icon',
                    rect: ['0px', '0px', '1008px', '572px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/play_icon2.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_play_icon}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["subproperty", "filter.saturate", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "slide_container");
