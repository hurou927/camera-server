(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/waraiotoko.d5603eea.jpg"},21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(14),s=a.n(r),c=(a(26),a(6)),o=a(7),l=a(9),m=a(8),h=a(10),u=(a(28),a(30),a(32),a(34),a(3)),d=a.n(u),p=a(11),v=a(2),g=a(15),f=a.n(g),w=a(16),b=a.n(w),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setTimeoutGetCameraImageAsync=a.setTimeoutGetCameraImageAsync.bind(Object(v.a)(Object(v.a)(a))),a.state={image_base64:"",imageWidth:e.imageWidth||512,urlToGetImg:"http://".concat(e.hostip,"/camera")},a.timer=void 0,a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(e){this.setState({imageWidth:e.width}),this.setState({urlToGetImg:"http://".concat(e.hostip,"/camera")}),!1===e.isActive&&void 0!==this.timer?clearTimeout(this.timer):!0===e.isActive&&(this.timer=setTimeout(this.setTimeoutGetCameraImageAsync,30))}},{key:"setTimeoutGetCameraImageAsync",value:function(){var e=Object(p.a)(d.a.mark(function e(){var t,a,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.props.isActive){e.next=11;break}return t=this.state.urlToGetImg,e.next=5,f()(t,{mode:"cors"});case 5:return a=e.sent,e.next=8,a.json();case 8:i=e.sent,this.setState({image_base64:i.image}),this.timer=setTimeout(this.setTimeoutGetCameraImageAsync,30);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return e=this.props.isActive?"data:image/jpeg;base64,".concat(this.state.image_base64):b.a,n.a.createElement("div",null,n.a.createElement("img",{src:e,alt:"Get Camera",width:this.state.imageWidth}))}}]),t}(i.Component),x=a(17),E=a(18),k=a(19),j=a(20),I=512,O=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(l.a)(this,Object(m.a)(t).call(this,e));var i=localStorage.getItem("hostip")||"192.168.11.8:8002";return a.state={checked:!1,items:[{label:"Camera",icon:"pi pi-fw pi-home"}],widthBySlider:I,hostip:i},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{padding:"20px 20px 20px 30px"}},n.a.createElement("div",{className:"p-grid p-dir-col"},n.a.createElement("div",{className:"p-col"},n.a.createElement(E.TabMenu,{model:this.state.items,activeItem:this.state.activeItem,onTabChange:function(t){return e.setState({activeItem:t.value})}}))),n.a.createElement("div",{className:"p-grid"},n.a.createElement("div",{className:"p-col"},n.a.createElement("div",null,n.a.createElement("span",{className:"p-float-label"},n.a.createElement("h4",null,"HOST IP"),n.a.createElement(j.InputText,{id:"in",value:this.state.hostip,onChange:function(t){localStorage.setItem("hostip",t.target.value),e.setState({hostip:t.target.value})},style:{width:"12em",margin:"10px 0 10px 0",padding:"10px 0 10px 0"}}))),n.a.createElement("div",null,n.a.createElement("h4",null,this.state.checked?"ON":"OFF"),n.a.createElement(x.InputSwitch,{checked:this.state.checked,onChange:function(t){return e.setState({checked:t.value})}})),n.a.createElement("div",{style:{margin:"10px 0 10px 0",padding:"10px 0 10px 0"}},n.a.createElement("h3",null,"Width=",this.state.widthBySlider),n.a.createElement(k.Slider,{min:512,max:1024,value:this.state.widthBySlider,onChange:function(t){return e.setState({widthBySlider:t.value})},style:{width:"14em"}})),n.a.createElement("div",null,n.a.createElement(y,{isActive:this.state.checked,width:this.state.widthBySlider,hostip:this.state.hostip})))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.f739e6e2.chunk.js.map