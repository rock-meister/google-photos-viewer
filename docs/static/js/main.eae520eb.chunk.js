(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),o=a.n(c),i=(a(27),a(2)),r=(a(28),a(29),a(4)),u=Object(n.createContext)(void 0);a(30);var s=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,e.albumDetails&&e.albumDetails.title||e.photoDetails?l.a.createElement(r.b,{to:"/"},"Albums"):"Albums",e.albumDetails&&e.albumDetails.title&&l.a.createElement("span",null,"\xa0\xbb\xa0",e.albumDetails.title),e.photoDetails&&e.albumID&&e.albumTitle&&l.a.createElement("span",null,"\xa0\xbb\xa0",l.a.createElement(r.b,{to:"/album/".concat(e.albumID)},e.albumTitle)),e.photoDetails&&l.a.createElement("span",null,"\xa0\xbb ",e.photoDetails.filename.split(".")[0])))};var m=function(){var e=Object(n.useContext)(u),t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(!0),b=Object(i.a)(m,2),d=b[0],h=b[1];Object(n.useEffect)(function(){e.loadAlbums().then(function(e){o(e),h(!1)})},[e]);var p=c.map(function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(r.b,{to:"/album/"+e.id},l.a.createElement("figure",null,l.a.createElement("img",{src:e.coverPhotoBaseUrl,alt:""}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,e.title)))),l.a.createElement("br",null))});return l.a.createElement("div",null,d&&"Loading...",c.length>0&&l.a.createElement("div",null,console.log("AlbumsList albums",c),l.a.createElement(s,null),l.a.createElement("ul",{className:"albums"},p)),l.a.createElement("hr",null),l.a.createElement(r.b,{to:"/"},"Back to Albums List"))};a(35),a(36);var b=function(e){var t=e.photoID,a=e.photoNumber,c=e.photosTotal;console.log("ViewPhoto -",t,a,c);var o=Object(n.useContext)(u),r=Object(n.useState)(void 0),s=Object(i.a)(r,2),m=s[0],b=s[1],d=Object(n.useState)(!0),h=Object(i.a)(d,2),p=h[0],f=h[1];return Object(n.useEffect)(function(){o.loadPhotoDetail(t).then(function(e){b(e),f(!1)})},[e.match,o,t]),l.a.createElement("div",null,p&&l.a.createElement("figure",null,l.a.createElement("figcaption",null,"'Loading...'")),!p&&m&&l.a.createElement("figure",null,l.a.createElement("img",{src:m.baseUrl,alt:""}),l.a.createElement("figcaption",null,a," of ",c)),!p&&!m&&l.a.createElement("figure",null,l.a.createElement("figcaption",null,"Photo not found")))},d=document.getElementById("root");var h=function(e){var t=document.createElement("div");return t.setAttribute("id","modal"),Object(n.useEffect)(function(){return d.appendChild(t),function(){d.removeChild(t)}}),o.a.createPortal(e.children,t)};a(37);var p=function(e){return l.a.createElement(h,null,l.a.createElement("div",{className:"wrapper",onClick:function(t){e.handleClose(t)}},l.a.createElement("div",{className:"inner"},e.children)))};var f=function(e){console.log("ViewAlbum props",e);var t=e.match.params.aid,a=Object(n.useContext)(u),c=Object(n.useState)(void 0),o=Object(i.a)(c,2),m=o[0],d=o[1],h=Object(n.useState)(!0),f=Object(i.a)(h,2),v=f[0],E=f[1],g=Object(n.useState)(!1),O=Object(i.a)(g,2),j=O[0],I=O[1],w=Object(n.useState)(void 0),D=Object(i.a)(w,2),C=D[0],k=D[1],y=Object(n.useState)(void 0),A=Object(i.a)(y,2),S=A[0],P=A[1],N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;e.preventDefault();var n=e.target.className;j?"inner"!==n&&"wrapper"!==n||I(!1):(k(t),P(parseInt(a)+1),I(!0))};return Object(n.useEffect)(function(){a.loadAlbumDetail(t).then(function(e){d(e),E(!1)})},[e.match,a,t]),l.a.createElement("div",null,v&&l.a.createElement("span",null,"'Loading...'"),!v&&m&&l.a.createElement("div",null,l.a.createElement(s,{albumDetails:m}),l.a.createElement("ul",null,m.mediaItems.map(function(e,t){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#",onClick:function(a){N(a,e.id,t)}},l.a.createElement("figure",null,l.a.createElement("img",{src:e.baseUrl,alt:""}))))})),j&&l.a.createElement(p,{handleClose:N,shown:j},l.a.createElement(b,{photoID:C,photoNumber:S,photosTotal:m.mediaItemsCount}))),!v&&!m&&l.a.createElement("span",null,"Album not found"),l.a.createElement("hr",null),l.a.createElement(r.b,{to:"/"},"Back to Albums List"))};var v=function(){return l.a.createElement("div",null,"This site was made with React 16.8 and Google Photos API.",l.a.createElement("br",null),l.a.createElement(r.b,{to:"/"},"Back"))},E=a(7),g=a(21),O=a(19),j=a(20),I=function(){function e(t){Object(O.a)(this,e),this.gapiClient=t}return Object(j.a)(e,[{key:"loadAlbums",value:function(){return this.gapiClient.photoslibrary.albums.list({}).then(function(e){return e.result.albums})}},{key:"loadAlbumDetail",value:function(e){var t=this;return this.gapiClient.photoslibrary.albums.get({albumId:e}).then(function(e){return e.result}).then(function(a){return t.gapiClient.photoslibrary.mediaItems.search({albumId:e}).then(function(e){var t=e.result.mediaItems;return Object(g.a)({},a,{mediaItems:t})})}).catch(function(e){})}},{key:"loadPhotoDetail",value:function(e){return this.gapiClient.photoslibrary.mediaItems.get({mediaItemId:e}).then(function(e){return e.result}).catch(function(e){})}}]),e}(),w="https://www.googleapis.com/auth/photoslibrary.readonly";var D=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),b=Object(i.a)(s,2),d=b[0],h=b[1],p=Object(n.useState)(void 0),g=Object(i.a)(p,2),O=g[0],j=g[1];Object(n.useEffect)(function(){console.log("we've mounted");var t=setInterval(function(){window.gapi&&(clearInterval(t),gapi.load("client:auth2",function(){gapi.client.init({discoveryDocs:["https://photoslibrary.googleapis.com/$discovery/rest?version=v1"],clientId:e.gapiID,scope:w}).then(function(){o(!1);var e=gapi.auth2.getAuthInstance();e.isSignedIn.listen(function(){h(t.hasGrantedScopes(w))});var t=e.currentUser.get(),a=t.hasGrantedScopes(w);j(new I(gapi.client)),h(a)})}))},100)},[e.gapiID]);var D=Object(n.useCallback)(function(){gapi.auth2.getAuthInstance().signOut()},[]),C=Object(n.useCallback)(function(){gapi.auth2.getAuthInstance().signIn()},[]);return c?l.a.createElement("div",null,"Initialising..."):d?l.a.createElement("div",{className:"App"},l.a.createElement(u.Provider,{value:O},l.a.createElement(r.a,null,l.a.createElement("button",{onClick:D},"Sign Out"),l.a.createElement(E.a,{path:"/",exact:!0,component:m}),l.a.createElement(E.a,{path:"/album/:aid",component:f}),l.a.createElement(E.a,{path:"/about",component:v})))):l.a.createElement("button",{onClick:C},"Sign in")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(D,{gapiID:"101744662563-frd5q7291nvegithu7pi3i5dcmlp79ra.apps.googleusercontent.com"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.eae520eb.chunk.js.map