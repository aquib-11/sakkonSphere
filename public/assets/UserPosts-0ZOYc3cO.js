import{u as i,r as a,j as t,f as x,c as p}from"./index-DHadUPOb.js";const h=()=>{const{user:r}=i(),[e,o]=a.useState([]),c=async()=>{const{data:s}=await p.get(`/posts/user/${r._id}`);o(s.posts),console.log({dat:s.posts})};a.useEffect(()=>{c()},[]);const n=s=>{o(l=>l.filter(d=>d._id!==s))};return t.jsxs("div",{className:"bg-white rounded-lg p-4",children:[t.jsx("h2",{className:"text-xl font-bold mb-4 text-[var(--black-color)] text-center",children:"Posts"}),t.jsx("div",{children:e.length===0?t.jsx("p",{className:"text-[var(--primary)] text-center py-4",children:"No questions asked yet!"}):e.map(s=>t.jsx(x,{post:s,onPostDelete:n},s._id))})]})};export{h as default};
