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
                id: '_007_001_start',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_001_start.png",'0px','0px']
            },
            {
                id: '_007_002_printpreviewOver',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_002_printpreviewOver.png",'0px','0px']
            },
            {
                id: '_007_003_printpreviewClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_003_printpreviewClick.png",'0px','0px']
            },
            {
                id: '_007_004_printOver',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_004_printOver.png",'0px','0px']
            },
            {
                id: '_007_005_printClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_005_printClick.png",'0px','0px']
            },
            {
                id: '_007_009_fileOver',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_009_fileOver.png",'0px','0px']
            },
            {
                id: '_007_010_fileClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_010_fileClick.png",'0px','0px']
            },
            {
                id: '_007_011_exitOver',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_011_exitOver.png",'0px','0px']
            },
            {
                id: '_007_012_exitClick',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"007_012_exitClick.png",'0px','0px']
            },
            {
                id: '_003_000_BACKGROUND',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"003_000_BACKGROUND.png",'0px','0px']
            },
            {
                id: 'windows_cursor',
                type: 'image',
                rect: ['1033px', '432px','13px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"windows_cursor.png",'0px','0px']
            },
            {
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['468', '476','320px','45px','auto', 'auto'],
                source: ['media/L2%20IPAC%20OH58_007.mp3'],
                preload: 'auto'
            },
            {
                id: 'play_pause',
                display: 'block',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'play_pause',
                symbolName: 'play_pause'
            }
            ]
        },
    states: {
        "Base State": {
            "${__007_012_exitClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_windows_cursor}": [
                ["style", "top", '432px'],
                ["style", "opacity", '1'],
                ["style", "left", '1033px']
            ],
            "${__007_010_fileClick}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__007_009_fileOver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__007_005_printClick}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__003_000_BACKGROUND}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__007_011_exitOver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__007_004_printOver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__007_001_start}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ],
            "${__007_002_printpreviewOver}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_play_pause}": [
                ["style", "display", 'block']
            ],
            "${__007_003_printpreviewClick}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 38524,
            autoPlay: true,
            timeline: [
                { id: "eid97", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 38487, duration: 0, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${__003_000_BACKGROUND}", "display", 'block', { fromValue: 'none'}], position: 36387, duration: 0, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "style", "${__007_004_printOver}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${__007_004_printOver}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${__007_004_printOver}", "display", 'none', { fromValue: 'block'}], position: 13734, duration: 0, easing: "easeOutQuad" },
                { id: "eid43", tween: [ "style", "${__007_004_printOver}", "display", 'none', { fromValue: 'none'}], position: 16136, duration: 0, easing: "easeOutQuad" },
                { id: "eid69", tween: [ "style", "${__007_012_exitClick}", "display", 'block', { fromValue: 'none'}], position: 18889, duration: 0, easing: "easeOutQuad" },
                { id: "eid3", tween: [ "style", "${_windows_cursor}", "left", '94px', { fromValue: '1033px'}], position: 0, duration: 1945, easing: "easeOutQuad" },
                { id: "eid15", tween: [ "style", "${_windows_cursor}", "left", '247px', { fromValue: '94px'}], position: 4119, duration: 1235, easing: "easeOutQuad" },
                { id: "eid20", tween: [ "style", "${_windows_cursor}", "left", '355px', { fromValue: '247px'}], position: 8000, duration: 750, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${_windows_cursor}", "left", '391px', { fromValue: '355px'}], position: 10881, duration: 879, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${_windows_cursor}", "left", '431px', { fromValue: '391px'}], position: 12170, duration: 1330, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${_windows_cursor}", "left", '955px', { fromValue: '431px'}], position: 13948, duration: 1802, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "style", "${_windows_cursor}", "left", '29px', { fromValue: '955px'}], position: 16136, duration: 1156, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_windows_cursor}", "left", '70px', { fromValue: '29px'}], position: 17810, duration: 851, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_windows_cursor}", "left", '632px', { fromValue: '70px'}], position: 19314, duration: 1261, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_windows_cursor}", "left", '596px', { fromValue: '632px'}], position: 35322, duration: 585, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${__007_011_exitOver}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid65", tween: [ "style", "${__007_011_exitOver}", "display", 'block', { fromValue: 'none'}], position: 18554, duration: 0, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${__007_011_exitOver}", "display", 'none', { fromValue: 'block'}], position: 18889, duration: 0, easing: "easeOutQuad" },
                { id: "eid9", tween: [ "style", "${__007_003_printpreviewClick}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${__007_003_printpreviewClick}", "display", 'block', { fromValue: 'none'}], position: 2680, duration: 0, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "style", "${__007_003_printpreviewClick}", "display", 'none', { fromValue: 'block'}], position: 16136, duration: 0, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${_windows_cursor}", "top", '37px', { fromValue: '432px'}], position: 0, duration: 1945, easing: "easeOutQuad" },
                { id: "eid16", tween: [ "style", "${_windows_cursor}", "top", '99px', { fromValue: '37px'}], position: 4119, duration: 1235, easing: "easeOutQuad" },
                { id: "eid19", tween: [ "style", "${_windows_cursor}", "top", '55px', { fromValue: '99px'}], position: 8000, duration: 750, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${_windows_cursor}", "top", '146px', { fromValue: '55px'}], position: 10881, duration: 879, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "style", "${_windows_cursor}", "top", '450px', { fromValue: '146px'}], position: 12170, duration: 1330, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_windows_cursor}", "top", '26px', { fromValue: '450px'}], position: 13948, duration: 1802, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${_windows_cursor}", "top", '9px', { fromValue: '26px'}], position: 16136, duration: 1156, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "style", "${_windows_cursor}", "top", '237px', { fromValue: '9px'}], position: 17810, duration: 851, easing: "easeOutQuad" },
                { id: "eid75", tween: [ "style", "${_windows_cursor}", "top", '361px', { fromValue: '237px'}], position: 19314, duration: 1261, easing: "easeOutQuad" },
                { id: "eid81", tween: [ "style", "${_windows_cursor}", "top", '409px', { fromValue: '361px'}], position: 35322, duration: 585, easing: "easeOutQuad" },
                { id: "eid56", tween: [ "style", "${__007_010_fileClick}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${__007_010_fileClick}", "display", 'block', { fromValue: 'none'}], position: 17636, duration: 0, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${__007_010_fileClick}", "display", 'none', { fromValue: 'block'}], position: 18889, duration: 0, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${__007_005_printClick}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "style", "${__007_005_printClick}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${__007_005_printClick}", "display", 'none', { fromValue: 'block'}], position: 13734, duration: 0, easing: "easeOutQuad" },
                { id: "eid5", tween: [ "style", "${__007_002_printpreviewOver}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${__007_002_printpreviewOver}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "style", "${__007_002_printpreviewOver}", "display", 'none', { fromValue: 'block'}], position: 16136, duration: 0, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "style", "${__007_009_fileOver}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid54", tween: [ "style", "${__007_009_fileOver}", "display", 'block', { fromValue: 'none'}], position: 17160, duration: 0, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${__007_009_fileOver}", "display", 'none', { fromValue: 'block'}], position: 18889, duration: 0, easing: "easeOutQuad" },
                { id: "eid55", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_audio}', [] ], ""], position: 0 }            ]
        }
    }
},
"pauseIndicator": {
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
                    type: 'rect',
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1008px', '572px', 'auto', 'auto'],
                    fill: ['rgba(132,132,132,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '572px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '1008px']
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
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid864", tween: [ "style", "${_Rectangle5}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid859", tween: [ "style", "${_Rectangle5}", "opacity", '0.4', { fromValue: '0.000000'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid867", tween: [ "style", "${_Rectangle5}", "opacity", '0', { fromValue: '0.4'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid865", tween: [ "style", "${_Rectangle5}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid866", tween: [ "color", "${_Rectangle5}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0, easing: "easeInOutQuad" }            ]
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
                    type: 'rect',
                    id: 'play_pause',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '1008px', '572px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'pause_icon',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'play_icon',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'pauseIndicator',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'pauseIndicator',
                symbolName: 'pauseIndicator',
                autoPlay: {

               }
            },
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
            "${_pauseIndicator}": [
                ["style", "display", 'none']
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
                { id: "eid374", tween: [ "style", "${_pause_icon}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutExpo" },
                { id: "eid375", tween: [ "style", "${_pause_icon}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutExpo" },
                { id: "eid376", tween: [ "style", "${_pause_icon}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutExpo" },
                { id: "eid371", tween: [ "style", "${_play_icon}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutExpo" },
                { id: "eid372", tween: [ "style", "${_play_icon}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutExpo" },
                { id: "eid373", tween: [ "style", "${_play_icon}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0, easing: "easeOutExpo" },
                { id: "eid367", tween: [ "transform", "${_pause_icon}", "scaleX", '1.5', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid366", tween: [ "transform", "${_play_icon}", "scaleY", '1.5', { fromValue: '1'}], position: 500, duration: 1000, easing: "easeOutExpo" },
                { id: "eid358", tween: [ "style", "${_pause_icon}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid368", tween: [ "style", "${_pause_icon}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid860", tween: [ "style", "${_pauseIndicator}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
                { id: "eid861", tween: [ "style", "${_pauseIndicator}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid355", tween: [ "style", "${_play_icon}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid365", tween: [ "style", "${_play_icon}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000, easing: "easeOutExpo" },
                { id: "eid357", tween: [ "style", "${_play_icon}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0 },
                { id: "eid369", tween: [ "transform", "${_pause_icon}", "scaleY", '1.5', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid370", tween: [ "style", "${_pause_icon}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeOutExpo" },
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
                    fill: ['rgba(0,0,0,0)', 'images/pause_icon5.png', '0px', '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/play_icon5.png', '0px', '0px']
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
