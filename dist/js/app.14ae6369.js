(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},3100:function(e,t,a){},"4a35":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view",{staticClass:"view"})],1)},r=[],s={name:"app",components:{}},o=s,c=(a("034f"),a("2877")),l=Object(c["a"])(o,i,r,!1,null,null,null),u=l.exports,d=a("8c4f"),p=a("289d"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"login-container"},[a("b-field",{attrs:{label:"Username",type:{"is-danger":e.hasError},message:{"Your supplied credentials doesn't match":e.hasError}}},[a("b-input",{attrs:{value:"johnsilver",maxlength:"30"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("b-field",{attrs:{label:"Password",type:{"is-danger":e.hasError}}},[a("b-input",{attrs:{value:"123",type:"password",maxlength:"30"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("b-button",{attrs:{type:"is-primary","icon-left":"github-circle"},on:{click:e.submit}},[e._v("Login")])],1)])},f=[],m=(a("ac1f"),a("5319"),{data:function(){return{hasError:!1,username:"d1was",password:""}},methods:{submit:function(){"d1was"==this.username&&"fu6s0c13ty"==this.password?(localStorage.setItem("d1wasLoggedPass",!0),this.$router.replace({path:"/"})):this.hasError=!0}}}),h=m,g=(a("d683"),Object(c["a"])(h,v,f,!1,null,"41a23bb5",null)),b=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h3",{staticClass:"title"},[e._v("Movie Diary")]),a("section",{staticClass:"movies"},[a("div",{staticClass:"columns is-multiline"},e._l(e.movie,(function(t){return a("Movie",{key:t.movie_id,attrs:{id:t.movie_id,rating:e.getRating(t.rating),review:t.review,date:t.date}})})),1)])])},_=[],w=(a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column is-4"},[a("div",{staticClass:"movie-card"},[a("figure",{staticClass:"poster"},[a("img",{attrs:{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+e.movie.poster_path,alt:""}})]),a("div",{staticClass:"movie-details"},[a("h5",{staticClass:"title"},[e._v(e._s(e.movie.title))]),a("div",{staticClass:"genre-list"},e._l(e.movie.genres,(function(t){return a("span",{key:t.id,staticClass:"genre"},[e._v(e._s(t.name)+", ")])})),0),a("div",{staticClass:"tags"},[a("span",{staticClass:"imdb tag"},[e._v(e._s(e.movie.vote_average))]),a("span",{staticClass:"tag is-primary"},[e._v(e._s(e.rating))]),a("span",{staticClass:"tag date is-info"},[e._v(e._s(e.date))]),a("span",{staticClass:"tag is-danger is-small"},[e._v(" "+e._s(e.saying)+"... ")])])])])])}),C=[],x=(a("a15b"),a("fb6a"),a("1276"),a("bc3a")),k=a.n(x),M={data:function(){return{movie:null}},computed:{saying:function(){var e=this.review.split(" ");return e.slice(0,5).join(" ")}},props:["id","rating","review","date"],mounted:function(){var e=this;k.a.get("https://api.themoviedb.org/3/movie/"+this.id+"?api_key=25d38efe44b241699eb994275cafff06&language=en-US").then((function(t){e.movie=t.data})).catch((function(e){console.log(e)}))}},j=M,O=(a("c00e"),Object(c["a"])(j,w,C,!1,null,"af76c016",null)),E=O.exports,S=a("8aa5"),R=a.n(S),P=(a("e71f"),{apiKey:"AIzaSyAbMNAFThiWzHk8uqua22xbzN38uC76jY8",authDomain:"movie-diary-4858b.firebaseapp.com",databaseURL:"https://movie-diary-4858b.firebaseio.com",projectId:"movie-diary-4858b",storageBucket:"movie-diary-4858b.appspot.com",messagingSenderId:"191005978686",appId:"1:191005978686:web:5e697dc6c5e93f8eea216f",measurementId:"G-1BER8YJY5E"});R.a.initializeApp(P),R.a.analytics();var z=R.a.firestore(),I=z.collection("movies"),D={1:"Don't ever watch it",2:"Boring as Frog",3:"Kind of watchable",4:"Wow I like that",5:"You should see this",6:"Leave everything and watch this"},L={name:"HelloWorld",data:function(){return{movie:[]}},props:{msg:String},components:{Movie:E},methods:{getRating:function(e){return console.log(D),D[e]}},mounted:function(){var e=this;I.get().then((function(t){t.forEach((function(t){console.log(t.data()),e.movie.push(t.data())}))}))}},A=L,Q=(a("a786"),Object(c["a"])(A,y,_,!1,null,"2b178c00",null)),$=Q.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"container"},[a("h4",{staticClass:"title"},[e._v("Add New Movie")]),a("b-field",{attrs:{horizontal:"",label:"Find a Movie"}},[a("b-autocomplete",{attrs:{data:e.filteredData,placeholder:"e.g. Taxi Driver",icon:"magnify"},on:{keyup:e.searchMovie,select:function(t){return e.selected=t}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}},[a("template",{slot:"empty"},[e._v("No results found")])],2)],1),a("b-field",{attrs:{horizontal:"",label:"My Label"}},[a("b-select",{attrs:{placeholder:"My Rating"},model:{value:e.myRating,callback:function(t){e.myRating=t},expression:"myRating"}},[a("option",{attrs:{value:"1"}},[e._v("Don't ever watch it")]),a("option",{attrs:{value:"2"}},[e._v("Boring as Frog")]),a("option",{attrs:{value:"3"}},[e._v("Kind of watchable")]),a("option",{attrs:{value:"4"}},[e._v("Wow I like that")]),a("option",{attrs:{value:"5"}},[e._v("You should see this")]),a("option",{attrs:{value:"6"}},[e._v("Leave everything and watch this")])])],1),a("b-field",{attrs:{horizontal:"",label:"Review Man"}},[a("b-input",{attrs:{type:"textarea"},model:{value:e.review,callback:function(t){e.review=t},expression:"review"}})],1),a("b-field",{attrs:{horizontal:"",label:"Watched Date"}},[a("b-input",{attrs:{type:"date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("b-field",{attrs:{horizontal:""}},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary",on:{click:e.submitMovie}},[e._v(" Give up man !! Submit it ")])])])],1)},T=[],W=(a("d81d"),{data:function(){return{searchQuery:"",movies:[],selected:null,myRating:"",review:"",date:""}},watch:{searchQuery:function(){this.searchMovie()}},computed:{filteredData:function(){var e=this.movies.map((function(e){return e.title}));return e}},methods:{searchMovie:function(){var e=this;k.a.get("https://api.themoviedb.org/3/search/movie?api_key=25d38efe44b241699eb994275cafff06&language=en-US&query="+this.searchQuery+"&page=1&include_adult=false").then((function(t){e.movies=t.data.results})).catch((function(e){console.log(e)}))},submitMovie:function(){var e=this;I.add({movie_id:this.movies[0].id,rating:this.myRating,review:this.review,date:this.date}).then((function(){e.review="",e.searchQuery="",e.myRating=""})).catch((function(e){console.log(e)}))}}}),B=W,F=Object(c["a"])(B,Y,T,!1,null,null,null),N=F.exports,U=new d["a"]({mode:"history",routes:[{path:"/",name:"Home",component:$,meta:{auth:!0}},{path:"/login",name:"Login",component:b,meta:{guest:!0}},{path:"/admin",name:"Admin",component:N,children:[{path:"movie/add",name:"AddMovie",component:N}]}]});U.beforeEach((function(e,t,a){if(e.matched.some((function(e){return e.meta.auth}))){var n=localStorage.getItem("d1wasLoggedPass");null!=n&&0!=n||(alert(n),a({path:"/login"}))}a()}));a("5abe");n["a"].use(d["a"]),n["a"].use(p["a"]),n["a"].config.productionTip=!1,new n["a"]({router:U,render:function(e){return e(u)}}).$mount("#app")},"64d7":function(e,t,a){},"85ec":function(e,t,a){},a786:function(e,t,a){"use strict";var n=a("4a35"),i=a.n(n);i.a},c00e:function(e,t,a){"use strict";var n=a("3100"),i=a.n(n);i.a},d683:function(e,t,a){"use strict";var n=a("64d7"),i=a.n(n);i.a}});
//# sourceMappingURL=app.14ae6369.js.map