webpackJsonp([0],{568:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sysName:"冷王生物制品系统",collapsed:!1,sysUserName:"",sysUserAvatar:""}},methods:{handleopen:function(){},handleclose:function(){},handleselect:function(t,e){},logout:function(){var t=this;this.$confirm("确认退出吗?","提示",{}).then(function(){localStorage.removeItem("user"),t.$router.push("/login"),location.reload()}).catch(function(){})},collapse:function(){this.collapsed=!this.collapsed}},mounted:function(){var t=localStorage.getItem("user");t&&(t=JSON.parse(t),this.sysUserName=t.name||"",this.sysUserAvatar=t.avatar||"")}}},664:function(t,e,n){var a=n(665);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(452)("2ef1cdcd",a,!0)},665:function(t,e,n){e=t.exports=n(451)(!0),e.push([t.i,".el-popover{z-index:9999999!important}.with-auto{width:auto!important}.scroll-hidden{overflow:scroll!important;overflow-x:hidden!important;margin-bottom:-17px;margin-right:-18px}a{color:#606266;text-decoration:none}","",{version:3,sources:["C:/Users/凡人/vue/src/views/Layout/Home.vue"],names:[],mappings:"AACA,YAAY,yBAA4B,CACvC,AACD,WAAW,oBAAuB,CACjC,AACD,eAAgB,0BAA2B,4BAA8B,AAAC,oBAAqB,kBAAoB,CAClH,AACD,EAAE,cAAc,oBAAqB,CACpC",file:"Home.vue",sourcesContent:["\n.el-popover{z-index: 9999999 !important;\n}\n.with-auto{width: auto !important;\n}\n.scroll-hidden{ overflow: scroll!important;overflow-x: hidden !important; margin-bottom: -17px;margin-right: -18px;\n}\na{color:#606266;text-decoration:none;\n}\n"],sourceRoot:""}])},666:function(t,e,n){var a=n(667);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(452)("c6fdb202",a,!0)},667:function(t,e,n){e=t.exports=n(451)(!0),e.push([t.i,".container[data-v-f0a4bd52]{position:absolute;top:0;bottom:0;width:100%}.container .header[data-v-f0a4bd52]{height:60px;line-height:60px;background:#20a0ff;color:#fff}.container .header .userinfo[data-v-f0a4bd52]{text-align:right;padding-right:35px;float:right}.container .header .userinfo .userinfo-inner[data-v-f0a4bd52]{cursor:pointer;color:#fff}.container .header .userinfo .userinfo-inner img[data-v-f0a4bd52]{width:40px;height:40px;border-radius:20px;margin:10px 0 10px 10px;float:right}.container .header .logo[data-v-f0a4bd52]{height:60px;font-size:22px;text-align:center;box-shadow:0 0 3px #87ceeb}.container .header .logo img[data-v-f0a4bd52]{width:40px;float:left;margin:10px 10px 10px 18px}.container .header .logo .txt[data-v-f0a4bd52]{color:#fff}.container .header .logo-width[data-v-f0a4bd52]{width:230px}.container .header .logo-collapse-width[data-v-f0a4bd52]{width:60px}.container .header .tools[data-v-f0a4bd52]{padding:0 23px;width:14px;height:60px;line-height:60px;cursor:pointer}.container .main[data-v-f0a4bd52]{display:flex;position:absolute;top:60px;bottom:0;overflow:hidden}.container .main aside[data-v-f0a4bd52]{flex:0 0 230px;float:left;width:230px}.container .main aside .el-menu[data-v-f0a4bd52]{height:100%}.container .main aside .collapsed .item[data-v-f0a4bd52]{position:relative}.container .main aside .collapsed .submenu[data-v-f0a4bd52]{position:absolute;top:0;left:60px;z-index:99999;height:auto;display:none}.container .main .menu-collapsed[data-v-f0a4bd52]{flex:0 0 60px;width:60px}.container .main .menu-expanded[data-v-f0a4bd52]{flex:0 0 230px;width:230px}.container .main .content-container[data-v-f0a4bd52]{flex:1;overflow-y:scroll;padding:20px}.container .main .content-container .breadcrumb-container .title[data-v-f0a4bd52]{float:left;color:#475669}.container .main .content-container .breadcrumb-container .breadcrumb-inner[data-v-f0a4bd52]{float:right}.container .main .content-container .breadcrumb-container .fl[data-v-f0a4bd52]{float:left}.container .main .content-container .content-wrapper[data-v-f0a4bd52]{background-color:#fff;box-sizing:border-box}","",{version:3,sources:["C:/Users/凡人/vue/src/views/Layout/Home.vue"],names:[],mappings:"AACA,4BACE,kBAAmB,AACnB,MAAS,AACT,SAAY,AACZ,UAAY,CACb,AACD,oCACI,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,UAAY,CACf,AACD,8CACM,iBAAkB,AAClB,mBAAoB,AACpB,WAAa,CAClB,AACD,8DACQ,eAAgB,AAChB,UAAY,CACnB,AACD,kEACU,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,wBAA2B,AAC3B,WAAa,CACtB,AACD,0CACM,YAAa,AACb,eAAgB,AAChB,kBAAmB,AACnB,0BAA4B,CACjC,AACD,8CACQ,WAAY,AACZ,WAAY,AACZ,0BAA4B,CACnC,AACD,+CACQ,UAAY,CACnB,AACD,gDACM,WAAa,CAClB,AACD,yDACM,UAAY,CACjB,AACD,2CACM,eAAkB,AAClB,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACrB,AACD,kCACI,aAAc,AACd,kBAAmB,AACnB,SAAU,AACV,SAAY,AACZ,eAAiB,CACpB,AACD,wCACM,eAAgB,AAChB,WAAY,AACZ,WAAa,CAClB,AACD,iDACQ,WAAa,CACpB,AACD,yDACQ,iBAAmB,CAC1B,AACD,4DACQ,kBAAmB,AACnB,MAAS,AACT,UAAW,AACX,cAAe,AACf,YAAa,AACb,YAAc,CACrB,AACD,kDACM,cAAe,AACf,UAAY,CACjB,AACD,iDACM,eAAgB,AAChB,WAAa,CAClB,AACD,qDACM,OAAQ,AACR,kBAAmB,AACnB,YAAc,CACnB,AACD,kFACQ,WAAY,AACZ,aAAe,CACtB,AACD,6FACQ,WAAa,CACpB,AACD,+EACQ,UAAY,CACnB,AACD,sEACQ,sBAAuB,AACvB,qBAAuB,CAC9B",file:"Home.vue",sourcesContent:["\n.container[data-v-f0a4bd52] {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  width: 100%;\n}\n.container .header[data-v-f0a4bd52] {\n    height: 60px;\n    line-height: 60px;\n    background: #20a0ff;\n    color: #fff;\n}\n.container .header .userinfo[data-v-f0a4bd52] {\n      text-align: right;\n      padding-right: 35px;\n      float: right;\n}\n.container .header .userinfo .userinfo-inner[data-v-f0a4bd52] {\n        cursor: pointer;\n        color: #fff;\n}\n.container .header .userinfo .userinfo-inner img[data-v-f0a4bd52] {\n          width: 40px;\n          height: 40px;\n          border-radius: 20px;\n          margin: 10px 0px 10px 10px;\n          float: right;\n}\n.container .header .logo[data-v-f0a4bd52] {\n      height: 60px;\n      font-size: 22px;\n      text-align: center;\n      box-shadow: 0 0 3px #87CEEB;\n}\n.container .header .logo img[data-v-f0a4bd52] {\n        width: 40px;\n        float: left;\n        margin: 10px 10px 10px 18px;\n}\n.container .header .logo .txt[data-v-f0a4bd52] {\n        color: #fff;\n}\n.container .header .logo-width[data-v-f0a4bd52] {\n      width: 230px;\n}\n.container .header .logo-collapse-width[data-v-f0a4bd52] {\n      width: 60px;\n}\n.container .header .tools[data-v-f0a4bd52] {\n      padding: 0px 23px;\n      width: 14px;\n      height: 60px;\n      line-height: 60px;\n      cursor: pointer;\n}\n.container .main[data-v-f0a4bd52] {\n    display: flex;\n    position: absolute;\n    top: 60px;\n    bottom: 0px;\n    overflow: hidden;\n}\n.container .main aside[data-v-f0a4bd52] {\n      flex: 0 0 230px;\n      float: left;\n      width: 230px;\n}\n.container .main aside .el-menu[data-v-f0a4bd52] {\n        height: 100%;\n}\n.container .main aside .collapsed .item[data-v-f0a4bd52] {\n        position: relative;\n}\n.container .main aside .collapsed .submenu[data-v-f0a4bd52] {\n        position: absolute;\n        top: 0px;\n        left: 60px;\n        z-index: 99999;\n        height: auto;\n        display: none;\n}\n.container .main .menu-collapsed[data-v-f0a4bd52] {\n      flex: 0 0 60px;\n      width: 60px;\n}\n.container .main .menu-expanded[data-v-f0a4bd52] {\n      flex: 0 0 230px;\n      width: 230px;\n}\n.container .main .content-container[data-v-f0a4bd52] {\n      flex: 1;\n      overflow-y: scroll;\n      padding: 20px;\n}\n.container .main .content-container .breadcrumb-container .title[data-v-f0a4bd52] {\n        float: left;\n        color: #475669;\n}\n.container .main .content-container .breadcrumb-container .breadcrumb-inner[data-v-f0a4bd52] {\n        float: right;\n}\n.container .main .content-container .breadcrumb-container .fl[data-v-f0a4bd52] {\n        float: left;\n}\n.container .main .content-container .content-wrapper[data-v-f0a4bd52] {\n        background-color: #fff;\n        box-sizing: border-box;\n}\n"],sourceRoot:""}])},668:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:t.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[t._v("\n\t\t\t"+t._s(t.collapsed?"LW":t.sysName)+"\n\t\t")]),t._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"tools",on:{click:function(e){e.preventDefault(),t.collapse(e)}}},[n("i",{staticClass:"fa fa-align-justify"})])]),t._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:this.sysUserAvatar}}),t._v(" "+t._s(t.sysUserName))]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{attrs:{to:"/Comment"}},[t._v("我的消息")])],1),t._v(" "),n("el-dropdown-item",[n("router-link",{attrs:{to:"/Comment"}},[t._v("设置")])],1),t._v(" "),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){t.logout(e)}}},[n("i",{staticClass:"fa fa-power-off"},[t._v(" 退出登录")])])],1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",{staticClass:"el-scrollbar",class:t.collapsed?"menu-collapsed":"menu-expanded"},[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo with-auto el-scrollbar__wrap scroll-hidden",attrs:{"default-active":t.$route.path,"background-color":"#545c64","text-color":"#fff","active-text-color":"#39aef5","unique-opened":"",router:""},on:{open:t.handleopen,close:t.handleclose,select:t.handleselect}},[t._l(t.$router.options.routes,function(e,a){return e.hidden?t._e():[e.leaf?t._e():n("el-submenu",{attrs:{index:a+""}},[n("template",{slot:"title"},[n("i",{class:e.iconCls}),t._v(t._s(e.name))]),t._v(" "),t._l(e.children,function(e){return e.hidden?t._e():n("el-menu-item",{key:e.path,staticStyle:{"padding-left":"60px"},attrs:{index:e.path}},[t._v(t._s(e.name))])})],2),t._v(" "),e.leaf&&e.children.length>0?n("el-menu-item",{attrs:{index:e.children[0].path}},[n("i",{class:e.iconCls}),t._v(t._s(e.children[0].name))]):t._e()]})],2),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed el-scrollbar__wrap scroll-hidden",staticStyle:{background:"#545c64",color:"#fff"}},t._l(t.$router.options.routes,function(e,a){return e.hidden?t._e():n("li",{staticClass:"el-submenu item"},[e.leaf?[n("li",{staticClass:"el-submenu",staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"el-submenu__title el-menu-item",class:t.$route.path==e.children[0].path?"is-active":"",staticStyle:{"padding-left":"20px",height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(n){t.$router.push(e.children[0].path)}}},[n("i",{class:e.iconCls})])])]:[n("el-popover",{attrs:{placement:"right",width:"200",trigger:"hover"}},[n("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+a,staticStyle:{"border-right":"none"}},t._l(e.children,function(e){return e.hidden?t._e():n("li",{key:e.path,staticClass:"el-menu-item",class:t.$route.path==e.path?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(n){t.$router.push(e.path)}}},[t._v(t._s(e.name))])})),t._v(" "),n("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px"},attrs:{slot:"reference"},slot:"reference"},[n("i",{class:e.iconCls})])])]],2)}))],1),t._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("strong",{staticClass:"title breadcrumb-inner"},[t._v(t._s(t.$route.name))]),t._v(" "),n("el-breadcrumb",{staticClass:"fl",attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.$route.matched,function(e){return n("el-breadcrumb-item",{key:e.path},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")])}))],1),t._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},o=[],i={render:a,staticRenderFns:o};e.a=i},80:function(t,e,n){"use strict";function a(t){n(664),n(666)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(568),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var l=n(668),s=n(180),A=a,d=s(i.a,l.a,!1,A,"data-v-f0a4bd52",null);e.default=d.exports}});
//# sourceMappingURL=0.7fb80e9e3c80706e8563.js.map