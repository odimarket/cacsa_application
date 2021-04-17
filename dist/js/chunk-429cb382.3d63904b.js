(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-429cb382"],{4221:function(t,e,a){"use strict";var i=a("cf28"),r=a.n(i);r.a},8075:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ConsoleHeader"),i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"content-header"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row mb-2"},[i("div",{staticClass:"col-sm-6 text-start"},[i("h1",{staticClass:"m-0 text-dark"},[t._v("Units"),i("sup",[i("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)",title:"Create"},on:{click:function(e){return e.preventDefault(),t.newUnitView(e)}}},[i("i",{staticClass:"mdi mdi-plus-circle"})])])])]),i("div",{staticClass:"col-sm-6"},[i("ol",{staticClass:"breadcrumb float-sm-right"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/console"}},[t._v("Home")])],1),i("li",{staticClass:"breadcrumb-item active"},[t._v("Units")])])])])])]),i("section",{staticClass:"content"},[i("div",{staticClass:"container-fluid"},[!1===t.NewUnitView?i("div",{staticClass:"pb-5"},[t.units.length<1?i("div",{staticClass:"text-start"},[i("b",[t._v("No Units added yet!")])]):i("div",{staticClass:"row no-gutters pb-5"},t._l(t.units,(function(e){return i("div",{key:e.id,staticClass:"col-xl-3 col-sm-6 col-6 h-100"},[i("div",{staticClass:"small-box bg-dark h-100 pt-4"},[i("div",{staticClass:"inner"},[null===e.image?i("div",[i("img",{staticClass:"img-fluid",staticStyle:{width:"8em"},attrs:{src:a("bf05")}})]):i("div",[i("img",{staticClass:"img-fluid",staticStyle:{width:"7em",height:"7em","object-fit":"contain"},attrs:{src:e.image}})]),i("h5",{staticClass:"text-truncate",attrs:{title:e.name}},[t._v(t._s(e.name))])]),i("div",{staticClass:"small-box-footer mb-0 p-2"},[i("a",{staticClass:"text-success mr-2",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.filterUnitDetails(e.id)}}},[t._v("More")]),i("a",{staticClass:"text-light",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.filterUnit(e.id)}}},[t._v("Edit")]),i("a",{staticClass:"p-2 text-danger",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.handleDeleteUnit(e.id)}}},[t._v("Delete")])])])])})),0)]):i("div",[null===t.Unit?i("div",[i("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.handleNewUnit(e)}}},[i("h3",{staticClass:"text-start"},[i("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"},on:{click:t.loadUnitView}},[i("i",{staticClass:"mdi mdi-chevron-left"})]),t._v(" Create a new unit ")]),i("div",{staticClass:"pb-5"},[i("div",{staticClass:"col-xl-6 col-md-12 my-4"},[i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control remove-radius",attrs:{type:"text",placeholder:"Enter name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Pathname(optional)")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pathname,expression:"form.pathname"}],staticClass:"form-control remove-radius",attrs:{type:"text",placeholder:"Enter pathname"},domProps:{value:t.form.pathname},on:{input:function(e){e.target.composing||t.$set(t.form,"pathname",e.target.value)}}})]),i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Slug")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.slug,expression:"form.slug"}],staticClass:"form-control remove-radius",attrs:{type:"text",placeholder:"Enter slug",required:""},domProps:{value:t.form.slug},on:{input:function(e){e.target.composing||t.$set(t.form,"slug",e.target.value)}}})]),i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Description(optional)")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control remove-radius",attrs:{placeholder:"Enter description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})])]),t._m(0)])])]):i("div",[i("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.handleUpdatedUnit(e)}}},[i("h3",{staticClass:"text-start"},[i("a",{staticClass:"text-dark",attrs:{href:"javascript:void(0)"},on:{click:t.loadUnitView}},[i("i",{staticClass:"mdi mdi-chevron-left"})]),t._v(" Update unit ")]),i("div",{staticClass:"pb-5"},[i("div",{staticClass:"col-xl-6 col-md-12 my-4"},[i("div",{staticClass:"form-group text-start"},[i("input",{ref:"image",staticClass:"d-none",attrs:{type:"file",name:"file_holder",id:"profile_image"},on:{change:function(e){return e.preventDefault(),t.changeImage(e)}}}),null===t.Unit.image?i("label",{staticStyle:{cursor:"pointer"},attrs:{for:"profile_image"}},[i("img",{staticClass:"img-fluid",staticStyle:{width:"5em"},attrs:{src:a("bf05")}})]):i("label",{staticStyle:{cursor:"pointer"},attrs:{for:"profile_image"}},[i("img",{staticClass:"img-fluid",staticStyle:{width:"5em"},attrs:{src:t.Unit.image}})])]),i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Unit.name,expression:"Unit.name"}],staticClass:"form-control remove-radius",attrs:{type:"text",placeholder:"Enter name",required:""},domProps:{value:t.Unit.name},on:{input:function(e){e.target.composing||t.$set(t.Unit,"name",e.target.value)}}})]),i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Pathname(optional)")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Unit.pathname,expression:"Unit.pathname"}],staticClass:"form-control remove-radius",attrs:{type:"text",placeholder:"Enter pathname"},domProps:{value:t.Unit.pathname},on:{input:function(e){e.target.composing||t.$set(t.Unit,"pathname",e.target.value)}}})]),i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Slug")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Unit.slug,expression:"Unit.slug"}],staticClass:"form-control remove-radius",attrs:{type:"text",placeholder:"Enter slug",required:""},domProps:{value:t.Unit.slug},on:{input:function(e){e.target.composing||t.$set(t.Unit,"slug",e.target.value)}}})]),i("div",{staticClass:"form-group text-start"},[i("label",{attrs:{for:""}},[t._v("Description(optional)")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Unit.description,expression:"Unit.description"}],staticClass:"form-control remove-radius",attrs:{placeholder:"Enter description"},domProps:{value:t.Unit.description},on:{input:function(e){e.target.composing||t.$set(t.Unit,"description",e.target.value)}}})])]),t._m(1)])])])])])])]),i("ConsoleFooter")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-6 col-md-12 mb-2 text-start"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-save"}),t._v(" Save")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-6 col-md-12 mb-2 text-start"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-save"}),t._v(" Save")])])}],n=(a("4de4"),a("96cf"),a("1da1")),s=a("5530"),o=a("2e673"),c=a("fb8e"),l=a("2f62"),u=a("bc3a"),m=a.n(u),d=a("c5b9"),p={name:"ConsoleUnits",data:function(){return{NewUnitView:!1,Unit:null,form:{name:"",pathname:"",slug:"",description:""}}},computed:Object(l["c"])(["units"]),components:{ConsoleHeader:o["a"],ConsoleFooter:c["a"]},methods:Object(s["a"])({},Object(l["b"])(["fetchUnits","deleteUnit","createUnit","updateUnit"]),{handleNewUnit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.createUnit(t.form);case 2:t.NewUnitView=!1;case 3:case"end":return e.stop()}}),e)})))()},newUnitView:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.NewUnitView=!0,t.Unit=null;case 2:case"end":return e.stop()}}),e)})))()},loadUnitView:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.NewUnitView=!1,t.Unit=null;case 2:case"end":return e.stop()}}),e)})))()},filterUnit:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.Unit=e.units.filter((function(e){return e.id===t})),e.Unit.length>0&&(e.Unit=e.Unit[0],e.NewUnitView=null);case 2:case"end":return a.stop()}}),a)})))()},filterUnitDetails:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("fetchUnitDetails",t);case 2:e.$router.push("/console/executives");case 3:case"end":return a.stop()}}),a)})))()},changeImage:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.image=t.$refs.image.files[0],a=new FormData,a.append("upload_preset","offices"),a.append("tags","unsigned upload, offices"),a.append("file",t.image),e.next=7,m.a.post("https://api.cloudinary.com/v1_1/cacsafpi/upload",a);case 7:if(i=e.sent,null===i.data.secure_url){e.next=16;break}return t.Unit.image=i.data.secure_url,r=t.Unit.image,e.next=13,t.updateUnit({id:t.Unit.id,unit:t.Unit});case 13:if(null===r){e.next=16;break}return e.next=16,d["a"].removeImage({old_image:r});case 16:case"end":return e.stop()}}),e)})))()},handleDeleteUnit:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=e.units.filter((function(e){return e.id===t})),!(i.length>0)){a.next=4;break}return a.next=4,e.deleteUnit(t);case 4:case"end":return a.stop()}}),a)})))()},handleUpdatedUnit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===t.Unit){e.next=3;break}return e.next=3,t.updateUnit({id:t.Unit.id,unit:t.Unit});case 3:case"end":return e.stop()}}),e)})))()}}),created:function(){this.fetchUnits()}},f=p,v=(a("4221"),a("2877")),g=Object(v["a"])(f,i,r,!1,null,"77bebf62",null);e["default"]=g.exports},cf28:function(t,e,a){}}]);
//# sourceMappingURL=chunk-429cb382.3d63904b.js.map