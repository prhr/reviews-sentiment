(function(a){function e(e){for(var n,d,i=e[0],l=e[1],s=e[2],m=0,u=[];m<i.length;m++)d=i[m],Object.prototype.hasOwnProperty.call(o,d)&&o[d]&&u.push(o[d][0]),o[d]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(a[n]=l[n]);c&&c(e);while(u.length)u.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var a,e=0;e<r.length;e++){for(var t=r[e],n=!0,i=1;i<t.length;i++){var l=t[i];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),a=d(d.s=t[0]))}return a}var n={},o={app:0},r=[];function d(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=a,d.c=n,d.d=function(a,e,t){d.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},d.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},d.t=function(a,e){if(1&e&&(a=d(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)d.d(t,n,function(e){return a[e]}.bind(null,n));return t},d.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return d.d(e,"a",e),e},d.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},d.p="/reviews-sentiment/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=l;r.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"034f":function(a,e,t){"use strict";var n=t("8a23"),o=t.n(n);o.a},"56d7":function(a,e,t){"use strict";t.r(e);var n=t("2b0e"),o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("Demo")},r=[],d=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",[t("v-content",[t("v-container",[t("v-layout",{attrs:{"text-center":"",wrap:""}},[t("v-flex",{attrs:{xs12:""}},[t("h1",{staticClass:"title1"},[a._v(" Amazon Reviews Demo ")]),t("p",{staticClass:"subheading font-weight-regular"},[a._v(" Data Analytics project, Coppola, Palazzi, Vivace - January 2020 ")])]),t("v-tabs",{attrs:{grow:!0,right:"right","align-with-title":"","background-color":"transparent"}},[t("v-tab",{staticStyle:{"font-size":"1.2rem"},on:{click:function(e){a.toggledexploration=!a.toggledexploration,a.toggledlda=!1,a.toggledsent=!1}}},[a._v(" EXPLORATION")]),t("v-tab",{staticStyle:{"font-size":"1.2rem"},on:{click:function(e){a.toggledlda=!a.toggledlda,a.toggledsent=!1,a.toggledexploration=!1}}},[a._v(" LDA ")]),t("v-tab",{staticStyle:{"font-size":"1.2rem"},on:{click:function(e){a.toggledsent=!a.toggledsent,a.toggledlda=!1,a.toggledexploration=!1}}},[a._v(" SENTIMENT ANALYSIS ")])],1),a.toggledexploration?t("v-flex",{attrs:{lg12:"",xs12:""}},[t("br"),t("br"),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"4",sm:"4"}},[t("v-select",{attrs:{items:a.plots,label:"Select plot to show",solo:""},model:{value:a.selectedPlot,callback:function(e){a.selectedPlot=e},expression:"selectedPlot"}})],1)],1),t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"12"}},[t("h3"),t("br"),a._v(" "),t("h3",[a._v(" Verified VS Unverified average score ")]),0==a.selectedPlot?t("apexchart",{attrs:{width:"100%",height:"460px",options:a.chartOptions,series:a.series,type:"bar"},on:{dataPointSelection:a.clickedPlot}}):a._e(),t("br"),a._v(" "),t("h3",[a._v(" Review count per rating for the product "+a._s(this.chartOptions.xaxis.categories[a.selectedProduct])+" ")]),t("apexchart",{attrs:{type:"bar",height:"250",options:a.reviewCountPlot,series:a.count[a.selectedProduct]}})],1)],1)],1):a._e(),a.toggledsent?t("v-flex",{attrs:{lg12:"",xs12:""}},[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"6",sm:"6"}},[t("br"),a._v(" Write a custom review to see the evaluated sentiment: "),t("v-text-field",{attrs:{label:"Custom Review",outlined:"",clearable:"",counter:"",hint:"English only!"},on:{change:a.compute},model:{value:a.formText,callback:function(e){a.formText=e},expression:"formText"}})],1)],1),t("v-row",{attrs:{justify:"center"}},[a.errormsg?t("center",[t("p",{staticClass:"red"},[a._v(" "+a._s(a.errormsg)+" "),t("br")]),a._v(" Did you check the backend is running correctly? ")]):t("center",[a._v(" "+a._s((100*a.value.toFixed(5)).toFixed(2))+"% ")])],1),t("br"),t("v-btn",{on:{click:a.compute}},[a._v("compute ")])],1):a._e(),a.toggledlda?t("v-flex",{attrs:{xs12:""}},[t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{dense:""}},a._l(a.lda,(function(e){return t("v-col",{key:e.nam,attrs:{cols:"4"}},[t("v-card",{key:e,staticClass:"mx-auto",attrs:{"max-width":"344"}},[t("v-img",{attrs:{src:e.code+".jpg",height:"200px"}}),t("v-card-title",[a._v(" "+a._s(e.name)+" ")]),t("v-card-subtitle",[a._v(" "+a._s(e.description)+" ")]),t("v-card-actions",[t("v-btn",{attrs:{href:"lda_"+e.code+".html",target:"_blank",text:""}},[a._v(" pyLDAvis"),t("v-icon",{attrs:{right:"",dark:""}},[a._v("mdi-open-in-new")])],1)],1)],1)],1)})),1)],1)],1):a._e()],1)],1)],1)],1)},i=[],l={name:"Demo",methods:{clickedPlot:function(a,e,t){console.log("Selected product:",this.chartOptions.xaxis.categories[t.dataPointIndex]),this.selectedProduct=t.dataPointIndex},compute:function(){this.errormsg=null;let a=this;this.$axios.get("http://localhost:5000/",{params:{text:this.formText}}).then((function(e){a.value=e.data.positive})).catch((function(e){a.errormsg=e+" on "+a.apiEndpoint}))}},watch:{formText:function(a){this.test="A"+a}},data:()=>({apiEndpoint:"http://localhost:5000/",errormsg:null,formText:"",test:"aa",toggledlda:!1,toggledsent:!1,value:0,toggledexploration:!0,selectedPlot:0,selectedProduct:0,plots:[{value:0,text:"Verified VS Unverified on top products"}],reviewCountPlot:{dataLabels:{enabled:!0},chart:{type:"bar",height:350,stacked:!0,stackType:"100%"},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},xaxis:{categories:["Verified","Unverified"]},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left",offsetX:40}},chartOptions:{dataLabels:{enabled:!1},yaxis:{decimalsInFloat:1},chart:{},xaxis:{decimalsInFloat:1,categories:["B005NF5NTK","B0092KJ9BU","B00AANQLRI","B00BT8L2MW","B00D856NOG","B00G7UY3EG","B00IGISUTG","B00M51DDT2","B00M6QODH2","B00MQSMDYU","B00MXWFUQC","B00P7N0320","B00QN1T6NM","B00UCZGS6S","B00UH3L82Y","B00VH88CJ0","B00X5RV14Y","B014EB532U","B018JW3EOY","B019PV2I3G"]}},count:[[{data:[47,5],name:1},{data:[32,2],name:2},{data:[79,5],name:3},{data:[231,9],name:4},{data:[1189,35],name:5}],[{data:[64,8],name:1},{data:[72,9],name:2},{data:[90,17],name:3},{data:[155,28],name:4},{data:[580,41],name:5}],[{data:[22,3],name:1},{data:[14,1],name:2},{data:[37,4],name:3},{data:[141,2],name:4},{data:[774,25],name:5}],[{data:[35,3],name:1},{data:[31,3],name:2},{data:[35,1],name:3},{data:[93,3],name:4},{data:[800,24],name:5}],[{data:[11,2],name:1},{data:[14,1],name:2},{data:[38,1],name:3},{data:[139,12],name:4},{data:[773,50],name:5}],[{data:[132,11],name:1},{data:[41,0],name:2},{data:[48,1],name:3},{data:[120,11],name:4},{data:[942,71],name:5}],[{data:[40,2],name:1},{data:[26,0],name:2},{data:[36,0],name:3},{data:[103,2],name:4},{data:[892,18],name:5}],[{data:[40,5],name:1},{data:[21,6],name:2},{data:[41,3],name:3},{data:[120,8],name:4},{data:[954,69],name:5}],[{data:[33,7],name:1},{data:[24,7],name:2},{data:[38,5],name:3},{data:[89,26],name:4},{data:[592,156],name:5}],[{data:[39,2],name:1},{data:[19,3],name:2},{data:[41,2],name:3},{data:[134,10],name:4},{data:[1006,84],name:5}],[{data:[97,7],name:1},{data:[70,3],name:2},{data:[83,2],name:3},{data:[148,14],name:4},{data:[484,70],name:5}],[{data:[24,3],name:1},{data:[19,0],name:2},{data:[41,1],name:3},{data:[154,13],name:4},{data:[1109,149],name:5}],[{data:[62,4],name:1},{data:[46,2],name:2},{data:[67,6],name:3},{data:[162,22],name:4},{data:[754,102],name:5}],[{data:[75,8],name:1},{data:[46,5],name:2},{data:[70,3],name:3},{data:[161,8],name:4},{data:[609,23],name:5}],[{data:[152,6],name:1},{data:[81,2],name:2},{data:[121,4],name:3},{data:[137,10],name:4},{data:[467,26],name:5}],[{data:[25,2],name:1},{data:[20,1],name:2},{data:[29,4],name:3},{data:[169,8],name:4},{data:[1355,69],name:5}],[{data:[14,5],name:1},{data:[11,1],name:2},{data:[31,3],name:3},{data:[120,18],name:4},{data:[1133,177],name:5}],[{data:[80,4],name:1},{data:[45,1],name:2},{data:[60,0],name:3},{data:[121,5],name:4},{data:[668,17],name:5}],[{data:[23,3],name:1},{data:[18,0],name:2},{data:[41,1],name:3},{data:[156,12],name:4},{data:[1111,141],name:5}],[{data:[37,5],name:1},{data:[39,3],name:2},{data:[36,0],name:3},{data:[102,4],name:4},{data:[1216,66],name:5}]],series:[{name:"verified",data:[4.573510773130545,4.160249739854319,4.65080971659919,4.601609657947686,4.691282051282052,4.324240062353858,4.62351868732908,4.63860544217687,4.524484536082475,4.653753026634383,3.9659863945578233,4.711210096510765,4.374885426214482,4.231009365244537,3.7160751565762005,4.757822277847309,4.792971734148205,4.285420944558521,4.715344699777613,4.693006993006993]},{name:"unverified",data:[4.196428571428571,3.825242718446602,4.285714285714286,4.235294117647059,4.621212121212121,4.3936170212765955,4.545454545454546,4.428571428571429,4.577114427860696,4.693069306930693,4.427083333333333,4.837349397590361,4.588235294117647,3.702127659574468,4,4.678571428571429,4.769607843137255,4.111111111111111,4.834394904458598,4.576923076923077]},{name:"all",data:[4.560587515299877,4.12781954887218,4.638318670576735,4.589494163424124,4.686839577329491,4.328976034858388,4.621983914209116,4.623520126282557,4.535312180143296,4.656716417910448,4.011247443762781,4.725049570389953,4.398533007334963,4.2063492063492065,3.7296222664015906,4.7538644470868014,4.789821546596166,4.280719280719281,4.727755644090306,4.687002652519894]}],lda:[{name:"TaoTronics Car Phone Mount Holder, Windshield /",description:"Dashboard Universal Car Mobile Phone cradle for iOS / Android Smartphone and More",code:"B00MXWFUQC"},{name:"ArmorSuit MilitaryShield Max Coverage Screen Protector for Apple Watch",description:"42mm (Series 3 / 2 / 1 Compatible) [2 Pack] - Anti-Bubble HD Clear Film",code:"B00UH3L82Y"},{name:"Portable Charger Anker PowerCore 20100mAh",description:"Ultra High Capacity Power Bank with 4.8A Output and PowerIQ Technology.",code:"B00X5RV14Y"},{name:"Anker 24W Dual USB Car Charger",description:"PowerDrive 2 for iPhone X / 8/7 / 6s / Plus, iPad Pro/Air 2 / Mini, Note 5/4, LG, Nexus, HTC, and More",code:"B00VH88CJ0"},{name:"Anker Astro E1 5200mAh Candy bar-Sized Ultra Compact Portable Charger",description:"(External Battery Power Bank) with High-Speed Charging PowerIQ Technology",code:"B018JW3EOY"},{name:"Plantronics Voyager Legend Wireless Bluetooth Headset",description:"Compatible with iPhone, Android, and Other Leading Smartphones - Black",code:"B0092KJ9BU"},{name:"Portable chargers",description:"Aggregated LDA",code:"PORTABLECHARGERS"}],ecosystem:[]})},s=l,c=(t("dd78"),t("2877")),m=t("6544"),u=t.n(m),p=t("7496"),f=t("8336"),g=t("b0af"),h=t("99d9"),v=t("62ad"),b=t("a523"),x=t("a75b"),y=t("0e8f"),P=t("132d"),w=t("adda"),_=t("a722"),B=t("0fd9"),C=t("b974"),S=t("71a3"),A=t("fe57"),V=t("8654"),k=Object(c["a"])(s,d,i,!1,null,null,null),O=k.exports;u()(k,{VApp:p["a"],VBtn:f["a"],VCard:g["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardTitle:h["c"],VCol:v["a"],VContainer:b["a"],VContent:x["a"],VFlex:y["a"],VIcon:P["a"],VImg:w["a"],VLayout:_["a"],VRow:B["a"],VSelect:C["a"],VTab:S["a"],VTabs:A["a"],VTextField:V["a"]});var T={name:"App",components:{Demo:O},data:()=>({})},M=T,D=(t("034f"),Object(c["a"])(M,o,r,!1,null,null,null)),U=D.exports,j=t("f309");n["a"].use(j["a"]);var E=new j["a"]({}),L=t("bc3a"),I=t.n(L),N=t("1321"),H=t.n(N);t("5363"),t("b56c"),t("d244"),t("d5e8");n["a"].config.productionTip=!1,n["a"].prototype.$axios=I.a,n["a"].use(H.a),n["a"].component("apexchart",H.a),new n["a"]({vuetify:E,render:a=>a(U)}).$mount("#app")},"8a23":function(a,e,t){},b56c:function(a,e,t){},dd78:function(a,e,t){"use strict";var n=t("e91c"),o=t.n(n);o.a},e91c:function(a,e,t){}});
//# sourceMappingURL=app.76e7ad85.js.map