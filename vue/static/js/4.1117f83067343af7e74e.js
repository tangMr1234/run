webpackJsonp([4],{126:function(e,t,a){"use strict";function i(e){a(695)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(577),n=a.n(r);for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);var o=a(697),l=a(180),d=i,u=l(n.a,o.a,!1,d,"data-v-3939bd7a",null);t.default=u.exports},464:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNewPage=t.addUser=t.editUser=t.batchRemoveUser=t.removeUser=t.getUserListPage=t.getUserList=t.requestLogin=void 0;var i=a(77),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.requestLogin=function(e){return r.default.post("/login",e).then(function(e){return e.data})},t.getUserList=function(e){return r.default.get("/user/list",{params:e})},t.getUserListPage=function(e){return r.default.get("/user/listpage",{params:e})},t.removeUser=function(e){return r.default.get("/user/remove",{params:e})},t.batchRemoveUser=function(e){return r.default.get("/user/batchremove",{params:e})},t.editUser=function(e){return r.default.get("/user/edit",{params:e})},t.addUser=function(e){return r.default.get("/user/add",{params:e})},t.getNewPage=function(e){return r.default.get("/user/newpage",{params:e})}},466:function(e,t,a){"use strict";function i(e,t){for(var t=t-(e+"").length,a=0;a<t;a++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var r=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t),i="";return null!=a&&(i=a[2]),t=null,a=null,null==i||""==i||"undefined"==i?"":i},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(r,function(t){switch(t.charAt(0)){case"y":return i(e.getFullYear(),t.length);case"M":return i(e.getMonth()+1,t.length);case"d":return i(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return i(e.getHours(),t.length);case"m":return i(e.getMinutes(),t.length);case"s":return i(e.getSeconds(),t.length)}})},parse:function(e,t){var a=t.match(r),i=e.match(/(\d)+/g);if(a.length==i.length){for(var n=new Date(1970,0,1),s=0;s<a.length;s++){var o=parseInt(i[s]);switch(a[s].charAt(0)){case"y":n.setFullYear(o);break;case"M":n.setMonth(o-1);break;case"d":n.setDate(o);break;case"h":n.setHours(o);break;case"m":n.setMinutes(o);break;case"s":n.setSeconds(o)}}return n}return null}}}},473:function(e,t,a){e.exports={default:a(474),__esModule:!0}},474:function(e,t,a){a(475),e.exports=a(33).Object.assign},475:function(e,t,a){var i=a(57);i(i.S+i.F,"Object",{assign:a(476)})},476:function(e,t,a){"use strict";var i=a(181),r=a(477),n=a(478),s=a(183),o=a(182),l=Object.assign;e.exports=!l||a(117)(function(){var e={},t={},a=Symbol(),i="abcdefghijklmnopqrst";return e[a]=7,i.split("").forEach(function(e){t[e]=e}),7!=l({},e)[a]||Object.keys(l({},t)).join("")!=i})?function(e,t){for(var a=s(e),l=arguments.length,d=1,u=r.f,c=n.f;l>d;)for(var m,f=o(arguments[d++]),p=u?i(f).concat(u(f)):i(f),h=p.length,g=0;h>g;)c.call(f,m=p[g++])&&(a[m]=f[m]);return a}:l},477:function(e,t){t.f=Object.getOwnPropertySymbols},478:function(e,t){t.f={}.propertyIsEnumerable},577:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(473),n=i(r),s=a(466),o=i(s),l=a(464);t.default={data:function(){return{data:[],shuttle:[],datePicker:[],isCollapse:!1,currentPage4:1,filters:{name:""},users:[],total:0,page:1,limit:20,listLoading:!1,buttonLoading:!1,sels:[],editFormVisible:!1,shuttleVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{id:0,name:"",sex:-1,age:0,birth:"",addr:""},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},addForm:{name:"",sex:-1,age:0,birth:"",addr:""}}},methods:{formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},handleSizeChange:function(e){this.limit=e,this.getUsers()},handleCurrentChange:function(e){this.page=e,this.getUsers()},getUsers:function(){var e=this,t={page:this.page,name:this.filters.name,limit:this.limit};this.listLoading=!0,(0,l.getUserListPage)(t).then(function(t){e.total=t.data.total,e.users=t.data.users,e.listLoading=!1})},handleDel:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0;var e={id:t.id};(0,l.removeUser)(e).then(function(e){a.listLoading=!1,a.$message({message:"删除成功",type:"success"}),a.getUsers()})}).catch(function(){})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=(0,n.default)({},t)},handleAdd:function(){this.addFormVisible=!0,this.addForm={name:"",sex:-1,age:0,birth:"",addr:""}},handleShuttle:function(e){this.data=function(e){for(var t=[],a=1;a<=15;a++)t.push({key:a,label:"权限 "+a});return t}(),this.shuttle=[1],this.shuttleVisible=e},handleChange:function(e,t,a){console.log(e,t,a)},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.editLoading=!0;var t=(0,n.default)({},e.editForm);t.birth=t.birth&&""!=t.birth?o.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,l.editUser)(t).then(function(t){e.editLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getUsers()})})})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.addLoading=!0;var t=(0,n.default)({},e.addForm);t.birth=t.birth&&""!=t.birth?o.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,l.addUser)(t).then(function(t){e.addLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getUsers()})})})},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){e.listLoading=!0;var a={ids:t};(0,l.batchRemoveUser)(a).then(function(t){e.listLoading=!1,e.$message({message:"删除成功",type:"success"}),e.getUsers()})}).catch(function(){})},export2Excel:function(){var e=this;this.buttonLoading=!0,a.e(22).then(function(){var t=a(514),i=t.export_json_to_excel,r=["序号","IMSI","MSISDN","证件号码","姓名"],n=["name","sex","age","birth","addr"],s=[{name:"qqq",sex:"aaa",age:"sa",birth:"ds",addr:"ww"}];i(r,e.formatJson(n,s),"列表excel"),e.buttonLoading=!1}.bind(null,a)).catch(a.oe)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})}},mounted:function(){this.getUsers(),this.handleShuttle(!1)}}},695:function(e,t,a){var i=a(696);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(452)("23bb2d1e",i,!0)},696:function(e,t,a){t=e.exports=a(451)(!0),t.push([e.i,".transition-box[data-v-3939bd7a]{height:50px;box-sizing:border-box}","",{version:3,sources:["C:/Users/凡人/vue/src/views/nav3/Report.vue"],names:[],mappings:"AACA,iCACI,YAAa,AACb,qBAAuB,CAC1B",file:"Report.vue",sourcesContent:["\n.transition-box[data-v-3939bd7a] {\r\n    height: 50px;\r\n    box-sizing: border-box;\n}\r\n"],sourceRoot:""}])},697:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"单位",size:"medium"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"medium"},model:{value:e.datePicker,callback:function(t){e.datePicker=t},expression:"datePicker"}})],1)]),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.getUsers}},[a("i",{staticClass:"el-icon-search"}),e._v(" 查询")])],1),e._v(" "),a("el-form-item",[a("el-dropdown",{attrs:{trigger:"click"}},[a("el-button",{attrs:{type:"primary",size:"medium",loading:e.buttonLoading}},[e._v("\n\t\t\t\t导出"),a("i",{staticClass:"el-icon-sort-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){e.export2Excel(t)}}},[e._v("EXCEL")]),e._v(" "),a("el-dropdown-item",[e._v("PDF")])],1)],1)],1),e._v(" "),a("el-form-item",[a("el-dropdown",{attrs:{trigger:"click"}},[a("el-button",{attrs:{type:"primary",size:"medium",loading:e.buttonLoading}},[e._v("\n\t\t\t\t打印"),a("i",{staticClass:"el-icon-printer el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("打印模板1")]),e._v(" "),a("el-dropdown-item",[e._v("打印模板2")]),e._v(" "),a("el-dropdown-item",[e._v("打印模板3")]),e._v(" "),a("el-dropdown-item",[e._v("打印模板4")]),e._v(" "),a("el-dropdown-item",[e._v("打印模板5")])],1)],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium"},on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e._v("展开")])],1)],1),e._v(" "),a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isCollapse,expression:"isCollapse"}]},[a("div",{staticClass:"transition-box"},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"批签发",size:"medium"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"编号",size:"medium"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.handleAdd}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 新增")])],1)],1)],1)])])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users,stripe:"","highlight-current-row":""},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"80",formatter:e.formatSex,sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"80",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"birth",label:"日期",width:"150",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"addr",label:"地址","min-width":"180",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"310"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{staticClass:"el-button el-button--default el-button--small",attrs:{to:"/Comment"}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(t){e.handleShuttle(!0)}}},[e._v("设置权限")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:e.batchRemove}},[e._v("批量删除")]),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":e.currentPage4,"page-sizes":[20,50,100],"page-size":e.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[a("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input-number",{attrs:{min:0,max:200},model:{value:e.editForm.age,callback:function(t){e.$set(e.editForm,"age",t)},expression:"editForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.editForm.birth,callback:function(t){e.$set(e.editForm,"birth",t)},expression:"editForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.addr,callback:function(t){e.$set(e.editForm,"addr",t)},expression:"editForm.addr"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"权限设置",visible:e.shuttleVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.shuttleVisible=t}}},[a("el-transfer",{attrs:{data:e.data,titles:["系统权限","已拥有权限"]},on:{change:e.handleChange},model:{value:e.shuttle,callback:function(t){e.shuttle=t},expression:"shuttle"}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.shuttleVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.handleShuttle(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[a("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input-number",{attrs:{min:0,max:200},model:{value:e.addForm.age,callback:function(t){e.$set(e.addForm,"age",t)},expression:"addForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.addForm.birth,callback:function(t){e.$set(e.addForm,"birth",t)},expression:"addForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.addForm.addr,callback:function(t){e.$set(e.addForm,"addr",t)},expression:"addForm.addr"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.addSubmit(t)}}},[e._v("提交")])],1)],1)],1)},r=[],n={render:i,staticRenderFns:r};t.a=n}});
//# sourceMappingURL=4.1117f83067343af7e74e.js.map