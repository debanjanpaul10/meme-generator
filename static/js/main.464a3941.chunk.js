(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a(4),i=a.n(c),o=(a(15),a.p+"static/media/Trollface.c371feba.png");function r(){return Object(n.jsxs)("header",{children:[Object(n.jsx)("img",{src:o,alt:"Problem?"}),Object(n.jsx)("p",{children:"Meme Generator"})]})}var m=a(5),l=a(6),h=a(7),b=a(2),j=a(9),d=a(8),u=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(e)),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(m.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(n.jsx)("input",{type:"text",name:"topText",placeholder:"Enter text to be displayed at top",value:this.state.topText,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"bottomText",placeholder:"Enter text to be displayed at bottom",value:this.state.bottomText,onChange:this.handleChange}),Object(n.jsx)("button",{children:"Gen"})]}),Object(n.jsxs)("div",{className:"meme",children:[Object(n.jsx)("img",{src:this.state.randomImg,alt:"Meme"}),Object(n.jsx)("h2",{className:"top",children:this.state.topText}),Object(n.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),a}(s.Component);function p(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(r,{}),Object(n.jsx)(u,{})]})}i.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.464a3941.chunk.js.map