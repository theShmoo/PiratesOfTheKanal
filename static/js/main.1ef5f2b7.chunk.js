(this.webpackJsonpPiratesOfTheKanal=this.webpackJsonpPiratesOfTheKanal||[]).push([[0],{76:function(e,a,t){e.exports=t(89)},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),c=t.n(i),l=t(130),s=t(138),m=t(61),o=t.n(m),u=t(48),g=t(137),d=t(127),h=t(131),p=t(139),E=t(128),b=t(132),f=t(133),y=t(134),v=t(135),j=t(62),x=t(122),N=t(123),O=Object(j.a)({typography:{useNextVariants:!0},palette:{primary:{light:"#8bf5ff",main:"#4fc3f7",dark:"#0092c4",contrastText:"#000"},secondary:{light:"#a7c0cd",main:"#78909c",dark:"#4b636e",contrastText:"#fff"}}});var k=function(e){return function(a){return r.a.createElement(x.a,{theme:O},r.a.createElement(N.a,null),r.a.createElement(e,a))}},S=t(57),T=t(58),A=t(64),U=t(63),z=t(140),W=t(141),w=t(126),D=t(142),I=(t(84),t(13)),K=t.n(I);delete K.a.Icon.Default.prototype._getIconUrl,K.a.Icon.Default.mergeOptions({iconRetinaUrl:t(85),iconUrl:t(86),shadowUrl:t(87)});var P=[47.987884,16.255677],q={width:"100%",height:"100%"},C=function(e){Object(A.a)(t,e);var a=Object(U.a)(t);function t(){return Object(S.a)(this,t),a.apply(this,arguments)}return Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{center:P,zoom:13,style:q},r.a.createElement(W.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(w.a,{position:P},r.a.createElement(D.a,null,"Start und Ziel")))}}]),t}(n.Component),M=t(47),R=t(129),F=t(136),J=t(143),B=t(60),V=t.n(B),Z=t(59),_=t.n(Z),G=t(4),H=Object(G.a)((function(e){return{root:{margin:e.spacing(2)},button:{margin:e.spacing(1)}}}))((function(e){var a=e.classes,t=r.a.useState("Ung\xfcltige Email Adresse."),n=Object(M.a)(t,2),i=n[0],c=n[1],l=r.a.useState(""),s=Object(M.a)(l,2),m=s[0],o=s[1],g=r.a.useState(!1),d=Object(M.a)(g,2),h=d[0],p=d[1],E=""!==i,b=function(){if(!E){var e={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({mail:m})};fetch("https://potcs.pfahler.at/subscribe",e).then((function(e){200===e.status?p(!0):c("Mein Server mag diese Mail Adresse nicht...")})).catch((function(){c("Fehler beim Senden der Adresse...")}))}};return r.a.createElement("form",{className:a.root},r.a.createElement(J.a,{htmlFor:"my-email"},"Um Neuigkeiten \xfcber diese Website zu abonnieren, gib bitte hier deine E-Mail-Adresse ein. Wir senden gelegentlich Updates."),r.a.createElement(F.a,{required:!0,error:E,margin:"dense",id:"my-email",label:"Email Adresse","aria-describedby":"my-helper-text",helperText:i,type:"email",onChange:function(e){e.target.checkValidity(e.target.value)?(o(e.target.value),c("")):(o(""),c("Ung\xfcltige Email Adresse."))},onKeyPress:function(e){"Enter"===e.key&&(b(),e.preventDefault())},fullWidth:!0}),r.a.createElement(R.a,{variant:"contained",disabled:h||E,onClick:b,className:a.button,color:h?"secondary":"primary",endIcon:h?r.a.createElement(_.a,null):r.a.createElement(V.a,null)},"Subscribe"),h?r.a.createElement(u.a,{variant:"body1",color:"primary"},"Danke!"):"")})),L=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(3),display:"inherit",height:"100%"},hero:{height:"90%"},fullscale:{height:"100%"},list:{maxWidth:360},section:{margin:e.spacing(3),padding:e.spacing(2),height:"100%"},text:{padding:e.spacing(1),margin:e.spacing(1)},header:{fontSize:"4rem"},subheader:{fontSize:"2.5rem"}})})),Q=function(e){var a=e.children,t=L();return r.a.createElement(u.a,{variant:"h4",color:"primary",className:t.text},a)},X=function(e){var a=e.children,t=L();return r.a.createElement(u.a,{variant:"h5",color:"secondary",className:t.text},a)},Y=function(e){var a=e.heading,t=e.subheading,n=e.children,i=L();return r.a.createElement(d.a,{square:!0,elevation:4},r.a.createElement(h.a,{item:!0,xs:12,className:i.section},a?r.a.createElement(Q,null,a):"",t?r.a.createElement(X,null,t):"",n))},$=function(e){var a=e.items,t=(e.checkmark,L()),n=a.map((function(e,a){return r.a.createElement(b.a,{key:a,button:!0},r.a.createElement(f.a,null,r.a.createElement(o.a,null)),r.a.createElement(y.a,{primary:e}))}));return r.a.createElement(E.a,{component:"nav",className:t.list},n)},ee=function(e){var a=e.heading,t=e.subheading,n=e.img,i=e.children,c=L(),l=n?{background:"url("+n+") no-repeat center center",backgroundSize:"cover",resize:"both"}:{};return r.a.createElement(d.a,{square:!0,elevation:4,className:c.hero},r.a.createElement(h.a,{item:!0,xs:12,className:c.fullscale,style:l},a||t?r.a.createElement(g.a,{bgcolor:"rgba(255, 255, 255, .9)",className:c.opaque},a?r.a.createElement(Q,null,a):"",t?r.a.createElement(X,null,t):""):"",i))},ae=function(e){var a=e.avatar,t=e.name,n=(e.title,e.children);return r.a.createElement(b.a,{alignItems:"flex-start"},r.a.createElement(v.a,null,r.a.createElement(p.a,{src:a})),r.a.createElement(y.a,{primary:t,secondary:n}))},te=k((function(e){var a=L();return r.a.createElement(h.a,{container:!0,spacing:2,className:a.root},r.a.createElement(Y,null,r.a.createElement(u.a,{variant:"h1",color:"primary",className:a.header},"Pirates of the Kanal"),r.a.createElement(u.a,{variant:"h2",color:"secondary",className:a.subheader},"das Badner Tubing Event")),r.a.createElement(ee,{img:"img/1.jpg"}),r.a.createElement(Y,{heading:"Hard Facts"},r.a.createElement($,{items:["auf dem Wiener Neust\xe4dter Kanal","am 22. August 2020","ab 15:00 Uhr","bis Sonnenuntergang"]})),r.a.createElement(ee,{img:"img/7.jpg",heading:"Keep calm and float on",subheading:"Relax, Recover, Restore"}),r.a.createElement(Y,{heading:"Was unsere Tuber sagen"},r.a.createElement(E.a,{component:"nav",className:a.list},r.a.createElement(ae,{avatar:"img/avatar_2.jpg",name:"Q",title:"Tuber"},"Amazing Experience and I would definitely do it again. Good services, staff were very friendly and inviting. A life time experience."),r.a.createElement(ae,{avatar:"img/avatar.jpg",name:"Lakob",title:"Tubing Expert"},"Best. Tubing. Ever."))),r.a.createElement(ee,{img:"img/5.jpg",heading:"Aber Wo genau?"}),r.a.createElement(Y,{heading:"Da."}),r.a.createElement(ee,null,r.a.createElement(C,null)),r.a.createElement(Y,{heading:"Stay Tubed!"},r.a.createElement(H,null)),r.a.createElement(ee,{img:"img/4.jpg"}),r.a.createElement(Y,{heading:"Du brauchst"},r.a.createElement($,{items:["Tube","Proviant","Zuschauer"]})),r.a.createElement(ee,{img:"img/8.jpg",opacity:.01}),r.a.createElement(Y,{heading:"Tube on"}))}));c.a.render(r.a.createElement(te,null),document.querySelector("#root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.1ef5f2b7.chunk.js.map