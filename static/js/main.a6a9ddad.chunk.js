(window["webpackJsonpbitcoin-price-visualizer-react"]=window["webpackJsonpbitcoin-price-visualizer-react"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),o=(n(10),n(1)),i=(n(11),n(2)),u=n.n(i),s={start:"https://cors-anywhere.herokuapp.com/https://api.coindesk.com/v1/bpi/historical/close.json?currency=",mid:"&start=",end:"&end="};var m=function(){var e=u()().subtract(14,"days").format("YYYY-MM-DD"),t=u()().format("YYYY-MM-DD"),n=u()().format("MMMM YYYY"),r=Object(a.useState)(!1),l=Object(o.a)(r,2),i=(l[0],l[1]),m=Object(a.useState)(null),p=Object(o.a)(m,2),E=(p[0],p[1]),v=Object(a.useState)([]),d=Object(o.a)(v,2),h=d[0],b=d[1],f=Object(a.useState)({value:"USD"}),w=Object(o.a)(f,2),j=w[0],Y=w[1],y=s.start+j.value+s.mid+e+s.end+t;return Object(a.useEffect)((function(){var e=setInterval((function(){i(!0),fetch(y,{headers:{Accept:"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.ok?e.json():new Error("Mistake!")})).then((function(e){b(e.bpi),i(!1)})).catch((function(e){E(e)}))}),1e3);return function(){return clearInterval(e)}}),[y,j]),c.a.createElement("div",{id:"container"},c.a.createElement("table",null,c.a.createElement("caption",null,"Bitcoin in ",n),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Day"),c.a.createElement("th",{scope:"col"},"Price"))),c.a.createElement("tbody",null,Object.keys(h).map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.slice(-2)),c.a.createElement("td",null,h[e]),c.a.createElement("td",null,"USD"===j.value?c.a.createElement("span",null," $"):"EUR"===j.value?c.a.createElement("span",null," \u20ac"):c.a.createElement("span",null,"\xa3")))})))),c.a.createElement("label",null,"Change your currency:",c.a.createElement("select",{value:j.value,onChange:function(e){return Y({value:e.target.value})}},c.a.createElement("option",{value:"USD"},"USD"),c.a.createElement("option",{value:"EUR"},"EUR"),c.a.createElement("option",{value:"GBP"},"GBP"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a6a9ddad.chunk.js.map