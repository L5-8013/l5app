(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fac996e"],{"028a":function(t,e,n){"use strict";n("dae6")},"0414":function(t,e,n){"use strict";n("bd4d")},5660:function(t,e,n){"use strict";n("7a30")},7675:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wallpaper-page"},[n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-add"},on:{click:t.handleCreate}},[t._v("新增壁纸")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"ID",align:"center",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[t._v(t._s(i.id))])]}}])}),n("el-table-column",{attrs:{label:"标题名称","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[t._v(t._s(i.attributes.name))])]}}])}),n("el-table-column",{attrs:{label:"壁纸","min-width":"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.attributes.url,fit:"contain"}})]}}])}),n("el-table-column",{attrs:{label:"是否可见","min-width":"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("el-tag",{attrs:{type:i.attributes.isshow?"success":"danger"}},[t._v(t._s(i.attributes.isshow?"可见":"不可见"))])]}}])}),n("el-table-column",{attrs:{label:"创建时间",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("span",[t._v(t._s(t._f("parseTime")(i.createdAt,"{y}-{m}-{d} {h}:{i}")))])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,a=e.$index;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(a)}}},[t._v(" 修改 ")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(i,a)}}},[t._v(" 删除 ")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getListData}}),n("el-dialog",{attrs:{title:t.dialogStatus?"新增壁纸":"修改壁纸",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",staticStyle:{"margin-left":"50px"},attrs:{model:t.temp,"label-position":"left","label-width":"70px"}},[n("el-form-item",{attrs:{label:"标题名称"}},[n("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),n("el-form-item",{attrs:{label:"上传壁纸"}},[t.dialogStatus?n("upload-img",{ref:"uploadImg",attrs:{limit:1},on:{getBack:t.getBack,handleRemove:t.handleRemove}}):n("el-image",{staticStyle:{width:"148px",height:"148px"},attrs:{src:t.temp.url,fit:"contain"}})],1),n("el-form-item",{attrs:{label:"是否显示"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.temp.isshow,callback:function(e){t.$set(t.temp,"isshow",e)},expression:"temp.isshow"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" 取消 ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogStatus?t.createData():t.updateData()}}},[t._v(" "+t._s(t.dialogStatus?"提交":"修改")+" ")])],1)],1)],1)},a=[],o=(n("d81d"),n("b0c0"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-img-box"},[n("el-upload",{ref:"uploadFile",attrs:{action:t.qiniuDomain,"list-type":"picture-card","show-file-list":!0,multiple:!0,"before-upload":t.beforeUpload,"on-remove":t.onRemove,"http-request":t.upLoadToQiniu}},[n("i",{staticClass:"el-icon-plus"})])],1)}),s=[],r=n("5530"),u=(n("a9e3"),n("99af"),n("f744"));n("b775"),n("d3b7"),n("25f0"),n("a15b"),n("b64b");function l(t,e){return new Promise((function(n,i){var a="jsonp_"+Date.now()+"_"+Math.random().toString().substr(2),o=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"),s=document.createElement("script");s.src=t+(-1===t.indexOf("?")?"?":"&")+o+"&callback="+a,document.body.appendChild(s),window[a]=function(t){document.body.removeChild(s),delete window[a],n(t)},s.onerror=function(){i(new Error("JSONP request failed"))}}))}var c="http://vwx.niufive.top/kl/qiniu/token",d={Bucket:"fiveauto",qiniuDomain:"http://fiveauto-l5.top/",path:"app_niu"};function m(){return l("".concat(c,"/jsonp"),{name:d.Bucket,domain:d.qiniuDomain})}var p=n("2f62"),f={name:"UploadImg",props:{code:{type:[String,Number],default:1},types:{type:[String,Number],default:1},limit:{type:Number,default:1e4}},data:function(){return{filePercent:null,numAll:0,loading:null}},computed:Object(r["a"])({},Object(p["d"])({requestQueue:function(t){return t.qiniu.requestQueue},qiniuDomain:function(t){return t.qiniu.qiniuDomain},qiniuToken:function(t){return t.qiniu.qiniuToken}})),created:function(){this.getQiniuToken()},methods:Object(r["a"])(Object(r["a"])({},Object(p["c"])({UPDATE_QUEUE:"qiniu/UPDATE_QUEUE",CLEAR_QUEUE:"qiniu/CLEAR_QUEUE",SET_QINIUDOMAIN:"qiniu/SET_QINIUDOMAIN",SET_QINIUTOKEN:"qiniu/SET_QINIUTOKEN"})),{},{upLoadToQiniu:function(t){var e=this;this.loading||(this.loading=this.$loading({lock:!0,text:"上传中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}));var n=t.file;t.status="uploading",this.qiniuUpload(n,this.qiniuToken,(function(i){t.status="done",t.cover=t.content;var a={url:i,code:e.code,uid:n.uid};e.$emit("getBack",a),e.hideLoading()}),(function(n){t.status="failed",e.hideLoading(),e.$message({message:"上传图片失败!".concat(n),type:"error"})}))},hideLoading:function(){this.numAll--,this.numAll<=0&&(this.loading.close(),this.loading=null)},beforeUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type||"image/webp"===t.type,n=t.size/1024/1024<10;return e||this.$message({showClose:!0,message:"上传图片只能是JPG/PNG/webp 格式!",type:"error"}),n||this.$message({showClose:!0,message:"上传头像图片大小不能超过 10MB!",type:"error"}),this.numAll++,e&&n},onRemove:function(t){this.$emit("handleRemove",t.uid)},qiniuUpload:function(t,e,n,i){var a=this,o=this,s={useCdnDomain:!0},r={fname:"",params:{},mimeType:null},l=t.name.split("."),c=l[l.length-1],m="".concat((new Date).getTime(),".").concat(c),p=u["upload"](t,"".concat(d.path,"/").concat(m),e,r,s);p.subscribe({next:function(t){o.filePercent=parseInt(t.total.percent),o.filePercent},error:function(t){i&&i()},complete:function(t){n&&n(a.qiniuDomain+t.key)}})},getQiniuToken:function(){var t=this;if(!this.qiniuToken&&!this.requestQueue.length){var e=this.$loading({lock:!0,text:"获取七牛云token",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n=m();this.UPDATE_QUEUE(n),n.then((function(n){var i=n,a=i.code,o=i.data;200==a&&(t.SET_QINIUDOMAIN(o.domain),t.SET_QINIUTOKEN(o.token)),e.close(),t.CLEAR_QUEUE()})).catch((function(n){e.close(),t.CLEAR_QUEUE()}))}},clearFiles:function(){this.$refs.uploadFile.clearFiles()}})},g=f,h=(n("0414"),n("2877")),b=Object(h["a"])(g,o,s,!1,null,null,null),v=b.exports,w=n("c7eb"),y=n("1da1"),k=(n("7db0"),n("429a"));n("5c96");function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"createdAt",n=arguments.length>2?arguments[2]:void 0;return new Promise(function(){var i=Object(y["a"])(Object(w["a"])().mark((function i(a,o){var s,r;return Object(w["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=new k["a"].Query(t),s.descending(e),i.next=4,s.count();case 4:r=i.sent,n&&(s.limit(n.limit),s.skip((n.page-1)*n.limit)),s.find().then((function(t){a({todo:t,count:r})}),(function(t){o(t)}));case 7:case"end":return i.stop()}}),i)})));return function(t,e){return i.apply(this,arguments)}}())}function _(t,e,n){return new Promise((function(i,a){var o=k["a"].Object.createWithoutData(e,t),s=Object.keys(n);s.map((function(t){o.set(t,n[t])})),o.save().then((function(t){i(t)}),(function(t){a(t)}))}))}function S(t,e){return new Promise((function(n,i){var a=k["a"].Object.extend(t),o=[];e.map((function(t,e){var n=new a,i=Object.keys(t);i.map((function(e){n.set(e,t[e])})),o.push(n)})),k["a"].Object.saveAll(o).then((function(t){n(t)}),(function(t){i(t)}))}))}function I(t,e){return new Promise((function(n,i){var a=k["a"].Object.createWithoutData(t,e);a.destroy().then((function(t){n(t)}),(function(t){i(t)}))}))}n("ed08");var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},T=[];Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var O=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function U(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function $(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function j(t,e,n){var i=$(),a=t-i,o=20,s=0;e="undefined"===typeof e?500:e;var r=function t(){s+=o;var r=Math.easeInOutQuad(s,i,a,e);U(r),s<e?O(t):n&&"function"===typeof n&&n()};r()}var D={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&j(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&j(0,800)}}},q=D,A=(n("5660"),Object(h["a"])(q,E,T,!1,null,"6af373ef",null)),N=A.exports,Q={components:{UploadImg:v,Pagination:N},data:function(){return{avFormName:"wallpaper",activeId:null,tableKey:0,list:[],total:0,listLoading:!0,listQuery:{page:1,limit:10},dialogStatus:!0,dialogFormVisible:!1,wxImgArrObj:[],temp:{name:"",url:"",isshow:!0}}},created:function(){this.getListData()},mounted:function(){},methods:{getListData:function(){var t=this;this.list=[],this.listLoading=!0,x(this.avFormName,"createdAt",this.listQuery).then((function(e){t.total=e.count,e.todo.map((function(e,n){t.list.push(e)})),setTimeout((function(){t.listLoading=!1}),1500)}))},createData:function(){var t=this;if(0!=this.wxImgArrObj.length){var e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n=[],i=this.temp,a=i.name,o=i.isshow;this.wxImgArrObj.map((function(t,e){var i={name:a,isshow:o,url:t.url};n.push(i)})),S(this.avFormName,n).then((function(n){e.close(),t.$refs.uploadImg.clearFiles(),t.resetTemp(),t.dialogFormVisible=!1,t.$message({message:"提交成功",type:"success"}),t.getListData()})).catch((function(n){e.close(),t.$message.error(n.rawMessage)}))}else this.$message.error("请上传需要展示壁纸")},handleUpdate:function(t){var e=this.list[t];this.activeId=e.id;var n=e.attributes,i=n.name,a=n.url,o=n.isshow;this.temp={name:i,url:a,isshow:o},this.dialogFormVisible=!0,this.dialogStatus=!1},updateData:function(){var t=this,e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});_(this.activeId,this.avFormName,this.temp).then((function(n){e.close(),t.resetTemp(),t.dialogFormVisible=!1,t.$message({message:"修改成功",type:"success"}),t.getListData()})).catch((function(n){e.close(),t.$message.error(n.rawMessage)}))},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该壁纸, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){I(e.avFormName,t.id).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.getListData()})).catch((function(t){e.$message({type:"error",message:t})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleCreate:function(){this.resetTemp(),this.dialogStatus=!0,this.dialogFormVisible=!0},resetTemp:function(){this.activeId=null,this.temp={name:"",url:"",isshow:!0},this.wxImgArrObj=[]},getBack:function(t){this.wxImgArrObj.push(t)},handleRemove:function(t){var e=this.getWxImgIndex(t);this.wxImgArrObj.splice(e,1)},getWxImgIndex:function(t){var e=0;return this.wxImgArrObj.map((function(n,i){n.uid==t&&(e=i)})),e}}},C=Q,F=(n("028a"),Object(h["a"])(C,i,a,!1,null,null,null));e["default"]=F.exports},"7a30":function(t,e,n){},bd4d:function(t,e,n){},dae6:function(t,e,n){}}]);