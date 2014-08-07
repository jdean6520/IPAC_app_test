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
                id: 'quiz_intro_text',
                display: 'block',
                type: 'image',
                rect: ['0px', '0px','1024px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"quiz_intro_text.png",'0px','0px']
            },
            {
                id: 'quiz_foreground',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','1024px','768px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"quiz_foreground.png",'0px','0px']
            },
            {
                id: 'item_1',
                display: 'none',
                type: 'text',
                rect: ['99px', '330px','auto','auto','auto', 'auto'],
                text: "Prepare, preview, and print a performance planning card.",
                align: "left",
                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 25, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'item_2',
                display: 'none',
                type: 'text',
                rect: ['109px', '439px','auto','auto','auto', 'auto'],
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
                rect: ['403px', '191px','auto','auto','auto', 'auto'],
                text: "Summary",
                font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 50, "rgba(255,255,255,1.00)", "700", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
            },
            {
                id: 'play_pause',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['615', '321','320px','45px','auto', 'auto'],
                source: ['media/L2%20IPAC%20OH58_008_Summary.mp3'],
                preload: 'auto'
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
            "${_item_1}": [
                ["style", "top", '330px'],
                ["subproperty", "filter.blur", '5px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '109px'],
                ["style", "font-size", '25px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ],
            "${_quiz_intro_text}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_item_2}": [
                ["style", "top", '439px'],
                ["subproperty", "filter.blur", '5px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '400'],
                ["style", "left", '109px'],
                ["style", "font-size", '25px']
            ],
            "${_Cursor}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.color", 'rgba(254,210,77,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '83px'],
                ["style", "width", '8px'],
                ["style", "top", '330px'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["subproperty", "boxShadow.blur", '20px']
            ],
            "${_quiz_foreground}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Summary_Title}": [
                ["subproperty", "textShadow.blur", '30px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '403px'],
                ["subproperty", "filter.drop-shadow.blur", '20px'],
                ["style", "top", '191px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(255,235,151,1.00)'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "display", 'none'],
                ["subproperty", "textShadow.color", 'rgba(254,210,77,1.00)'],
                ["style", "font-size", '50px'],
                ["style", "font-weight", '700']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: false,
            timeline: [
                { id: "eid25", tween: [ "style", "${_Cursor}", "display", 'block', { fromValue: 'none'}], position: 5499, duration: 0, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_Cursor}", "top", '439px', { fromValue: '330px'}], position: 13500, duration: 500, easing: "easeOutCubic" },
                { id: "eid30", tween: [ "style", "${_quiz_intro_text}", "opacity", '0', { fromValue: '1'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_item_2}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "subproperty", "${_item_2}", "filter.blur", '0px', { fromValue: '5px'}], position: 13500, duration: 500, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_quiz_foreground}", "opacity", '1', { fromValue: '0'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${_quiz_intro_text}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeOutQuad" },
                { id: "eid19", tween: [ "style", "${_item_1}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "style", "${_quiz_foreground}", "display", 'block', { fromValue: 'none'}], position: 5499, duration: 0, easing: "easeOutQuad" },
                { id: "eid27", tween: [ "style", "${_Summary_Title}", "display", 'block', { fromValue: 'none'}], position: 5499, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_Summary_Title}", "opacity", '1', { fromValue: '0'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "subproperty", "${_item_1}", "filter.blur", '0px', { fromValue: '5px'}], position: 8500, duration: 500, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${_Cursor}", "opacity", '1', { fromValue: '0'}], position: 5499, duration: 501, easing: "easeOutQuad" },
                { id: "eid54", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_audio}', [] ], ""], position: 0 }            ]
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
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '768px'],
                ["style", "width", '1024px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
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
