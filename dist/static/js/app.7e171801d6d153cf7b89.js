webpackJsonp([1],[,,function(t,e,i){"use strict";function s(t){return c.a.get(u+t)}function n(t){return s("/movie/"+t+"?start="+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+"&count="+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:20))}function a(t){return s("/movie/subject/"+t)}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s(encodeURI("/movie/search?q="+t+"&start="+e))}i.d(e,"d",function(){return l}),e.a=n,e.c=a,e.b=o;var r=i(32),c=i.n(r),u="https://node-douban-api.herokuapp.com",l={movie:{in_theaters:"in_theaters",coming_soon:"coming_soon"}}},,function(t,e,i){function s(t){i(90)}var n=i(1)(i(52),i(102),s,"data-v-2b2e9546",null);t.exports=n.exports},,,function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n}),i.d(e,"c",function(){return a}),i.d(e,"d",function(){return o}),i.d(e,"f",function(){return r}),i.d(e,"g",function(){return c}),i.d(e,"e",function(){return u});var s="movie/FETCH_MOVIES",n="movie/FETCH_MOVIE_LIST",a="movie/FETCH_MOVIE_BY_ID",o="movie/SET_INFINITE_BUSY",r="movie/CLEAN_MOVIES",c="movie/CLEAN_MOVIE_LIST",u="movie/CLEAN_MOVIE"},,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var s=i(5),n=i(109),a=i(100),o=i.n(a),r=i(98),c=i.n(r),u=i(99),l=i.n(u),v=i(101),m=i.n(v);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",component:o.a,name:"index"},{path:"／movie",component:o.a},{path:"/movie/list",component:l.a,name:"movie-list"},{path:"/movie/subject/:id",component:c.a,name:"movie-detail"},{path:"/movie/search",component:m.a,name:"search-list"},{path:"*",redirect:"/"}]})},function(t,e,i){"use strict";var s=i(5),n=i(111),a=i(60),o=i(59),r=i(58);s.a.use(n.a),e.a=new n.a.Store({state:a.a,mutations:o.a,actions:r.a})},,function(t,e){},function(t,e){},,function(t,e,i){function s(t){i(92)}var n=i(1)(i(50),i(104),s,null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(97),n=i.n(s);e.default={name:"app",components:{VHeader:n.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{query:"",path:"search-movie"}},mounted:function(){("index"===this.$route.path||this.$route.path.indexOf("movie"))&&(this.path="/movie/search")},computed:{},components:{},methods:{search:function(){this.$router.push({path:this.path,query:{query:this.query}}),this.query=""}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["show"]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),n=i.n(s),a=i(2);e.default={name:"movie-detail",data:function(){return{loading:!0,movie:{},id:""}},components:{Loading:n.a},computed:{getMeta:function(){var t=this.movie.casts.reduce(function(t,e){return t?t+" / "+e.name:e.name},"");return this.movie.countries.join(" / ")+" / "+this.movie.genres.join(" / ")+" / "+this.movie.directors[0].name+"(导演) / "+t}},mounted:function(){var t=this;this.id=this.$route.params.id,i.i(a.c)(this.id).then(function(e){console.log(e.data),t.movie=e.data,t.loading=!1})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),n=i.n(s),a=i(24),o=i.n(a),r=(i(7),i(2));e.default={data:function(){return{loading:!0,type:"",movieList:{subjects:[]},busy:!1}},directives:{InfiniteScroll:o.a},components:{Loading:n.a},created:function(){this.type=this.$route.query.type},methods:{loadMore:function(){var t=this,e=this.movieList.subjects.length;this.busy=!0,i.i(r.a)(this.type,e).then(function(e){t.busy=!0,console.log(e.data),t.movieList.title=e.data.title,t.movieList.total=e.data.total,t.movieList.subjects=t.movieList.subjects.concat(e.data.subjects),t.movieList.subjects.length>0&&(t.loading=!1),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1)})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),n=i.n(s),a=i(2);e.default={data:function(){return{load:!0,inTheater:{type:""},comingSoon:{type:""}}},components:{Loading:n.a},methods:{},created:function(){var t=this;i.i(a.a)(a.d.movie.in_theaters,0,9).then(function(e){t.inTheater=e.data,t.inTheater.type=a.d.movie.in_theaters,t.load=!1}),i.i(a.a)(a.d.movie.coming_soon,0,9).then(function(e){t.comingSoon=e.data,t.comingSoon.type=a.d.movie.coming_soon,t.load=!1})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),n=i.n(s),a=i(2),o=i(24),r=i.n(o);e.default={data:function(){return{load:!0,query:"",movieList:{subjects:[]},busy:!1}},directives:{InfiniteScroll:r.a},components:{Loading:n.a},mounted:function(){this.query=this.$route.query.query},watch:{$route:"loadAgain"},methods:{loadAgain:function(){this.busy=!1,this.movieList.subjects=[],this.query=this.$route.query.query,this.loadMore()},loadMore:function(){var t=this,e=this.movieList.subjects.length;this.busy=!0,i.i(a.b)(this.query,e).then(function(e){console.log(e),t.movieList.title=e.data.title,t.movieList.total=e.data.total,t.movieList.subjects=t.movieList.subjects.concat(e.data.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1),t.load=!1})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(27),n=i.n(s),a=i(5),o=i(31),r=i.n(o),c=i(25),u=i(26),l=i(30),v=i.n(l),m=i(29),d=(i.n(m),i(28));i.n(d);a.a.use(v.a,{loading:"http://img3.imgtn.bdimg.com/it/u=4122560844,1470181994&fm=214&gp=0.jpg"}),new a.a(n()({el:"#app",router:c.a,store:u.a},r.a))},function(t,e,i){"use strict";var s=i(17),n=i.n(s),a=i(7),o=i(2),r=n()({},a.a,function(t,e){var s=t.commit;i.i(o.a)(e.type,e.start,e.count).then(function(t){return t.type=e.type,s([a.a],t)})});e.a=r},function(t,e,i){"use strict";var s,n=i(17),a=i.n(n),o=i(7),r=(s={},a()(s,o.a,function(t,e){t.movies.push(e)}),a()(s,o.b,function(t,e){t.movieList.title=e.title,t.movieList.total=e.total,t.movieList.subjects=t.movieList.subjects.concat(e.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1)}),a()(s,o.c,function(t,e){t.movie=e}),a()(s,o.d,function(t,e){t.busy=e}),a()(s,o.e,function(t){t.movie={}}),a()(s,o.f,function(t){t.movies={}}),a()(s,o.g,function(t){t.movieList={}}),s);e.a=r},function(t,e,i){"use strict";var s={movies:[],movieList:{title:"",total:0,subjects:[]},busy:!1,movie:{}};e.a=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAALVBMVEX6+vr19fX9/f37+/v+/v75+fni4+L39/fx8/Hm5+br7Ovb29v////V1dX///98IJfXAAAAD3RSTlP//////////////////wDU3JihAAAAXUlEQVR42j3K0Q7AIAhDUedEoVj+/3MHLtt9aU7SFqHmbhpVC/CEIyVN1UgtGe3uPWeWnNfYY1z0Erl2tsjSJBID7xN0iMCJUhjf/CgwyQlPlkJEWlvJ1FdSUz8RD5YjB2QIqEc+AAAAAElFTkSuQmCC"},function(t,e,i){function s(t){i(91)}var n=i(1)(i(51),i(103),s,"data-v-2daa5c08",null);t.exports=n.exports},function(t,e,i){function s(t){i(93)}var n=i(1)(i(53),i(106),s,"data-v-7aaa788a",null);t.exports=n.exports},function(t,e,i){var s=i(1)(i(54),i(105),null,null,null);t.exports=s.exports},function(t,e,i){var s=i(1)(i(55),i(107),null,null,null);t.exports=s.exports},function(t,e,i){var s=i(1)(i(56),i(108),null,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",[i("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"spinner",class:{show:t.show},attrs:{width:"68px",height:"68px",viewBox:"0 0 44 44"}},[i("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"TalionNav"}},[t._m(0),t._v(" "),s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",name:"search",placeholder:"请输入搜索内容"},domProps:{value:t.query},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.search()},input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("img",{staticClass:"search-btn",attrs:{src:i(96)},on:{click:function(e){t.search()}}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"TalionNav"},[i("div",{staticClass:"TalionNav-primary"},[i("a",{staticClass:"logo",attrs:{href:"/"}},[i("h1",[t._v("豆瓣")])]),t._v(" "),i("nav",[i("ul",[i("li",[i("a",{staticStyle:{color:"#2384E8"},attrs:{href:"#/movies"}},[t._v("电影")])]),t._v(" "),i("li",[i("a",{staticStyle:{color:"#9F7860"},attrs:{href:"/book"}},[t._v("图书")])])]),t._v(" "),i("span",{staticClass:"search"})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-header"),t._v(" "),i("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"grid has-search-bar",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[i("h2",[t._v(t._s(t.movieList.title))]),t._v(" "),t.movieList.subjects.length?i("div",{staticClass:"card"},t._l(t.movieList.subjects,function(e,s){return i("router-link",{key:s,staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:e.id}}}},[i("div",{staticClass:"cover"},[i("div",{staticClass:"wp"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"item.images.medium"}],staticClass:"img-show",attrs:{alt:""}})])]),t._v(" "),i("div",{staticClass:"info"},[i("h3",[t._v(t._s(e.title))])])])})):t._e(),t._v(" "),i("loading",{attrs:{show:t.loading}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.movie.title?i("div",{staticClass:"detail-card"},[i("div",{staticClass:"title"},[t._v(t._s(t.movie.title))]),t._v(" "),i("div",[i("img",{attrs:{src:t.movie.images.large,width:"100%"}})]),t._v(" "),i("section",{staticClass:"subject-info"},[t._v(t._s(t.getMeta))]),t._v(" "),i("section",{staticClass:"subject-mark"},[i("a",[i("span",[t._v("想看("+t._s(t.movie.reviews_count)+")")])]),t._v(" "),i("a",[i("span",[t._v("看过("+t._s(t.movie.wish_count)+")")])])]),t._v(" "),i("section",{staticClass:"subject-intro"},[i("h2",[t._v(t._s(t.movie.title)+"的剧情介绍")]),t._v(" "),i("div",{staticClass:"bd"},[i("p",[t._v("\n            "+t._s(t.movie.summary)+"\n          ")])])])]):t._e(),t._v(" "),i("loading",{attrs:{show:t.loading}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"grid has-search-bar"},[t.inTheater.title?i("div",[i("h2",[t._v("\n      "+t._s(t.inTheater.title)+"\n      "),i("router-link",{staticClass:"more",attrs:{to:{name:"movie-list",query:{type:t.inTheater.type}}}},[t._v("更多>")])],1),t._v(" "),i("div",{staticClass:"card"},t._l(t.inTheater.subjects,function(e,s){return i("router-link",{key:s,staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:e.id}}}},[i("div",{staticClass:"cover"},[i("div",{staticClass:"wp"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"item.images.medium"}],staticClass:"img-show"})])]),t._v(" "),i("div",{staticClass:"info"},[i("h3",[t._v(t._s(e.title))])])])}))]):t._e(),t._v(" "),t.comingSoon.title?i("div",[i("h2",[t._v("\n      "+t._s(t.comingSoon.title)+"\n      "),i("router-link",{staticClass:"more",attrs:{to:{name:"movie-list",query:{type:t.comingSoon.type}}}},[t._v("更多>")])],1),t._v(" "),i("div",{staticClass:"card"},t._l(t.comingSoon.subjects,function(e,s){return i("router-link",{key:s,staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:e.id}}}},[i("div",{staticClass:"cover"},[i("div",{staticClass:"wp"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"item.images.medium"}],staticClass:"img-show"})])]),t._v(" "),i("div",{staticClass:"info"},[i("h3",[t._v(t._s(e.title))])])])}))]):t._e(),t._v(" "),i("loading",{attrs:{show:t.load}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"grid has-search-bar",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[i("h2",[t._v(t._s(t.movieList.title))]),t._v(" "),t.movieList.subjects.length>0?i("div",{staticClass:"card"},t._l(t.movieList.subjects,function(e,s){return i("router-link",{key:s,staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:e.id}}}},[i("div",{staticClass:"cover"},[i("div",{staticClass:"wp"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"item.images.medium"}],staticClass:"img-show"})])]),t._v(" "),i("div",{staticClass:"info"},[i("h3",[t._v(t._s(e.title))])])])})):t._e(),t._v(" "),i("loading",{attrs:{show:t.load}})],1)},staticRenderFns:[]}}],[57]);
//# sourceMappingURL=app.7e171801d6d153cf7b89.js.map