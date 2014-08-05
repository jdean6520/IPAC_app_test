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
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'OH-58_Splash',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"OH-58_Splash.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_001OACwindow3',
                display: 'block',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_001OACwindow.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_002SERIALentered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_002SERIALentered.png",'0%','0%','100%','auto']
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['371px', '267px','95px','16px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['550px', '338px','31px','16px','auto', 'auto'],
                fill: ["rgba(255,255,255,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_004_003WEIGHTentered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_003WEIGHTentered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_004WEIGHTentered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_004WEIGHTentered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_005JETTISONentered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_005JETTISONentered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_006ACCONFIGrollover2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_006ACCONFIGrollover.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_006ACCONFIGtab2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_006ACCONFIGtab.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_007DEFLECTORpulldown',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_007DEFLECTORpulldown.png",'0px','0px']
            },
            {
                id: '_004_008DEFLECTORnot_installed_highlighted',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_008DEFLECTORnot_installed_highlighted.png",'0px','0px']
            },
            {
                id: '_004_009DEFLECTORnot_installed_entered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_009DEFLECTORnot_installed_entered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_010ETFentered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_010ETFentered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_011JAMMERpulldown2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_011JAMMERpulldown.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_013JAMMERnot_installed_entered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_013JAMMERnot_installed_entered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_014LAUNCHERpulldown2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_014LAUNCHERpulldown.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_016LAUNCHERnot_installed_entered4',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_016LAUNCHERnot_installed_entered.png",'0px','0px']
            },
            {
                id: '_004_017ROCKETpulldown2',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_017ROCKETpulldown.png",'0px','0px']
            },
            {
                id: '_004_019ROCKETright_entered',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_019ROCKETright_entered.png",'0px','0px']
            },
            {
                id: '_004_020M3Ppulldown',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_020M3Ppulldown.png",'0px','0px']
            },
            {
                id: '_004_022M3Pleft_entered',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_022M3Pleft_entered.png",'0px','0px']
            },
            {
                id: '_004_024CUSTOMwindow',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_024CUSTOMwindow.png",'0px','0px']
            },
            {
                id: '_004_025ITEM1checked',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_025ITEM1checked.png",'0px','0px']
            },
            {
                id: '_004_026ITEM1name',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_026ITEM1name.png",'0px','0px']
            },
            {
                id: '_004_027ITEM1drag',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_027ITEM1drag.png",'0px','0px']
            },
            {
                id: '_004_028OKhighlighted',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_028OKhighlighted.png",'0px','0px']
            },
            {
                id: '_004_029CLOSEover2',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_029CLOSEover.png",'0px','0px']
            },
            {
                id: '_004_029OACupdated2',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_029OACupdated.png",'0px','0px']
            },
            {
                id: '_004_030CLOSEdown',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_030CLOSEdown.png",'0px','0px']
            },
            {
                id: '_004_031DEPtab',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_031DEPtab.png",'0px','0px']
            },
            {
                id: '_004_031FILEhighlighted',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_031FILEhighlighted.png",'0px','0px']
            },
            {
                id: '_004_032MENU',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_032MENU.png",'0px','0px']
            },
            {
                id: '_004_033ACFGhighlighted',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_033ACFGhighlighted.png",'0px','0px']
            },
            {
                id: '_004_033ACFGmenu',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_033ACFGmenu.png",'0px','0px']
            },
            {
                id: '_004_034EXPORThighlighted3',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_034EXPORThighlighted.png",'0px','0px']
            },
            {
                id: '_004_035EXPORTwindow',
                display: 'none',
                type: 'image',
                rect: ['0', '0','682px','482px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_035EXPORTwindow.png",'0px','0px']
            },
            {
                id: '_004_036NAMEentered',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_036NAMEentered.png",'0px','0px']
            },
            {
                id: '_004_037SAVEhighlighted',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_037SAVEhighlighted.png",'0px','0px']
            },
            {
                id: '_004_038EXPORTpopup',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_038EXPORTpopup.png",'0px','0px']
            },
            {
                id: '_004_039OKhighlighted',
                display: 'none',
                type: 'image',
                rect: ['0', '0','1008px','572px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_039OKhighlighted.png",'0px','0px']
            },
            {
                id: 'interaction_ETF',
                display: 'none',
                type: 'rect',
                rect: ['550', '95','auto','auto','auto', 'auto']
            },
            {
                id: 'answer',
                display: 'none',
                type: 'text',
                rect: ['559px', '105px','56px','19px','auto', 'auto'],
                cursor: ['text'],
                text: "",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'MOUSE_CURSOR',
                display: 'block',
                type: 'image',
                rect: ['160px', '377px','12px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"MOUSE_CURSOR.png",'0px','0px']
            },
            {
                id: 'play_pause',
                display: 'block',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'interaction_hitarea_right',
                display: 'none',
                type: 'rect',
                rect: ['472px', '213px','auto','auto','auto', 'auto']
            },
            {
                id: 'hitarea',
                display: 'none',
                type: 'rect',
                rect: ['362px', '213px','auto','auto','auto', 'auto']
            },
            {
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/L2%20IPAC%20OH58_004.mp3'],
                preload: 'auto'
            }],
            symbolInstances: [
            {
                id: 'hitarea',
                symbolName: 'hitarea',
                autoPlay: {

                }
            },
            {
                id: 'play_pause',
                symbolName: 'play_pause',
                autoPlay: {

                }
            },
            {
                id: 'interaction_ETF',
                symbolName: 'interaction_ETF',
                autoPlay: {

                }
            },
            {
                id: 'interaction_hitarea_right',
                symbolName: 'interaction_hitarea_right',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_interaction_hitarea_right}": [
                ["style", "top", '213px'],
                ["style", "left", '337px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2}": [
                ["style", "top", '338px'],
                ["style", "opacity", '0.000000'],
                ["style", "overflow", 'visible']
            ],
            "${__004_001OACwindow3}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_hitarea}": [
                ["style", "top", '213px'],
                ["transform", "scaleY", '1.16667'],
                ["style", "display", 'none'],
                ["style", "left", '354px'],
                ["transform", "scaleX", '1']
            ],
            "${__004_033ACFGhighlighted}": [
                ["style", "display", 'none']
            ],
            "${_answer}": [
                ["style", "opacity", '1'],
                ["style", "left", '561px'],
                ["style", "font-size", '12px'],
                ["style", "top", '104px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '15px'],
                ["style", "cursor", 'text'],
                ["style", "display", 'none'],
                ["style", "width", '48px']
            ],
            "${__004_024CUSTOMwindow}": [
                ["style", "display", 'none']
            ],
            "${__004_039OKhighlighted}": [
                ["style", "display", 'none']
            ],
            "${__004_011JAMMERpulldown2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_030CLOSEdown}": [
                ["style", "display", 'none']
            ],
            "${__004_031FILEhighlighted}": [
                ["style", "display", 'none']
            ],
            "${__004_020M3Ppulldown}": [
                ["style", "display", 'none']
            ],
            "${__004_019ROCKETright_entered}": [
                ["style", "display", 'none']
            ],
            "${__004_031DEPtab}": [
                ["style", "display", 'none']
            ],
            "${__004_025ITEM1checked}": [
                ["style", "display", 'none']
            ],
            "${__004_016LAUNCHERnot_installed_entered4}": [
                ["style", "display", 'none']
            ],
            "${__004_002SERIALentered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_032MENU}": [
                ["style", "display", 'none']
            ],
            "${__004_028OKhighlighted}": [
                ["style", "display", 'none']
            ],
            "${__004_034EXPORThighlighted3}": [
                ["style", "display", 'none']
            ],
            "${_OH-58_Splash}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_play_pause}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1']
            ],
            "${__004_036NAMEentered}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${__004_026ITEM1name}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${__004_033ACFGmenu}": [
                ["style", "display", 'none']
            ],
            "${__004_037SAVEhighlighted}": [
                ["style", "display", 'none']
            ],
            "${__004_009DEFLECTORnot_installed_entered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_MOUSE_CURSOR}": [
                ["motion", "location", '166px 386.5px'],
                ["style", "display", 'block']
            ],
            "${__004_005JETTISONentered2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${__004_004WEIGHTentered2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${__004_022M3Pleft_entered}": [
                ["style", "display", 'none']
            ],
            "${__004_008DEFLECTORnot_installed_highlighted}": [
                ["style", "display", 'none']
            ],
            "${__004_006ACCONFIGtab2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_029CLOSEover2}": [
                ["style", "display", 'none']
            ],
            "${__004_029OACupdated2}": [
                ["style", "display", 'none']
            ],
            "${__004_027ITEM1drag}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${__004_007DEFLECTORpulldown}": [
                ["style", "display", 'none']
            ],
            "${__004_035EXPORTwindow}": [
                ["style", "display", 'none']
            ],
            "${__004_014LAUNCHERpulldown2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_017ROCKETpulldown2}": [
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["style", "top", '267px'],
                ["style", "opacity", '1'],
                ["style", "height", '16px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${__004_013JAMMERnot_installed_entered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '15px'],
                ["style", "display", 'none']
            ],
            "${__004_038EXPORTpopup}": [
                ["style", "display", 'none']
            ],
            "${__004_010ETFentered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "width", '1008px'],
                ["style", "height", '572px'],
                ["style", "overflow", 'hidden']
            ],
            "${__004_003WEIGHTentered2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${__004_006ACCONFIGrollover2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_interaction_ETF}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 192151,
            autoPlay: false,
            labels: {
                "Interaction_1": 90300,
                "Interaction_2": 97053,
                "Interaction_3": 102000,
                "Interaction_4": 107963,
                "Interaction_5": 113600,
                "Interaction_6": 120569
            },
            timeline: [
                { id: "eid811", tween: [ "style", "${__004_032MENU}", "display", 'block', { fromValue: 'none'}], position: 174168, duration: 0, easing: "easeOutQuad" },
                { id: "eid825", tween: [ "style", "${__004_032MENU}", "display", 'none', { fromValue: 'block'}], position: 178300, duration: 0, easing: "easeOutQuad" },
                { id: "eid426", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 97053, duration: 0, easing: "easeOutBounce" },
                { id: "eid432", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 97218, duration: 0, easing: "easeOutQuad" },
                { id: "eid433", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 97306, duration: 0, easing: "easeOutQuad" },
                { id: "eid460", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 97477, duration: 0, easing: "easeOutQuad" },
                { id: "eid471", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid483", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 102296, duration: 0, easing: "easeOutQuad" },
                { id: "eid486", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 102356, duration: 0, easing: "easeOutQuad" },
                { id: "eid498", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 102600, duration: 0, easing: "easeOutQuad" },
                { id: "eid523", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 108000, duration: 0 },
                { id: "eid529", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 108267, duration: 0 },
                { id: "eid532", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 108313, duration: 0 },
                { id: "eid526", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 108600, duration: 0 },
                { id: "eid563", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 113651, duration: 0 },
                { id: "eid564", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 113918, duration: 0 },
                { id: "eid565", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 113951, duration: 0 },
                { id: "eid566", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 114251, duration: 0 },
                { id: "eid670", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 120600, duration: 0 },
                { id: "eid671", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 120867, duration: 0 },
                { id: "eid704", tween: [ "style", "${_interaction_hitarea_right}", "display", 'block', { fromValue: 'none'}], position: 134245, duration: 0, easing: "easeOutQuad" },
                { id: "eid708", tween: [ "style", "${_interaction_hitarea_right}", "display", 'none', { fromValue: 'block'}], position: 134400, duration: 0, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "style", "${_answer}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_answer}", "display", 'block', { fromValue: 'none'}], position: 90336, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_answer}", "display", 'none', { fromValue: 'block'}], position: 90500, duration: 0, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "style", "${__004_004WEIGHTentered2}", "opacity", '1', { fromValue: '0'}], position: 44026, duration: 898, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${__004_003WEIGHTentered2}", "opacity", '1', { fromValue: '0'}], position: 40402, duration: 848, easing: "easeOutQuad" },
                { id: "eid739", tween: [ "transform", "${_hitarea}", "scaleX", '1', { fromValue: '1'}], position: 108000, duration: 0, easing: "easeOutQuad" },
                { id: "eid740", tween: [ "transform", "${_hitarea}", "scaleX", '1', { fromValue: '1'}], position: 108313, duration: 0, easing: "easeOutQuad" },
                { id: "eid738", tween: [ "transform", "${_hitarea}", "scaleX", '1', { fromValue: '1'}], position: 113651, duration: 0, easing: "easeOutQuad" },
                { id: "eid741", tween: [ "transform", "${_hitarea}", "scaleX", '1', { fromValue: '1'}], position: 113951, duration: 0, easing: "easeOutQuad" },
                { id: "eid737", tween: [ "transform", "${_hitarea}", "scaleX", '1', { fromValue: '1'}], position: 120600, duration: 0, easing: "easeOutQuad" },
                { id: "eid736", tween: [ "transform", "${_hitarea}", "scaleX", '0.42933', { fromValue: '1'}], position: 134245, duration: 0, easing: "easeOutQuad" },
                { id: "eid38", tween: [ "style", "${__004_006ACCONFIGrollover2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${__004_006ACCONFIGrollover2}", "display", 'block', { fromValue: 'none'}], position: 73250, duration: 0, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "style", "${__004_006ACCONFIGrollover2}", "display", 'none', { fromValue: 'block'}], position: 73700, duration: 0, easing: "easeOutQuad" },
                { id: "eid786", tween: [ "style", "${__004_006ACCONFIGrollover2}", "display", 'none', { fromValue: 'none'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid846", tween: [ "style", "${__004_038EXPORTpopup}", "display", 'block', { fromValue: 'none'}], position: 190400, duration: 0, easing: "easeOutQuad" },
                { id: "eid853", tween: [ "style", "${__004_038EXPORTpopup}", "display", 'none', { fromValue: 'block'}], position: 192000, duration: 0, easing: "easeOutQuad" },
                { id: "eid810", tween: [ "style", "${__004_031FILEhighlighted}", "display", 'block', { fromValue: 'none'}], position: 173657, duration: 0, easing: "easeOutQuad" },
                { id: "eid826", tween: [ "style", "${__004_031FILEhighlighted}", "display", 'none', { fromValue: 'block'}], position: 178300, duration: 0, easing: "easeOutQuad" },
                { id: "eid538", tween: [ "style", "${__004_019ROCKETright_entered}", "display", 'block', { fromValue: 'none'}], position: 108600, duration: 0 },
                { id: "eid778", tween: [ "style", "${__004_019ROCKETright_entered}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid851", tween: [ "style", "${__004_039OKhighlighted}", "display", 'block', { fromValue: 'none'}], position: 191272, duration: 0, easing: "easeOutQuad" },
                { id: "eid852", tween: [ "style", "${__004_039OKhighlighted}", "display", 'none', { fromValue: 'block'}], position: 192000, duration: 0, easing: "easeOutQuad" },
                { id: "eid795", tween: [ "style", "${__004_031DEPtab}", "display", 'block', { fromValue: 'none'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid793", tween: [ "style", "${__004_029OACupdated2}", "display", 'block', { fromValue: 'none'}], position: 157200, duration: 0, easing: "easeOutQuad" },
                { id: "eid803", tween: [ "style", "${__004_029OACupdated2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid750", tween: [ "style", "${__004_026ITEM1name}", "display", 'block', { fromValue: 'none'}], position: 142900, duration: 0 },
                { id: "eid751", tween: [ "style", "${__004_026ITEM1name}", "display", 'block', { fromValue: 'block'}], position: 143113, duration: 0 },
                { id: "eid769", tween: [ "style", "${__004_026ITEM1name}", "display", 'none', { fromValue: 'block'}], position: 154700, duration: 0 },
                { id: "eid156", tween: [ "style", "${_OH-58_Splash}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 85408, duration: 0, easing: "easeOutQuad" },
                { id: "eid821", tween: [ "style", "${__004_034EXPORThighlighted3}", "display", 'block', { fromValue: 'none'}], position: 177723, duration: 0, easing: "easeOutQuad" },
                { id: "eid822", tween: [ "style", "${__004_034EXPORThighlighted3}", "display", 'none', { fromValue: 'block'}], position: 178300, duration: 0, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "style", "${__004_003WEIGHTentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${__004_003WEIGHTentered2}", "display", 'block', { fromValue: 'none'}], position: 40402, duration: 0, easing: "easeOutQuad" },
                { id: "eid791", tween: [ "style", "${__004_003WEIGHTentered2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid814", tween: [ "style", "${__004_033ACFGhighlighted}", "display", 'block', { fromValue: 'none'}], position: 175337, duration: 0, easing: "easeOutQuad" },
                { id: "eid824", tween: [ "style", "${__004_033ACFGhighlighted}", "display", 'none', { fromValue: 'block'}], position: 178300, duration: 0, easing: "easeOutQuad" },
                { id: "eid33", tween: [ "style", "${__004_010ETFentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid212", tween: [ "style", "${__004_010ETFentered2}", "display", 'block', { fromValue: 'none'}], position: 90500, duration: 0, easing: "easeOutQuad" },
                { id: "eid783", tween: [ "style", "${__004_010ETFentered2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid507", tween: [ "style", "${__004_016LAUNCHERnot_installed_entered4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid506", tween: [ "style", "${__004_016LAUNCHERnot_installed_entered4}", "display", 'block', { fromValue: 'none'}], position: 102600, duration: 0 },
                { id: "eid780", tween: [ "style", "${__004_016LAUNCHERnot_installed_entered4}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid703", tween: [ "style", "${__004_024CUSTOMwindow}", "display", 'block', { fromValue: 'none'}], position: 120900, duration: 0, easing: "easeOutQuad" },
                { id: "eid771", tween: [ "style", "${__004_024CUSTOMwindow}", "display", 'none', { fromValue: 'block'}], position: 154700, duration: 0 },
                { id: "eid30", tween: [ "style", "${__004_013JAMMERnot_installed_entered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid443", tween: [ "style", "${__004_013JAMMERnot_installed_entered2}", "display", 'block', { fromValue: 'none'}], position: 97477, duration: 0, easing: "easeOutQuad" },
                { id: "eid782", tween: [ "style", "${__004_013JAMMERnot_installed_entered2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid758", tween: [ "style", "${__004_027ITEM1drag}", "opacity", '1', { fromValue: '0'}], position: 146500, duration: 300 },
                { id: "eid268", tween: [ "style", "${_interaction_ETF}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid269", tween: [ "style", "${_interaction_ETF}", "display", 'block', { fromValue: 'none'}], position: 90336, duration: 0, easing: "easeOutQuad" },
                { id: "eid271", tween: [ "style", "${_interaction_ETF}", "display", 'none', { fromValue: 'block'}], position: 90500, duration: 0, easing: "easeOutQuad" },
                { id: "eid755", tween: [ "style", "${__004_027ITEM1drag}", "display", 'block', { fromValue: 'none'}], position: 146500, duration: 0 },
                { id: "eid756", tween: [ "style", "${__004_027ITEM1drag}", "display", 'block', { fromValue: 'block'}], position: 146800, duration: 0 },
                { id: "eid768", tween: [ "style", "${__004_027ITEM1drag}", "display", 'none', { fromValue: 'block'}], position: 154700, duration: 0 },
                { id: "eid834", tween: [ "style", "${__004_036NAMEentered}", "opacity", '1', { fromValue: '0'}], position: 183669, duration: 1331, easing: "easeOutQuad" },
                { id: "eid446", tween: [ "style", "${__004_008DEFLECTORnot_installed_highlighted}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid451", tween: [ "style", "${__004_008DEFLECTORnot_installed_highlighted}", "display", 'block', { fromValue: 'none'}], position: 83750, duration: 0, easing: "easeOutQuad" },
                { id: "eid454", tween: [ "style", "${__004_008DEFLECTORnot_installed_highlighted}", "display", 'none', { fromValue: 'block'}], position: 84475, duration: 0, easing: "easeOutQuad" },
                { id: "eid827", tween: [ "style", "${__004_035EXPORTwindow}", "display", 'block', { fromValue: 'none'}], position: 178600, duration: 0, easing: "easeOutQuad" },
                { id: "eid845", tween: [ "style", "${__004_035EXPORTwindow}", "display", 'none', { fromValue: 'block'}], position: 190200, duration: 0, easing: "easeOutQuad" },
                { id: "eid468", tween: [ "style", "${_hitarea}", "top", '213px', { fromValue: '213px'}], position: 97053, duration: 0, easing: "easeOutQuad" },
                { id: "eid459", tween: [ "style", "${_hitarea}", "top", '261px', { fromValue: '213px'}], position: 97306, duration: 0, easing: "easeOutQuad" },
                { id: "eid475", tween: [ "style", "${_hitarea}", "top", '349px', { fromValue: '261px'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid480", tween: [ "style", "${_hitarea}", "top", '349px', { fromValue: '349px'}], position: 102146, duration: 0, easing: "easeOutQuad" },
                { id: "eid491", tween: [ "style", "${_hitarea}", "top", '394px', { fromValue: '349px'}], position: 102356, duration: 0, easing: "easeOutQuad" },
                { id: "eid497", tween: [ "style", "${_hitarea}", "top", '394px', { fromValue: '394px'}], position: 102450, duration: 0, easing: "easeOutQuad" },
                { id: "eid513", tween: [ "style", "${_hitarea}", "top", '374px', { fromValue: '394px'}], position: 108000, duration: 0 },
                { id: "eid516", tween: [ "style", "${_hitarea}", "top", '432px', { fromValue: '394px'}], position: 108313, duration: 0 },
                { id: "eid561", tween: [ "style", "${_hitarea}", "top", '401px', { fromValue: '432px'}], position: 113651, duration: 0 },
                { id: "eid562", tween: [ "style", "${_hitarea}", "top", '418px', { fromValue: '374px'}], position: 113951, duration: 0 },
                { id: "eid732", tween: [ "style", "${_hitarea}", "top", '465px', { fromValue: '418px'}], position: 120600, duration: 0, easing: "easeOutQuad" },
                { id: "eid719", tween: [ "style", "${_hitarea}", "top", '204px', { fromValue: '465px'}], position: 134245, duration: 0, easing: "easeOutQuad" },
                { id: "eid73", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 28308, duration: 500, easing: "easeOutQuad" },
                { id: "eid797", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid470", tween: [ "style", "${_interaction_hitarea_right}", "left", '337px', { fromValue: '337px'}], position: 97053, duration: 0, easing: "easeOutQuad" },
                { id: "eid473", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '337px'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid484", tween: [ "style", "${_interaction_hitarea_right}", "left", '349px', { fromValue: '356px'}], position: 102296, duration: 0, easing: "easeOutQuad" },
                { id: "eid487", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '349px'}], position: 102356, duration: 0, easing: "easeOutQuad" },
                { id: "eid499", tween: [ "style", "${_interaction_hitarea_right}", "left", '355px', { fromValue: '343px'}], position: 102600, duration: 0, easing: "easeOutQuad" },
                { id: "eid524", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '355px'}], position: 108000, duration: 0 },
                { id: "eid533", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '343px'}], position: 108313, duration: 0 },
                { id: "eid567", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '344px'}], position: 113651, duration: 0 },
                { id: "eid568", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '344px'}], position: 113951, duration: 0 },
                { id: "eid674", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '344px'}], position: 120600, duration: 0 },
                { id: "eid721", tween: [ "style", "${_interaction_hitarea_right}", "left", '245px', { fromValue: '344px'}], position: 134245, duration: 0, easing: "easeOutQuad" },
                { id: "eid709", tween: [ "style", "${_interaction_hitarea_right}", "left", '344px', { fromValue: '277px'}], position: 134400, duration: 0, easing: "easeOutQuad" },
                { id: "eid447", tween: [ "style", "${__004_007DEFLECTORpulldown}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid450", tween: [ "style", "${__004_007DEFLECTORpulldown}", "display", 'block', { fromValue: 'none'}], position: 82570, duration: 0, easing: "easeOutQuad" },
                { id: "eid452", tween: [ "style", "${__004_007DEFLECTORpulldown}", "display", 'none', { fromValue: 'block'}], position: 84475, duration: 0, easing: "easeOutQuad" },
                { id: "eid766", tween: [ "style", "${__004_028OKhighlighted}", "display", 'block', { fromValue: 'none'}], position: 154041, duration: 0 },
                { id: "eid767", tween: [ "style", "${__004_028OKhighlighted}", "display", 'none', { fromValue: 'block'}], position: 154700, duration: 0 },
                { id: "eid40", tween: [ "style", "${__004_004WEIGHTentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${__004_004WEIGHTentered2}", "display", 'block', { fromValue: 'none'}], position: 44026, duration: 0, easing: "easeOutQuad" },
                { id: "eid105", tween: [ "style", "${__004_004WEIGHTentered2}", "display", 'block', { fromValue: 'block'}], position: 44924, duration: 0, easing: "easeOutQuad" },
                { id: "eid790", tween: [ "style", "${__004_004WEIGHTentered2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${__004_009DEFLECTORnot_installed_entered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${__004_009DEFLECTORnot_installed_entered2}", "display", 'block', { fromValue: 'none'}], position: 84475, duration: 0, easing: "easeOutQuad" },
                { id: "eid784", tween: [ "style", "${__004_009DEFLECTORnot_installed_entered2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid469", tween: [ "style", "${_hitarea}", "left", '354px', { fromValue: '354px'}], position: 97053, duration: 0, easing: "easeOutQuad" },
                { id: "eid477", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '354px'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid479", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '365px'}], position: 102146, duration: 0, easing: "easeOutQuad" },
                { id: "eid490", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '365px'}], position: 102356, duration: 0, easing: "easeOutQuad" },
                { id: "eid496", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '365px'}], position: 102450, duration: 0, easing: "easeOutQuad" },
                { id: "eid512", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '365px'}], position: 108000, duration: 0 },
                { id: "eid515", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '365px'}], position: 108313, duration: 0 },
                { id: "eid559", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '365px'}], position: 113651, duration: 0 },
                { id: "eid560", tween: [ "style", "${_hitarea}", "left", '365px', { fromValue: '365px'}], position: 113951, duration: 0 },
                { id: "eid731", tween: [ "style", "${_hitarea}", "left", '356px', { fromValue: '365px'}], position: 120600, duration: 0, easing: "easeOutQuad" },
                { id: "eid718", tween: [ "style", "${_hitarea}", "left", '221px', { fromValue: '309px'}], position: 134245, duration: 0, easing: "easeOutQuad" },
                { id: "eid746", tween: [ "style", "${__004_022M3Pleft_entered}", "display", 'block', { fromValue: 'none'}], position: 114300, duration: 0, easing: "easeOutQuad" },
                { id: "eid776", tween: [ "style", "${__004_022M3Pleft_entered}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${__004_005JETTISONentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${__004_005JETTISONentered2}", "display", 'block', { fromValue: 'none'}], position: 51491, duration: 0, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "style", "${__004_005JETTISONentered2}", "display", 'block', { fromValue: 'block'}], position: 52558, duration: 0, easing: "easeOutQuad" },
                { id: "eid789", tween: [ "style", "${__004_005JETTISONentered2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid37", tween: [ "style", "${__004_006ACCONFIGtab2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${__004_006ACCONFIGtab2}", "display", 'block', { fromValue: 'none'}], position: 73700, duration: 0, easing: "easeOutQuad" },
                { id: "eid785", tween: [ "style", "${__004_006ACCONFIGtab2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid32", tween: [ "style", "${__004_011JAMMERpulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid431", tween: [ "style", "${__004_011JAMMERpulldown2}", "display", 'block', { fromValue: 'none'}], position: 97153, duration: 0, easing: "easeOutQuad" },
                { id: "eid444", tween: [ "style", "${__004_011JAMMERpulldown2}", "display", 'none', { fromValue: 'block'}], position: 97477, duration: 0, easing: "easeOutQuad" },
                { id: "eid535", tween: [ "style", "${__004_017ROCKETpulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid536", tween: [ "style", "${__004_017ROCKETpulldown2}", "display", 'block', { fromValue: 'none'}], position: 108103, duration: 0 },
                { id: "eid537", tween: [ "style", "${__004_017ROCKETpulldown2}", "display", 'none', { fromValue: 'block'}], position: 108600, duration: 0 },
                { id: "eid779", tween: [ "style", "${__004_017ROCKETpulldown2}", "display", 'none', { fromValue: 'none'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid820", tween: [ "style", "${__004_033ACFGmenu}", "display", 'block', { fromValue: 'none'}], position: 175944, duration: 0, easing: "easeOutQuad" },
                { id: "eid823", tween: [ "style", "${__004_033ACFGmenu}", "display", 'none', { fromValue: 'block'}], position: 178300, duration: 0, easing: "easeOutQuad" },
                { id: "eid43", tween: [ "style", "${__004_001OACwindow3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid46", tween: [ "motion", "${_MOUSE_CURSOR}", [[166, 386.5, 0, 0],[166, 386.5, 0, 0]]], position: 0, duration: 0 },
                { id: "eid49", tween: [ "motion", "${_MOUSE_CURSOR}", [[166, 386.5, 0, 0],[415, 173.5, 0, 0]]], position: 19000, duration: 1298, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "motion", "${_MOUSE_CURSOR}", [[415, 173.5, 0, 0],[460, 285.5, 0, 0]]], position: 25805, duration: 939, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "motion", "${_MOUSE_CURSOR}", [[460, 285.5, 0, 0],[637, 295.5, 0, 0]]], position: 33283, duration: 1217, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "motion", "${_MOUSE_CURSOR}", [[637, 295.5, 0, 0],[550, 358.5, 0, 0]]], position: 38263, duration: 735, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "motion", "${_MOUSE_CURSOR}", [[550, 358.5, 0, 0],[560, 393.17, 0, 0]]], position: 42439, duration: 811, easing: "easeOutQuad" },
                { id: "eid111", tween: [ "motion", "${_MOUSE_CURSOR}", [[560, 393.17, 0, 0],[550, 481.5, 0, 0]]], position: 49901, duration: 1099, easing: "easeOutQuad" },
                { id: "eid122", tween: [ "motion", "${_MOUSE_CURSOR}", [[550, 481.5, 0, 0],[341, 43.5, 0, 0]]], position: 71613, duration: 1874, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "motion", "${_MOUSE_CURSOR}", [[341, 43.5, 0, 0],[389, 93.5, 0, 0]]], position: 77341, duration: 815, easing: "easeOutQuad" },
                { id: "eid132", tween: [ "motion", "${_MOUSE_CURSOR}", [[389, 93.5, 0, 0],[667, 101.5, 0, 0]]], position: 80250, duration: 1838, easing: "easeOutQuad" },
                { id: "eid141", tween: [ "motion", "${_MOUSE_CURSOR}", [[667, 101.5, 0, 0],[665, 138.5, 0, 0]]], position: 83268, duration: 701, easing: "easeOutQuad" },
                { id: "eid155", tween: [ "motion", "${_MOUSE_CURSOR}", [[665, 138.5, 0, 0],[595, 118.5, 0, 0]]], position: 85639, duration: 856, easing: "easeOutQuad" },
                { id: "eid761", tween: [ "motion", "${_MOUSE_CURSOR}", [[595, 118.5, 0, 0],[629, 229.5, 0, 0]]], position: 148017, duration: 0 },
                { id: "eid765", tween: [ "motion", "${_MOUSE_CURSOR}", [[629, 229.5, 0, 0],[719, 493.5, 0, 0]]], position: 152875, duration: 1425, easing: "easeOutQuad" },
                { id: "eid773", tween: [ "motion", "${_MOUSE_CURSOR}", [[719, 493.5, 0, 0],[706, 22.5, 0, 0]]], position: 155569, duration: 1531, easing: "easeOutQuad" },
                { id: "eid809", tween: [ "motion", "${_MOUSE_CURSOR}", [[706, 22.5, 0, 0],[39, 23.5, 0, 0]]], position: 171549, duration: 2304, easing: "easeOutQuad" },
                { id: "eid813", tween: [ "motion", "${_MOUSE_CURSOR}", [[39, 23.5, 0, 0],[101, 138.5, 0, 0]]], position: 174542, duration: 1063, easing: "easeOutQuad" },
                { id: "eid816", tween: [ "motion", "${_MOUSE_CURSOR}", [[101, 138.5, 0, 0],[268, 138.5, 0, 0]]], position: 175700, duration: 808, easing: "easeOutQuad" },
                { id: "eid818", tween: [ "motion", "${_MOUSE_CURSOR}", [[268, 138.5, 0, 0],[308, 186.5, 0, 0]]], position: 176900, duration: 1000, easing: "easeOutQuad" },
                { id: "eid829", tween: [ "motion", "${_MOUSE_CURSOR}", [[308, 186.5, 0, 0],[200, 380.5, 0, 0]]], position: 181300, duration: 1229, easing: "easeOutQuad" },
                { id: "eid839", tween: [ "motion", "${_MOUSE_CURSOR}", [[200, 380.5, 0, 0],[260, 382.5, 0, 0]]], position: 187673, duration: 0, easing: "easeOutQuad" },
                { id: "eid841", tween: [ "motion", "${_MOUSE_CURSOR}", [[260, 382.5, 0, 0],[495, 457.5, 0, 0]]], position: 188609, duration: 1291, easing: "easeOutQuad" },
                { id: "eid850", tween: [ "motion", "${_MOUSE_CURSOR}", [[495, 457.5, 0, 0],[599, 423.5, 0, 0]]], position: 190861, duration: 839, easing: "easeOutQuad" },
                { id: "eid724", tween: [ "style", "${__004_025ITEM1checked}", "display", 'block', { fromValue: 'none'}], position: 134442, duration: 0, easing: "easeOutQuad" },
                { id: "eid770", tween: [ "style", "${__004_025ITEM1checked}", "display", 'none', { fromValue: 'block'}], position: 154700, duration: 0 },
                { id: "eid118", tween: [ "style", "${__004_005JETTISONentered2}", "opacity", '1', { fromValue: '0'}], position: 51491, duration: 1067, easing: "easeOutQuad" },
                { id: "eid702", tween: [ "style", "${__004_013JAMMERnot_installed_entered2}", "left", '15px', { fromValue: '15px'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid571", tween: [ "style", "${__004_020M3Ppulldown}", "display", 'block', { fromValue: 'none'}], position: 113754, duration: 0 },
                { id: "eid573", tween: [ "style", "${__004_020M3Ppulldown}", "display", 'none', { fromValue: 'block'}], position: 114300, duration: 0 },
                { id: "eid777", tween: [ "style", "${__004_020M3Ppulldown}", "display", 'none', { fromValue: 'none'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${__004_002SERIALentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${__004_002SERIALentered2}", "display", 'block', { fromValue: 'none'}], position: 27002, duration: 0, easing: "easeOutQuad" },
                { id: "eid787", tween: [ "style", "${__004_002SERIALentered2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid794", tween: [ "style", "${__004_030CLOSEdown}", "display", 'block', { fromValue: 'none'}], position: 157300, duration: 0, easing: "easeOutQuad" },
                { id: "eid802", tween: [ "style", "${__004_030CLOSEdown}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${__004_014LAUNCHERpulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid462", tween: [ "style", "${__004_014LAUNCHERpulldown2}", "display", 'none', { fromValue: 'none'}], position: 97477, duration: 0, easing: "easeOutQuad" },
                { id: "eid482", tween: [ "style", "${__004_014LAUNCHERpulldown2}", "display", 'none', { fromValue: 'none'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid476", tween: [ "style", "${__004_014LAUNCHERpulldown2}", "display", 'block', { fromValue: 'none'}], position: 102146, duration: 0, easing: "easeOutQuad" },
                { id: "eid501", tween: [ "style", "${__004_014LAUNCHERpulldown2}", "display", 'none', { fromValue: 'block'}], position: 102600, duration: 0, easing: "easeOutQuad" },
                { id: "eid781", tween: [ "style", "${__004_014LAUNCHERpulldown2}", "display", 'none', { fromValue: 'none'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid774", tween: [ "style", "${__004_029CLOSEover2}", "display", 'block', { fromValue: 'none'}], position: 156900, duration: 0, easing: "easeOutQuad" },
                { id: "eid775", tween: [ "style", "${__004_029CLOSEover2}", "display", 'none', { fromValue: 'block'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid209", tween: [ "style", "${_answer}", "top", '104px', { fromValue: '104px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid831", tween: [ "style", "${__004_036NAMEentered}", "display", 'block', { fromValue: 'none'}], position: 183669, duration: 0, easing: "easeOutQuad" },
                { id: "eid832", tween: [ "style", "${__004_036NAMEentered}", "display", 'block', { fromValue: 'block'}], position: 185000, duration: 0, easing: "easeOutQuad" },
                { id: "eid844", tween: [ "style", "${__004_036NAMEentered}", "display", 'none', { fromValue: 'block'}], position: 190200, duration: 0, easing: "easeOutQuad" },
                { id: "eid427", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 97053, duration: 0, easing: "easeOutBounce" },
                { id: "eid441", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 97153, duration: 0, easing: "easeOutQuad" },
                { id: "eid458", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 97306, duration: 0, easing: "easeOutQuad" },
                { id: "eid461", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 97403, duration: 0, easing: "easeOutQuad" },
                { id: "eid474", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid478", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 102146, duration: 0, easing: "easeOutQuad" },
                { id: "eid489", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 102356, duration: 0, easing: "easeOutQuad" },
                { id: "eid495", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 102450, duration: 0, easing: "easeOutQuad" },
                { id: "eid511", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 108000, duration: 0 },
                { id: "eid520", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 108103, duration: 0 },
                { id: "eid514", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 108313, duration: 0 },
                { id: "eid517", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 108407, duration: 0 },
                { id: "eid555", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 113651, duration: 0 },
                { id: "eid556", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 113754, duration: 0 },
                { id: "eid557", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 113951, duration: 0 },
                { id: "eid558", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 114045, duration: 0 },
                { id: "eid726", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 120600, duration: 0, easing: "easeOutQuad" },
                { id: "eid727", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 120867, duration: 0, easing: "easeOutQuad" },
                { id: "eid717", tween: [ "style", "${_hitarea}", "display", 'block', { fromValue: 'none'}], position: 134245, duration: 0, easing: "easeOutQuad" },
                { id: "eid720", tween: [ "style", "${_hitarea}", "display", 'none', { fromValue: 'block'}], position: 134300, duration: 0, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 28808, duration: 0, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 39162, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 40909, duration: 0, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 43500, duration: 0, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 45140, duration: 0, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 51353, duration: 0, easing: "easeOutQuad" },
                { id: "eid119", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 52820, duration: 0, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 90336, duration: 0, easing: "easeOutQuad" },
                { id: "eid759", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 148017, duration: 0 },
                { id: "eid830", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 182906, duration: 0, easing: "easeOutQuad" },
                { id: "eid835", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 187673, duration: 0, easing: "easeOutQuad" },
                { id: "eid208", tween: [ "style", "${_answer}", "left", '561px', { fromValue: '561px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid379", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 90300, duration: 0, easing: "easeOutExpo" },
                { id: "eid380", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 90548, duration: 0, easing: "easeOutExpo" },
                { id: "eid386", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 97000, duration: 0 },
                { id: "eid693", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 97500, duration: 0 },
                { id: "eid694", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 101974, duration: 0 },
                { id: "eid695", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 102643, duration: 0 },
                { id: "eid696", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 107963, duration: 0 },
                { id: "eid697", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 108644, duration: 0 },
                { id: "eid698", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 113600, duration: 0 },
                { id: "eid699", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 114300, duration: 0 },
                { id: "eid700", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 120551, duration: 0 },
                { id: "eid701", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 120900, duration: 0 },
                { id: "eid707", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 134200, duration: 0, easing: "easeOutQuad" },
                { id: "eid723", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 134442, duration: 0, easing: "easeOutQuad" },
                { id: "eid91", tween: [ "style", "${_Rectangle2}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 38689, duration: 0, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0.000000'}], position: 39162, duration: 0, easing: "easeOutQuad" },
                { id: "eid801", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 157600, duration: 0, easing: "easeOutQuad" },
                { id: "eid466", tween: [ "style", "${_interaction_hitarea_right}", "top", '213px', { fromValue: '213px'}], position: 97053, duration: 0, easing: "easeOutQuad" },
                { id: "eid465", tween: [ "style", "${_interaction_hitarea_right}", "top", '253px', { fromValue: '213px'}], position: 97306, duration: 0, easing: "easeOutQuad" },
                { id: "eid472", tween: [ "style", "${_interaction_hitarea_right}", "top", '346px', { fromValue: '253px'}], position: 102043, duration: 0, easing: "easeOutQuad" },
                { id: "eid485", tween: [ "style", "${_interaction_hitarea_right}", "top", '346px', { fromValue: '346px'}], position: 102296, duration: 0, easing: "easeOutQuad" },
                { id: "eid488", tween: [ "style", "${_interaction_hitarea_right}", "top", '390px', { fromValue: '346px'}], position: 102356, duration: 0, easing: "easeOutQuad" },
                { id: "eid500", tween: [ "style", "${_interaction_hitarea_right}", "top", '390px', { fromValue: '390px'}], position: 102600, duration: 0, easing: "easeOutQuad" },
                { id: "eid525", tween: [ "style", "${_interaction_hitarea_right}", "top", '374px', { fromValue: '390px'}], position: 108000, duration: 0 },
                { id: "eid534", tween: [ "style", "${_interaction_hitarea_right}", "top", '434px', { fromValue: '374px'}], position: 108313, duration: 0 },
                { id: "eid569", tween: [ "style", "${_interaction_hitarea_right}", "top", '401px', { fromValue: '434px'}], position: 113651, duration: 0 },
                { id: "eid570", tween: [ "style", "${_interaction_hitarea_right}", "top", '418px', { fromValue: '374px'}], position: 113951, duration: 0 },
                { id: "eid676", tween: [ "style", "${_interaction_hitarea_right}", "top", '468px', { fromValue: '418px'}], position: 120600, duration: 0 },
                { id: "eid722", tween: [ "style", "${_interaction_hitarea_right}", "top", '199px', { fromValue: '468px'}], position: 134245, duration: 0, easing: "easeOutQuad" },
                { id: "eid710", tween: [ "style", "${_interaction_hitarea_right}", "top", '468px', { fromValue: '199px'}], position: 134400, duration: 0, easing: "easeOutQuad" },
                { id: "eid842", tween: [ "style", "${__004_037SAVEhighlighted}", "display", 'block', { fromValue: 'none'}], position: 189551, duration: 0, easing: "easeOutQuad" },
                { id: "eid843", tween: [ "style", "${__004_037SAVEhighlighted}", "display", 'none', { fromValue: 'block'}], position: 190200, duration: 0, easing: "easeOutQuad" },
                { id: "eid754", tween: [ "style", "${__004_026ITEM1name}", "opacity", '1', { fromValue: '0'}], position: 142900, duration: 213 },
                { id: "eid748", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_audio}', [] ], ""], position: 10 }            ]
        }
    }
},
"checkAns": {
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
                    rect: ['0px', '0px', '105px', '28px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['10px', '6px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'checkAn',
                    text: 'check answer',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_checkAn}": [
                ["style", "left", '10px'],
                ["style", "top", '6px']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '105px']
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
"interaction_ETF": {
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
                    rect: ['0px', '0px', '197px', '30px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'BG',
                    stroke: [3, 'rgba(255,190,66,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,199,0,0.00)']
                },
                {
                    rect: ['0px', '0px', '203px', '36px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    type: 'rect',
                    id: 'RoundRect',
                    stroke: [3, 'rgb(255, 190, 66)', 'none'],
                    clip: ['rect(0px 203px 36px 75px)'],
                    fill: ['rgba(255,199,0,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'Enter',
                    text: 'ENTER:',
                    align: 'left',
                    rect: ['91px', '8px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'correct_answer',
                    text: '.95',
                    align: 'left',
                    rect: ['161px', '9px', '44px', '15px', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_BG}": [
                ["color", "background-color", 'rgba(255,199,0,0.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-width", '3px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "height", '30px'],
                ["color", "border-color", 'rgba(255,190,66,1.00)'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '203px']
            ],
            "${_correct_answer}": [
                ["style", "top", '9px'],
                ["transform", "scaleY", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '700'],
                ["style", "left", '231px'],
                ["style", "font-size", '16px']
            ],
            "${_Enter}": [
                ["style", "top", '8px'],
                ["transform", "scaleY", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '700'],
                ["style", "left", '161px'],
                ["style", "font-size", '16px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,199,0,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '70px'],
                ["style", "height", '36px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,203,36,75], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '203px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "in": 0,
                "out": 1000
            },
            timeline: [
                { id: "eid283", tween: [ "style", "${_BG}", "left", '0px', { fromValue: '70px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid294", tween: [ "style", "${_BG}", "left", '70px', { fromValue: '0px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid282", tween: [ "style", "${_correct_answer}", "left", '161px', { fromValue: '231px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid292", tween: [ "style", "${_correct_answer}", "left", '231px', { fromValue: '161px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid280", tween: [ "style", "${_Enter}", "left", '91px', { fromValue: '161px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid298", tween: [ "style", "${_Enter}", "left", '161px', { fromValue: '91px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid238", tween: [ "style", "${_Enter}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid299", tween: [ "style", "${_Enter}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid239", tween: [ "style", "${_BG}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid301", tween: [ "style", "${_BG}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid237", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid302", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid240", tween: [ "style", "${_correct_answer}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid300", tween: [ "style", "${_correct_answer}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid281", tween: [ "style", "${_RoundRect}", "left", '0px', { fromValue: '70px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid295", tween: [ "style", "${_RoundRect}", "left", '70px', { fromValue: '0px'}], position: 1000, duration: 1000, easing: "easeOutExpo" }            ]
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
                    rect: ['0px', '0px', '1008px', '572px', 'auto', 'auto'],
                    filter: [0, 0, 1, 0, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'play_icon',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/play_icon.png', '0px', '0px']
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
                    fill: ['rgba(0,0,0,0)', 'images/pause_icon.png', '0px', '0px']
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
"interaction_hitarea_right": {
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
                    rect: ['0px', '0px', '197px', '30px', 'auto', 'auto'],
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    id: 'BG',
                    stroke: [3, 'rgba(255,190,66,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,199,0,0.00)']
                },
                {
                    type: 'rect',
                    borderRadius: ['10px 10px', '10px 10px', '10px 10px', '10px 10px'],
                    rect: ['0px', '0px', '203px', '36px', 'auto', 'auto'],
                    id: 'RoundRect',
                    stroke: [3, 'rgb(255, 190, 66)', 'none'],
                    clip: ['rect(0px 203px 36px 75px)'],
                    fill: ['rgba(255,199,0,1.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', '700', 'none', 'normal'],
                    type: 'text',
                    id: 'Enter',
                    text: 'CLICK HERE',
                    align: 'left',
                    rect: ['91px', '8px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,199,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,203,36,75], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '36px'],
                ["style", "border-style", 'none'],
                ["style", "left", '170px'],
                ["style", "width", '203px']
            ],
            "${_BG}": [
                ["color", "background-color", 'rgba(255,199,0,0.00)'],
                ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-width", '3px'],
                ["style", "width", '297px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '70px'],
                ["style", "height", '30px'],
                ["color", "border-color", 'rgba(255,190,66,1.00)'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid']
            ],
            "${_Enter}": [
                ["style", "top", '8px'],
                ["transform", "scaleY", '1'],
                ["style", "font-weight", '700'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '258px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '203px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "in": 0,
                "out": 1000
            },
            timeline: [
                { id: "eid281", tween: [ "style", "${_RoundRect}", "left", '110px', { fromValue: '170px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid295", tween: [ "style", "${_RoundRect}", "left", '170px', { fromValue: '110px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid237", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid302", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid280", tween: [ "style", "${_Enter}", "left", '198px', { fromValue: '258px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid298", tween: [ "style", "${_Enter}", "left", '258px', { fromValue: '198px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid238", tween: [ "style", "${_Enter}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid299", tween: [ "style", "${_Enter}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid283", tween: [ "style", "${_BG}", "left", '10px', { fromValue: '70px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid294", tween: [ "style", "${_BG}", "left", '70px', { fromValue: '10px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid239", tween: [ "style", "${_BG}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid301", tween: [ "style", "${_BG}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" }            ]
        }
    }
},
"hitarea": {
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
                    rect: ['0px', '0px', '158px', '36px', 'auto', 'auto'],
                    stroke: [3, 'rgb(255, 190, 66)', 'none'],
                    id: 'Rectangle3',
                    opacity: 0,
                    type: 'rect',
                    fill: ['rgba(255,199,0,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '158px']
            ],
            "${_Rectangle3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
