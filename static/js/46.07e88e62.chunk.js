"use strict";(self.webpackChunkece_college_notes=self.webpackChunkece_college_notes||[]).push([[46],{3259:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var r=n(2791),i=n(6934),o=n(4554),a=n(77),s=n(890),c=n(4721),l=n(6151),u=n(184),d=(0,i.ZP)(o.Z)({width:"min(100%, 800px)",height:"100vh",display:"flex",transition:"all 200ms","@media (max-width: 600px)":{transform:"scale(0.9)"},"@media (max-width: 400px)":{transform:"scale(0.8)"}}),h=(0,i.ZP)(o.Z)({padding:"1em",textAlign:"center",margin:"auto",zIndex:"10",color:a.Z.APP_COLORS.dark}),f=(0,i.ZP)(l.Z)({fontSize:"1.5rem",marginTop:"1.5em",backgroundColor:a.Z.APP_COLORS.accent,color:a.Z.APP_COLORS.darkAccent,padding:"0.25em 1em",transition:"all 200ms","&:hover":{transform:"scale(1.05)",color:a.Z.APP_COLORS.dark,backgroundColor:a.Z.APP_COLORS.accent}}),m=function(){return(0,u.jsx)(d,{children:(0,u.jsxs)(h,{children:[(0,u.jsx)(s.Z,{variant:"h1",fontSize:"4rem",fontWeight:"600",children:"B.Tech ECE Notes"}),(0,u.jsx)(s.Z,{variant:"h2",fontSize:"2.5rem",fontWeight:"400",children:"SRMIST, Academic Year: 2020-24 Notes"}),(0,u.jsx)(c.Z,{variant:"middle"}),(0,u.jsx)(s.Z,{variant:"body1",fontSize:"1.5rem",mt:2,children:"Collection of all notes of SRMIST B.Tech Electronics and Communications Dept. for the academic year: 2020-24. Visit the Repository or Drive to access all notes, additional resources for studying and how to study each subject."}),(0,u.jsx)(f,{onClick:function(){var e=window.innerHeight;window.scroll({behavior:"smooth",top:e})},children:"View Semester Notes"})]})})},x=n(1413),Z=n(8214),p=n(5861),j=n(9439),g=n(6871),v=n(1943),C=n(1889),b=n(7621),P=n(9504),S=n(3044),w=n(2363),y=(0,i.ZP)(o.Z)({position:"relative",width:"min(100%, 1200px)",height:"max(100vh, fit-content)",display:"flex",flexDirection:"column",gap:"1em"}),O=(0,i.ZP)(l.Z)({color:a.Z.APP_COLORS.accent}),k=function(){var e=(0,g.s0)(),t=(0,r.useState)([]),n=(0,j.Z)(t,2),i=n[0],o=n[1];(0,r.useEffect)((function(){var e=function(){var e=(0,p.Z)((0,Z.Z)().mark((function e(){var t;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.Semesters.getAllSemesters();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===i.length&&e()}),[i]);var a=function(t){var n=t.id,r=t.credits,i=t.name,o=t.numberOfCourses,a=i.replace(/\W+/,"-").toLowerCase();return(0,u.jsx)(C.ZP,{item:!0,xs:12,sm:8,md:3,mx:"auto",children:(0,u.jsxs)(b.Z,{sx:{width:"100%",height:"fit-content"},children:[(0,u.jsxs)(P.Z,{children:[(0,u.jsxs)(s.Z,{variant:"h6",display:"flex",alignItems:"center",gap:2,children:[(0,u.jsx)(S.Z,{sx:{width:"20px",height:"20px",fontSize:"1rem"},children:n}),i]}),(0,u.jsx)(c.Z,{}),(0,u.jsxs)(s.Z,{mt:2,children:["Credits: ",r]}),(0,u.jsxs)(s.Z,{children:["Number of Courses: ",o]})]}),(0,u.jsx)(w.Z,{children:(0,u.jsx)(O,{variant:"text",onClick:function(){e("/notes/".concat(a))},children:"View Notes"})})]})})};return(0,u.jsxs)(y,{id:"semesters",children:[(0,u.jsx)(s.Z,{variant:"h3",fontSize:"2rem",textAlign:"center",mt:2,children:"All Semester Links"}),(0,u.jsx)(c.Z,{variant:"fullWidth"}),(0,u.jsx)(C.ZP,{container:!0,spacing:2,gap:2,children:i.length>0?i.map((function(e,t){return(0,u.jsx)(a,(0,x.Z)({},e),t)})):null})]})},A=n(2477),_=n(703),R=n(5758),I=n(4569),L=n.n(I),T=function(){var e=(0,p.Z)((0,Z.Z)().mark((function e(){var t,n;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=sessionStorage.getItem("contributors")?JSON.parse(sessionStorage.getItem("contributors")):null){e.next=8;break}return e.next=5,L().get(a.Z.CONTRIBUTORS_URL);case 5:n=e.sent,t=n.data.map((function(e){return{username:e.login,avatar:e.avatar_url,profile:e.html_url,contributions:e.contributions}})),sessionStorage.setItem("contributors",JSON.stringify(t));case 8:return e.abrupt("return",t);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),z=(0,i.ZP)(o.Z)({position:"relative",width:"min(100%, 800px)",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}),N=(0,i.ZP)(o.Z)({width:"100%",textAlign:"center"}),W=(0,i.ZP)(l.Z)({marginTop:"1em",backgroundColor:a.Z.APP_COLORS.accent,color:a.Z.APP_COLORS.darkAccent,"&:hover":{backgroundColor:a.Z.APP_COLORS.accent,color:a.Z.APP_COLORS.dark}}),D=(0,i.ZP)(o.Z)({padding:"1em",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"1em"}),E=(0,i.ZP)(_.Z)({borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",cursor:"pointer",padding:"1em","&:hover":{backgroundColor:a.Z.APP_COLORS.accent}}),V=function(){var e=(0,g.s0)(),t=(0,r.useState)([]),n=(0,j.Z)(t,2),i=n[0],a=n[1];(0,r.useEffect)((function(){var e=function(){var e=(0,p.Z)((0,Z.Z)().mark((function e(){var t;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===i.length&&e()}),[i]);var l=function(e){var t=e.avatar,n=e.contributions,r=e.profile,i=e.username;return(0,u.jsx)(E,{onClick:function(){window.open(r,"_blank")},children:(0,u.jsx)(A.Z,{title:"Visit ".concat(i,"'s Profile, contributions made: ").concat(n),children:(0,u.jsxs)(o.Z,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",children:[(0,u.jsx)(S.Z,{src:t,alt:i,variant:"rounded"}),(0,u.jsx)(s.Z,{variant:"caption",children:i})]})})})};return(0,u.jsx)(z,{children:(0,u.jsxs)(N,{children:[(0,u.jsx)(s.Z,{variant:"h3",fontSize:"2rem",children:"Contribute"}),(0,u.jsx)(c.Z,{variant:"fullWidth"}),(0,u.jsxs)(s.Z,{variant:"body1",fontSize:"1.25rem",mt:2,children:["This Project is ",(0,u.jsx)("b",{children:"Open Source"}),"! That means that you're free to contribute and make changes that you feel would improve the quality of this project."]}),(0,u.jsx)(s.Z,{children:"To learn how to contribute, click the button below to explore more."}),(0,u.jsx)(W,{variant:"contained",startIcon:(0,u.jsx)(R.Z,{}),onClick:function(){e("/contribute")},children:"Contribute Now!"}),(0,u.jsx)(s.Z,{variant:"body1",fontSize:"1.25rem",mt:2,children:"Meet our Contributors!"}),(0,u.jsx)(s.Z,{variant:"caption",children:"Without whom this project would not be possible!"}),(0,u.jsx)(D,{children:i.length>0?i.map((function(e,t){return(0,r.createElement)(l,(0,x.Z)((0,x.Z)({},e),{},{key:t}))})):null})]})})},B=(0,i.ZP)(o.Z)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","> *":{width:"100%"}}),M=function(){return(0,u.jsxs)(B,{children:[(0,u.jsx)(m,{}),(0,u.jsx)(k,{}),(0,u.jsx)(V,{})]})}}}]);
//# sourceMappingURL=46.07e88e62.chunk.js.map