(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48b7be34"],{"0684":function(t,e,a){},"1c27":function(t,e,a){"use strict";a("64ae")},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("6b75");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=a("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||o(t)||Object(r["a"])(t)||s()}},"2bac":function(t,e,a){"use strict";a("4ca5")},"34bd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attribute-setting-wrapper"},[a("el-tabs",{model:{value:t.actTab,callback:function(e){t.actTab=e},expression:"actTab"}},[a("el-tab-pane",{attrs:{label:"圖形配置",name:"first"}},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("widget屬性")]),a("div",{staticClass:"attr-item"},[a("div",{staticClass:"attr-label"},[t._v("name")]),a("div",{staticClass:"attr-content"},[a("el-input",{on:{change:t.setWidgetValue},model:{value:t.widget.$property["_name"],callback:function(e){t.$set(t.widget.$property,"_name",e)},expression:"widget.$property['_name']"}})],1),a("div",{staticClass:"attr-unit"})]),a("div",{staticClass:"attr-item"},[a("div",{staticClass:"attr-label"},[t._v("backgroundColor")]),a("div",{staticClass:"attr-content"},[a("el-color-picker",{attrs:{"show-alpha":"",size:"mini"},on:{change:t.setWidgetValue},model:{value:t.widget.$property["_backgroundColor"],callback:function(e){t.$set(t.widget.$property,"_backgroundColor",e)},expression:"widget.$property['_backgroundColor']"}})],1),a("div",{staticClass:"attr-unit"})]),a("div",{staticClass:"view-mode-container"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("圖形屬性")]),a("div",{staticClass:"attr-item"},[a("div",{staticClass:"attr-label"},[t._v("fontWeight")]),a("div",{staticClass:"attr-content"},[a("el-select",{attrs:{placeholder:""},on:{change:t.setWidgetValue},model:{value:t.widget.$property["fontWeight"],callback:function(e){t.$set(t.widget.$property,"fontWeight",e)},expression:"widget.$property['fontWeight']"}},[a("el-option",{attrs:{label:"lighter",value:"lighter"}}),a("el-option",{attrs:{label:"normal",value:"normal"}}),a("el-option",{attrs:{label:"bold",value:"bold"}}),a("el-option",{attrs:{label:"bolder",value:"bolder"}})],1)],1),a("div",{staticClass:"attr-unit"})]),a("div",{staticClass:"attr-item"},[a("div",{staticClass:"attr-label"},[t._v("color")]),a("div",{staticClass:"attr-content"},[a("el-color-picker",{attrs:{"show-alpha":"",size:"mini"},on:{change:t.setWidgetValue},model:{value:t.widget.$property["fontColor"],callback:function(e){t.$set(t.widget.$property,"fontColor",e)},expression:"widget.$property['fontColor']"}})],1),a("div",{staticClass:"attr-unit"})]),a("div",{staticClass:"attr-item"},[a("div",{staticClass:"attr-label"},[t._v("fontSize")]),a("div",{staticClass:"attr-content"},[a("el-input-number",{on:{change:t.setWidgetValue},model:{value:t.widget.$property["fontSize"],callback:function(e){t.$set(t.widget.$property,"fontSize",e)},expression:"widget.$property['fontSize']"}})],1),a("div",{staticClass:"attr-unit"},[t._v("px")])])],1),a("div",{staticClass:"view-mode-container"})],1),a("el-tab-pane",{attrs:{label:"資料來源",name:"second"}},[a("el-form",{attrs:{"label-width":"120px"}},[a("datasource-selection",{attrs:{"data-source":t.widget.$dataSource,config:{isMutipleSelect:!1,dataBasicType:0,denyType:[],showTabs:["address","compute"]}},on:{update:t.updateDatasource}})],1)],1)],1)],1)},n=[],o=a("ed08"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-selection"},[a("el-select",{attrs:{placeholder:""},model:{value:t.thisDatasource.type,callback:function(e){t.$set(t.thisDatasource,"type",e)},expression:"thisDatasource.type"}},[a("el-option",{attrs:{label:"靜態資料",value:"static"}}),a("el-option",{attrs:{label:"動態資料",value:"dynamic"}}),a("el-option",{attrs:{label:"歷史資料",value:"history"}})],1),a("el-button",{on:{click:t.openDataSelectionModal}},[t._v("數據源")]),a("hr"),a("div",{staticClass:"json-editor-wrapper"},[a("MonacoEditor",{staticClass:"json-editor",attrs:{width:"100%",height:"100%",language:"json",code:t.test.b,options:{readOnly:!0}},on:{mounted:t.onMounted,codeChange:t.onCodeChange}}),t.editor.isLoading?a("div",{staticClass:"json-editor__loading"}):t._e()],1),a("Modal",{attrs:{"is-show":t.datasourceSelection.isModalShow,width:1500},on:{close:t.handleCancel},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("資料來源")]},proxy:!0},{key:"content",fn:function(){},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("Add")]),a("el-button",{on:{click:t.handleCancel}},[t._v("Cancel")])],1)]},proxy:!0}])})],1)},s=[],c=(a("4160"),a("a434"),a("159b"),a("2909")),l=a("cb15"),d=a("dba0"),u=a.n(d),f={name:"DatasourceSelection",components:{Modal:l["a"],MonacoEditor:u.a},props:{dataSource:{type:Object,default:function(){return{}}},config:{type:Object,default:function(){return{isMutipleSelect:!0,dataBasicType:2,denyType:[],showTabs:["address","compute"]}}}},data:function(){return{defaultAddressChecked:[],defaultArithmeticChecked:[],selected:null,datasourceSelection:{isModalShow:!1},test:{a:0,b:"[]",c:0,d:0},editor:{isLoading:!0,instance:null}}},computed:{thisDatasource:{get:function(){return this.dataSource},set:function(t){this.$emit("update",Object(o["d"])(t))}}},mounted:function(){var t=this;console.log("mount"),this.editor.isLoading=!0,this.$nextTick((function(){setTimeout((function(){t.editor.isLoading=!1,t.editor.instance.layout()}),2e3)}))},methods:{onMounted:function(t){this.editor.instance=t},onCodeChange:function(t){console.log(t.getValue())},handleSelectionChange:function(t){this.$emit("update",Object(o["d"])(t))},onDrop:function(t){this.thisDatasource=this.applyDrag(Object(c["a"])(this.thisDatasource),t)},applyDrag:function(t,e){var a=e.removedIndex,i=e.addedIndex,n=e.payload;if(null===a&&null===i)return t;var o=Object(c["a"])(t),r=n;return null!==a&&(r=o.splice(a,1)[0]),null!==i&&o.splice(i,0,r),o},handleAdd:function(){this.handleSelectionChange(this.selected),this.datasourceSelection.isModalShow=!1},handleCancel:function(){this.datasourceSelection.isModalShow=!1},openDataSelectionModal:function(){this.datasourceSelection.selectedDatasource=[];var t=[],e=[];this.dataSource.forEach((function(a){a.hasOwnProperty("tag_type")&&"arithmetic"===a.tag_type?e.push(a.id):t.push(a.id)})),this.defaultAddressChecked=t,this.defaultArithmeticChecked=e,this.datasourceSelection.isModalShow=!0},changeDatasource:function(t){this.selected=[t]}}},h=f,p=(a("1c27"),a("2877")),g=Object(p["a"])(h,r,s,!1,null,"4f3f0f83",null),m=g.exports,b={name:"ItemLamp",components:{DatasourceSelection:m},props:{widget:{type:Object,default:function(){return{}}}},data:function(){return{actTab:"first"}},mounted:function(){},methods:{setWidgetValue:function(t){this.$emit("save",Object(o["d"])(this.widget))},updateDatasource:function(t){this.$set(this.widget,"$dataSource",t),this.$emit("save",Object(o["d"])(this.widget))}}},v=b,w=(a("e309"),Object(p["a"])(v,i,n,!1,null,"e2a9cf18",null));e["default"]=w.exports},"3e05":function(t,e){t.exports={load(t="https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min",e){if(window.monaco)return void e();const a={paths:{vs:t+"/vs"}},i=a.paths.vs+"/loader.js",n=()=>{if(window.LOADER_PENDING&&window.require.config(a),window.require(["vs/editor/editor.main"],()=>{e()}),window.LOADER_PENDING){window.LOADER_PENDING=!1;const t=window.LOADER_CALLBACKS;if(t&&t.length){let e=t.shift();while(e)e.fn.call(e.window),e=t.shift()}}};if(window.LOADER_PENDING)window.LOADER_CALLBACKS=window.LOADER_CALLBACKS||[],window.LOADER_CALLBACKS.push({window:this,fn:n});else if("undefined"===typeof window.require){const t=window.document.createElement("script");t.type="text/javascript",t.src=i,t.addEventListener("load",n),window.document.body.appendChild(t),window.LOADER_PENDING=!0}else n()}}},"4ca5":function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),o="["+n+"]",r=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},5902:function(t,e,a){"use strict";a.r(e);var i=a("c642"),n=a("d8a8");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"64ae":function(t,e,a){},"9a47":function(t,e,a){},a378:function(t,e,a){"use strict";a("9a47")},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),o=a("94ca"),r=a("6eeb"),s=a("5135"),c=a("c6b6"),l=a("7156"),d=a("c04e"),u=a("d039"),f=a("7c73"),h=a("241c").f,p=a("06cf").f,g=a("9bf2").f,m=a("58a8").trim,b="Number",v=n[b],w=v.prototype,y=c(f(w))==b,C=function(t){var e,a,i,n,o,r,s,c,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(o=l.slice(2),r=o.length,s=0;s<r;s++)if(c=o.charCodeAt(s),c<48||c>n)return NaN;return parseInt(o,i)}return+l};if(o(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var S,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(y?u((function(){w.valueOf.call(a)})):c(a)!=b)?l(new v(C(e)),a,_):C(e)},E=i?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;E.length>N;N++)s(v,S=E[N])&&!s(_,S)&&g(_,S,p(v,S));_.prototype=w,w.constructor=_,r(n,b,_)}},c642:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.style})},n=[]},cb15:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade"}},[t.isShow?a("div",{staticClass:"modal-background modal-ap-info"},[a("div",{directives:[{name:"draggable",rawName:"v-draggable:dragable",arg:"dragable"}],staticClass:"modal ",style:{width:t.width+"px"}},[t.isLoading?a("div",{staticClass:"modal-loading"},[a("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"}},[a("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[a("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),a("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),a("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[a("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),a("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),a("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[a("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),a("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])]):t._e(),a("div",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"el-icon-close"})]),a("div",{staticClass:"modal-header",attrs:{id:"dragable"}},[t._t("header")],2),a("div",{staticClass:"modal-content"},[t._t("content")],2),a("div",{staticClass:"modal-buttons"},[t._t("footer")],2)])]):t._e()])],1)},n=[],o=(a("a9e3"),{name:"Modal",props:{width:{type:Number,default:400},isShow:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},data:function(){return{}}}),r=o,s=(a("2bac"),a("a378"),a("2877")),c=Object(s["a"])(r,i,n,!1,null,"82581eca",null);e["a"]=c.exports},d8a8:function(t,e,a){"use strict";a.r(e);var i=a("e860"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},dba0:function(t,e,a){var i=a("5902");t.exports=i},e309:function(t,e,a){"use strict";a("0684")},e860:function(t,e,a){a("4160"),a("c975"),a("a9e3"),a("d3b7"),a("25f0"),a("159b");var i=a("f7fe"),n=a("3e05");t.exports={props:{width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},code:{type:String,default:"// code \n"},srcPath:{type:String},language:{type:String,default:"javascript"},theme:{type:String,default:"vs-dark"},options:{type:Object,default:function(){}},highlighted:{type:Array,default:function(){return[{number:0,class:""}]}},changeThrottle:{type:Number,default:0}},mounted:function(){this.fetchEditor()},destroyed:function(){this.destroyMonaco()},computed:{style:function(){var t=this.width,e=this.height,a=-1!==t.toString().indexOf("%")?t:"".concat(t,"px"),i=-1!==e.toString().indexOf("%")?e:"".concat(e,"px");return{width:a,height:i}},editorOptions:function(){return Object.assign({},this.defaults,this.options,{value:this.code,language:this.language,theme:this.theme})}},data:function(){return{defaults:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!1,glyphMargin:!0}}},watch:{highlighted:{handler:function(t){this.highlightLines(t)},deep:!0}},methods:{highlightLines:function(t){var e=this;this.editor&&t.forEach((function(t){var a=t.class,i=e.$el.querySelector(".".concat(a));i&&i.classList.remove(a);var n=parseInt(t.number);if(!(!e.editor&&n<1||isNaN(n))){var o=e.$el.querySelector('.view-lines [linenumber="'.concat(n,'"]'));o&&o.classList.add(a)}}))},editorHasLoaded:function(t,e){var a=this;this.editor=t,this.monaco=e,this.editor.onDidChangeModelContent((function(e){return a.codeChangeHandler(t,e)})),this.$emit("mounted",t)},codeChangeHandler:function(t){this.codeChangeEmitter||(this.codeChangeEmitter=i((function(t){this.$emit("codeChange",t)}),this.changeThrottle)),this.codeChangeEmitter(t)},fetchEditor:function(){n.load(this.srcPath,this.createMonaco)},createMonaco:function(){this.editor=window.monaco.editor.create(this.$el,this.editorOptions),this.editorHasLoaded(this.editor,window.monaco)},destroyMonaco:function(){"undefined"!==typeof this.editor&&this.editor.dispose()}}}}}]);