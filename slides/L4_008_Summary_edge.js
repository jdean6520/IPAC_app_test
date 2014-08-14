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
                id: 'quiz_foreground',
                type: 'image',
                rect: ['-7px', '-110px','1024px','768px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"quiz_foreground.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['72px', '294px','auto','auto','auto', 'auto'],
                text: "Prepare a PPC using PPC-OH58 Summary",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['329px', '191px','auto','auto','auto', 'auto'],
                text: "IPAC-OH58",
                align: "left",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 70, "rgba(255,255,255,1.00)", "700", "none", "normal"]
            },
            {
                id: 'item_1',
                display: 'none',
                type: 'text',
                rect: ['99px', '280px','auto','auto','auto', 'auto'],
                text: "Prepare, preview, and print a performance planning card.",
                align: "left",
                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'item_2',
                display: 'none',
                type: 'text',
                rect: ['109px', '389px','auto','auto','auto', 'auto'],
                text: "Explore planning values using the Performance Awareness Tool.",
                align: "left",
                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Cursor',
                display: 'none',
                type: 'rect',
                rect: ['83px', '330px','8px','32px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                boxShadow: ["", 0, 0, 20, 0, "rgba(254,210,77,1.00)"]
            },
            {
                id: 'Summary_Title',
                display: 'none',
                type: 'text',
                rect: ['403px', '141px','auto','auto','auto', 'auto'],
                text: "Summary",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 50, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
            },
            {
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['615', '321','320px','45px','auto', 'auto'],
                source: ['media/L2%20IPAC%20OH58_008_Summary.mp3'],
                preload: 'auto'
            },
            {
                id: 'play_pause',
                display: 'block',
                type: 'rect',
                rect: ['0px', '0px','auto','auto','auto', 'auto']
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
            "${_item_1}": [
                ["style", "top", '280px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '129px'],
                ["style", "font-size", '25px']
            ],
            "${_Summary_Title}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(255,235,151,1.00)'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '403px'],
                ["subproperty", "filter.drop-shadow.blur", '20px'],
                ["style", "top", '141px'],
                ["subproperty", "textShadow.blur", '30px'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "display", 'none'],
                ["subproperty", "textShadow.color", 'rgba(254,210,77,1.00)'],
                ["style", "font-size", '50px'],
                ["style", "font-weight", '700']
            ],
            "${_Text3}": [
                ["style", "top", '191px'],
                ["style", "opacity", '1'],
                ["style", "font-weight", '700'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '329px'],
                ["style", "font-size", '70px']
            ],
            "${_quiz_foreground}": [
                ["style", "top", '-110px'],
                ["style", "opacity", '1'],
                ["style", "left", '-7px']
            ],
            "${_Cursor}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(254,210,77,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '83px'],
                ["style", "width", '8px'],
                ["style", "top", '280px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '20px']
            ],
            "${_Text2}": [
                ["style", "top", '294px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '72px'],
                ["style", "font-size", '45px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ],
            "${_item_2}": [
                ["style", "top", '389px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '129px'],
                ["style", "font-size", '25px']
            ],
            "${_play_pause}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 18205,
            autoPlay: true,
            timeline: [
                { id: "eid69", tween: [ "style", "${_item_1}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 500, easing: "easeOutQuad" },
                { id: "eid119", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "style", "${_Cursor}", "display", 'block', { fromValue: 'none'}], position: 5499, duration: 0, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_Cursor}", "top", '389px', { fromValue: '280px'}], position: 13500, duration: 500, easing: "easeOutCubic" },
                { id: "eid75", tween: [ "style", "${_item_2}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 500, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_item_2}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_Summary_Title}", "opacity", '1', { fromValue: '0'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid19", tween: [ "style", "${_item_1}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "style", "${_item_1}", "left", '109px', { fromValue: '129px'}], position: 8500, duration: 500, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_Summary_Title}", "display", 'block', { fromValue: 'none'}], position: 5499, duration: 0, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid73", tween: [ "style", "${_item_2}", "left", '109px', { fromValue: '129px'}], position: 13500, duration: 500, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_Cursor}", "opacity", '1', { fromValue: '0'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid54", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_audio}', [] ], ""], position: 0 }            ]
        }
    }
},
"pauseIndicato": {
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
                symbolName: 'pauseIndicato',
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
                    fill: ['rgba(0,0,0,0)', 'images/pause_icon4.png', '0px', '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/play_icon4.png', '0px', '0px']
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
