import{a as j,j as s,n as u,o as b,p as g}from"./index-DHadUPOb.js";import{p as c}from"./podcastsLists-4OUMdQ9T.js";import{M as f}from"./MiniCard-DGaLuqKF.js";function y(){const{id:l}=j(),r=c[0].podcasts.find(a=>a.podcastId===Number(l));console.log({podcastList:r}),console.log({paramsId:l});const{episodeNo:t,title:i,avatar:d,author:e,publishDate:x,image:n,description:p,audioSource:o,full_discription:m}=r;return s.jsx(s.Fragment,{children:s.jsxs("section",{className:"container px-40 flex flex-col gap-6",children:[s.jsxs("span",{children:["Episode: ",t]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-4xl text-[var(--black-color)] font-[var(--black-color)] my-3",children:i}),s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs("span",{className:"flex items-center",children:[s.jsx("img",{src:d||"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",alt:e,className:"w-8 h-8 rounded-full mr-3"}),s.jsx("span",{className:"font-semibold",children:e})]}),s.jsxs("span",{className:"text-xs place-items-center font-mono text-[var(--blue-color)] font-bold",children:["Date: ",x]})]})]}),s.jsxs("div",{className:"flex flex-col text-black border-b-[1px] border-gray-300 p-4 gap-4",children:[s.jsxs("div",{className:"flex gap-4",children:[s.jsx("img",{src:n,alt:"",className:"w-52"}),s.jsx("p",{className:"text-xl",children:p})]}),s.jsxs("audio",{controls:!0,className:"w-3/4 h-8 my-3 ml-3",children:[s.jsx("source",{src:o,type:"audio/ogg"}),s.jsx("source",{src:o,type:"audio/mpeg"}),"Your browser does not support the audio element."]})]}),s.jsx("h2",{className:"text-xl text-[var(--blue-color)]",children:"Description:"}),s.jsx("p",{className:"text-xl text-gray-700 border-b-[1px] border-gray-300 pb-3",children:m}),s.jsxs("div",{className:"text-2xl flex flex-col gap-6 text-black",children:[s.jsx("p",{children:"New episode every fortnight"}),s.jsx("p",{children:"Explore more on www.sukoonsphere.com"}),s.jsxs("p",{children:[s.jsx("span",{children:"Produced by:"})," ",e]})]}),s.jsx("div",{className:"grid grid-cols-3 gap-4 ",children:c.slice(0,3).map((a,h)=>s.jsx(f,{podcastsList:a},h))}),s.jsxs("div",{className:"flex gap-3 text-[var(--blue-color)] border-2 border-[var(--blue-color)] w-24 p-2 rounded-full shadow-inner",children:[s.jsx(u,{className:"size-6 "}),s.jsx(b,{className:"size-6"}),s.jsx(g,{className:"size-6"})]})]})})}export{y as default};
