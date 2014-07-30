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
                id: '_004_007DEFLECTORpulldown2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_007DEFLECTORpulldown.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_008DEFLECTORnot_installed_highlighted2',
                display: 'block',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_008DEFLECTORnot_installed_highlighted.png",'0%','0%','100%','auto']
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
                id: '_004_012JAMMERnot_installed_highlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_012JAMMERnot_installed_highlighted.png",'0%','0%','100%','auto']
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
                id: '_004_015LAUNCHERnot_installed_highlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_015LAUNCHERnot_installed_highlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_016LAUNCHERnot_installed_entered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_016LAUNCHERnot_installed_entered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_017ROCKETpulldown2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_017ROCKETpulldown.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_018ROCKETright_highlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_018ROCKETright_highlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_019ROCKETright_entered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_019ROCKETright_entered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_020M3Ppulldown2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_020M3Ppulldown.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_021M3Pleft_highlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_021M3Pleft_highlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_022M3Pleft_entered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_022M3Pleft_entered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_023ITEMhighlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_023ITEMhighlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_024CUSTOMwindow2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_024CUSTOMwindow.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_025ITEM1checked2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_025ITEM1checked.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_026ITEM1name2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_026ITEM1name.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_027ITEM1drag2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_027ITEM1drag.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_028OKhighlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_028OKhighlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_029CLOSEover2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_029CLOSEover.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_029OACupdated2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_029OACupdated.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_030CLOSEdown2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_030CLOSEdown.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_031DEPtab2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_031DEPtab.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_031FILEhighlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_031FILEhighlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_032MENU2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_032MENU.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_033ACFGhighlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_033ACFGhighlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_033ACFGmenu2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_033ACFGmenu.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_034EXPORThighlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_034EXPORThighlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_035EXPORTwindow2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','67.7%','84.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_035EXPORTwindow.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_036NAMEentered2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_036NAMEentered.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_037SAVEhighlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_037SAVEhighlighted.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_038EXPORTpopup2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_038EXPORTpopup.png",'0%','0%','100%','auto']
            },
            {
                id: '_004_039OKhighlighted2',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"004_039OKhighlighted.png",'0%','0%','100%','auto']
            },
            {
                id: 'interaction_instruct',
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
                id: 'audio',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                source: ['media/L2%20IPAC%20OH58_004.mp3'],
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
                id: 'interaction_instruct',
                symbolName: 'interation_instruct',
                autoPlay: {

                }
            },
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
            "${_answer}": [
                ["style", "opacity", '1'],
                ["style", "left", '561px'],
                ["style", "font-size", '12px'],
                ["style", "top", '104px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '15px'],
                ["style", "width", '48px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'text']
            ],
            "${__004_031FILEhighlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_038EXPORTpopup2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_008DEFLECTORnot_installed_highlighted2}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ]
            ],
            "${__004_011JAMMERpulldown2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_018ROCKETright_highlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_037SAVEhighlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_034EXPORThighlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_interaction_instruct}": [
                ["style", "display", 'none']
            ],
            "${__004_012JAMMERnot_installed_highlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_play_pause}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1']
            ],
            "${__004_023ITEMhighlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_021M3Pleft_highlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_039OKhighlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_006ACCONFIGrollover2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_016LAUNCHERnot_installed_entered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_002SERIALentered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_003WEIGHTentered2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${__004_024CUSTOMwindow2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_033ACFGmenu2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_028OKhighlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_OH-58_Splash}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${__004_019ROCKETright_entered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_025ITEM1checked2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle}": [
                ["style", "top", '267px'],
                ["style", "opacity", '1'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '16px']
            ],
            "${__004_033ACFGhighlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_029OACupdated2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
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
            "${__004_017ROCKETpulldown2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_006ACCONFIGtab2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_026ITEM1name2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_029CLOSEover2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_030CLOSEdown2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_015LAUNCHERnot_installed_highlighted2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_027ITEM1drag2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_036NAMEentered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_014LAUNCHERpulldown2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_032MENU2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_022M3Pleft_entered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_013JAMMERnot_installed_entered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_031DEPtab2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_035EXPORTwindow2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ],
            "${__004_010ETFentered2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${__004_007DEFLECTORpulldown2}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "opacity", '0']
            ],
            "${__004_020M3Ppulldown2}": [
                ["style", "top", '0px'],
                ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 141233,
            autoPlay: false,
            labels: {
                "Interaction_1": 90936
            },
            timeline: [
                { id: "eid1", tween: [ "style", "${__004_039OKhighlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${__004_031FILEhighlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid208", tween: [ "style", "${_answer}", "left", '561px', { fromValue: '561px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${__004_008DEFLECTORnot_installed_highlighted2}", "opacity", '0', { fromValue: '0'}], position: 83430, duration: 0, easing: "easeOutQuad" },
                { id: "eid147", tween: [ "style", "${__004_008DEFLECTORnot_installed_highlighted2}", "opacity", '1', { fromValue: '0'}], position: 83750, duration: 0, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "style", "${__004_034EXPORThighlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${__004_006ACCONFIGrollover2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${__004_006ACCONFIGrollover2}", "display", 'block', { fromValue: 'none'}], position: 73250, duration: 0, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "style", "${__004_006ACCONFIGrollover2}", "display", 'none', { fromValue: 'block'}], position: 73700, duration: 0, easing: "easeOutQuad" },
                { id: "eid4", tween: [ "style", "${__004_036NAMEentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${__004_029CLOSEover2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${__004_022M3Pleft_entered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid156", tween: [ "style", "${_OH-58_Splash}", "background-position", [0,0], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 85408, duration: 0, easing: "easeOutQuad" },
                { id: "eid28", tween: [ "style", "${__004_015LAUNCHERnot_installed_highlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid379", tween: [ "style", "${_play_pause}", "display", 'none', { fromValue: 'block'}], position: 90336, duration: 0, easing: "easeOutExpo" },
                { id: "eid380", tween: [ "style", "${_play_pause}", "display", 'block', { fromValue: 'none'}], position: 91051, duration: 0, easing: "easeOutExpo" },
                { id: "eid33", tween: [ "style", "${__004_010ETFentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid212", tween: [ "style", "${__004_010ETFentered2}", "display", 'block', { fromValue: 'none'}], position: 91051, duration: 0, easing: "easeOutQuad" },
                { id: "eid15", tween: [ "style", "${__004_028OKhighlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid7", tween: [ "style", "${__004_033ACFGmenu2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${__004_030CLOSEdown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid268", tween: [ "style", "${_interaction_instruct}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid269", tween: [ "style", "${_interaction_instruct}", "display", 'block', { fromValue: 'none'}], position: 90336, duration: 0, easing: "easeOutQuad" },
                { id: "eid271", tween: [ "style", "${_interaction_instruct}", "display", 'none', { fromValue: 'block'}], position: 91051, duration: 0, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "style", "${_answer}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_answer}", "display", 'block', { fromValue: 'none'}], position: 90336, duration: 0, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "style", "${_answer}", "display", 'none', { fromValue: 'block'}], position: 91051, duration: 0, easing: "easeOutQuad" },
                { id: "eid193", tween: [ "style", "${_answer}", "display", 'block', { fromValue: 'none'}], position: 141233, duration: 0, easing: "easeOutQuad" },
                { id: "eid22", tween: [ "style", "${__004_021M3Pleft_highlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${__004_025ITEM1checked2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${__004_027ITEM1drag2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${__004_020M3Ppulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${__004_037SAVEhighlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${__004_003WEIGHTentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${__004_003WEIGHTentered2}", "display", 'block', { fromValue: 'none'}], position: 40402, duration: 0, easing: "easeOutQuad" },
                { id: "eid5", tween: [ "style", "${__004_035EXPORTwindow2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 28308, duration: 500, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${__004_038EXPORTpopup2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${__004_011JAMMERpulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${__004_007DEFLECTORpulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${__004_007DEFLECTORpulldown2}", "display", 'block', { fromValue: 'none'}], position: 82500, duration: 0, easing: "easeOutQuad" },
                { id: "eid134", tween: [ "style", "${__004_007DEFLECTORpulldown2}", "display", 'block', { fromValue: 'block'}], position: 83011, duration: 0, easing: "easeOutQuad" },
                { id: "eid149", tween: [ "style", "${__004_007DEFLECTORpulldown2}", "display", 'none', { fromValue: 'block'}], position: 84475, duration: 0, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${__004_004WEIGHTentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${__004_004WEIGHTentered2}", "display", 'block', { fromValue: 'none'}], position: 44026, duration: 0, easing: "easeOutQuad" },
                { id: "eid105", tween: [ "style", "${__004_004WEIGHTentered2}", "display", 'block', { fromValue: 'block'}], position: 44924, duration: 0, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "style", "${__004_009DEFLECTORnot_installed_entered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${__004_009DEFLECTORnot_installed_entered2}", "display", 'block', { fromValue: 'none'}], position: 84475, duration: 0, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${__004_008DEFLECTORnot_installed_highlighted2}", "display", 'none', { fromValue: 'block'}], position: 84475, duration: 0, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${__004_002SERIALentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${__004_002SERIALentered2}", "display", 'block', { fromValue: 'none'}], position: 27002, duration: 0, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${__004_005JETTISONentered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${__004_005JETTISONentered2}", "display", 'block', { fromValue: 'none'}], position: 51491, duration: 0, easing: "easeOutQuad" },
                { id: "eid115", tween: [ "style", "${__004_005JETTISONentered2}", "display", 'block', { fromValue: 'block'}], position: 52558, duration: 0, easing: "easeOutQuad" },
                { id: "eid31", tween: [ "style", "${__004_012JAMMERnot_installed_highlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${__004_024CUSTOMwindow2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${__004_032MENU2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${__004_023ITEMhighlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${__004_006ACCONFIGtab2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${__004_006ACCONFIGtab2}", "display", 'block', { fromValue: 'none'}], position: 73700, duration: 0, easing: "easeOutQuad" },
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
                { id: "eid26", tween: [ "style", "${__004_017ROCKETpulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${__004_007DEFLECTORpulldown2}", "opacity", '1', { fromValue: '0'}], position: 82500, duration: 511, easing: "easeOutQuad" },
                { id: "eid29", tween: [ "style", "${__004_014LAUNCHERpulldown2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${__004_001OACwindow3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${__004_033ACFGhighlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "style", "${__004_026ITEM1name2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${__004_031DEPtab2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid118", tween: [ "style", "${__004_005JETTISONentered2}", "opacity", '1', { fromValue: '0'}], position: 51491, duration: 1067, easing: "easeOutQuad" },
                { id: "eid209", tween: [ "style", "${_answer}", "top", '104px', { fromValue: '104px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid25", tween: [ "style", "${__004_018ROCKETright_highlighted2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${__004_029OACupdated2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 27000, duration: 0, easing: "easeOutQuad" },
                { id: "eid74", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 28808, duration: 0, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 39162, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 40909, duration: 0, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 43500, duration: 0, easing: "easeOutQuad" },
                { id: "eid108", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 45140, duration: 0, easing: "easeOutQuad" },
                { id: "eid112", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 51353, duration: 0, easing: "easeOutQuad" },
                { id: "eid119", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'block', { fromValue: 'none'}], position: 52820, duration: 0, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_MOUSE_CURSOR}", "display", 'none', { fromValue: 'block'}], position: 90336, duration: 0, easing: "easeOutQuad" },
                { id: "eid107", tween: [ "style", "${__004_004WEIGHTentered2}", "opacity", '1', { fromValue: '0'}], position: 44026, duration: 898, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${__004_003WEIGHTentered2}", "opacity", '1', { fromValue: '0'}], position: 40402, duration: 848, easing: "easeOutQuad" },
                { id: "eid91", tween: [ "style", "${_Rectangle2}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 38689, duration: 0, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0.000000'}], position: 39162, duration: 0, easing: "easeOutQuad" },
                { id: "eid24", tween: [ "style", "${__004_019ROCKETright_entered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${__004_016LAUNCHERnot_installed_entered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${__004_013JAMMERnot_installed_entered2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid44", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_audio}', [] ], ""], position: 0 },
                { id: "eid201", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_audio}', [] ], ""], position: 90336.082110179 },
                { id: "eid303", trigger: [ function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_audio}', [] ], ""], position: 91050.852616103 }            ]
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
                    rect: ['0px', '0px', '105px', '28px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    type: 'text',
                    rect: ['10px', '6px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'checkAn',
                    text: 'check answer',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 14, 'rgba(0,0,0,1)', '400', 'none', 'normal']
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
"interation_instruct": {
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
                    type: 'text',
                    rect: ['91px', '8px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Enter',
                    text: 'ENTER:',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', '700', 'none', 'normal']
                },
                {
                    type: 'text',
                    rect: ['161px', '9px', '44px', '15px', 'auto', 'auto'],
                    id: 'correct_answer',
                    text: '.95',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(0,0,0,1)', '700', 'none', 'normal']
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
                ["style", "left", '70px'],
                ["style", "height", '30px'],
                ["color", "border-color", 'rgba(255,190,66,1.00)'],
                ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '203px']
            ],
            "${_correct_answer}": [
                ["style", "top", '9px'],
                ["transform", "scaleY", '1'],
                ["style", "font-weight", '700'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '231px'],
                ["style", "font-size", '16px']
            ],
            "${_Enter}": [
                ["style", "top", '8px'],
                ["transform", "scaleY", '1'],
                ["style", "font-weight", '700'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '161px'],
                ["style", "font-size", '16px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(255,199,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,203,36,75], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '36px'],
                ["style", "border-style", 'none'],
                ["style", "left", '70px'],
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
                { id: "eid281", tween: [ "style", "${_RoundRect}", "left", '0px', { fromValue: '70px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid295", tween: [ "style", "${_RoundRect}", "left", '70px', { fromValue: '0px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid237", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid302", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid240", tween: [ "style", "${_correct_answer}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid300", tween: [ "style", "${_correct_answer}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid239", tween: [ "style", "${_BG}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
                { id: "eid301", tween: [ "style", "${_BG}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeOutExpo" }            ]
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
            "${_pause_icon}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
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
                { id: "eid355", tween: [ "style", "${_play_icon}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid365", tween: [ "style", "${_play_icon}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1000, easing: "easeOutExpo" },
                { id: "eid357", tween: [ "style", "${_play_icon}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0 },
                { id: "eid370", tween: [ "style", "${_pause_icon}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0, easing: "easeOutExpo" },
                { id: "eid369", tween: [ "transform", "${_pause_icon}", "scaleY", '1.5', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
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
                    type: 'image',
                    filter: [0, 0, 1, 0, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                    id: 'play_icon',
                    rect: ['0px', '0px', '1008px', '572px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/play_icon.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ],
            "${_play_icon}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["subproperty", "filter.saturate", '0']
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
            "${symbolSelector}": [
                ["style", "height", '572px'],
                ["style", "width", '1008px']
            ],
            "${_pause_icon}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
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
