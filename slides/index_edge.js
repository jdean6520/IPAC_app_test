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
                id: 'Page_1',
                type: 'group',
                rect: ['0', '0','1280','800','auto', 'auto'],
                c: [
                {
                    id: 'bg',
                    type: 'rect',
                    rect: ['0px', '0px','1280px','800px','auto', 'auto'],
                    fill: ["rgba(254,127,69,1.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'TextTest',
                    type: 'text',
                    rect: ['35px', '330px','1210px','140px','auto', 'auto'],
                    text: "",
                    align: "center",
                    font: ['Arial, Helvetica, sans-serif', 128, "rgba(255,255,255,1)", "400", "none", "normal"]
                },
                {
                    id: 'pressMeBtn',
                    type: 'rect',
                    rect: ['435', '566','auto','auto','auto', 'auto'],
                    cursor: ['pointer']
                }]
            }],
            symbolInstances: [
            {
                id: 'pressMeBtn',
                symbolName: 'pressMeBtn',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["color", "background-color", 'rgba(254,127,69,1.00)']
            ],
            "${_TextTest}": [
                ["style", "top", '330px'],
                ["style", "text-align", 'center'],
                ["style", "height", '140px'],
                ["style", "font-size", '128px'],
                ["style", "left", '35px'],
                ["style", "width", '1210px']
            ],
            "${_pressMeBtn}": [
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '800px'],
                ["style", "width", '1280px']
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
},
"textTest": {
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
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '85px'],
                ["style", "width", '581px']
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
"pressMeBtn": {
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
                    rect: ['0px', '0px', '413px', '100px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    fill: ['rgba(0,134,159,1.00)'],
                    id: 'RoundRect',
                    stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                    type: 'rect',
                    boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                },
                {
                    type: 'text',
                    rect: ['124px', '33px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'Press Me!',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 36, 'rgba(255,255,255,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(0,134,159,1.00)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '4px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.offsetV", '0px'],
                ["color", "border-color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["style", "left", '0px']
            ],
            "${_Text2}": [
                ["style", "left", '124px'],
                ["style", "top", '33px']
            ],
            "${symbolSelector}": [
                ["style", "height", '108px'],
                ["style", "width", '421px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: false,
            labels: {
                "up": 0,
                "over": 500
            },
            timeline: [
                { id: "eid5", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(0,134,159,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,134,159,1.00)'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(5,215,254,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,134,159,1.00)'}], position: 500, duration: 0 }            ]
        }
    }
},
"swiper": {
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
                    id: 'Rectangle3',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '1280px', '800px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '800px'],
                ["style", "width", '1280px']
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
})(jQuery, AdobeEdge, "EDGE-70459846");
