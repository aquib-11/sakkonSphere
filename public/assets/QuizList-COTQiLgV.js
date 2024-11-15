import{j as e,L as t}from"./index-DHadUPOb.js";function c({quizCategories:a}){return e.jsx(e.Fragment,{children:a==null?void 0:a.map(s=>e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"text-xl font-bold text-[var(--black-color)] mb-4",children:s.category}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16",children:s.quizzes.map(r=>e.jsxs("div",{className:" bg-white shadow-lg rounded-[10px] transform transition-transform duration-300 ease-in-out hover:scale-[101%]",children:[e.jsx(t,{to:`quiz/${r.quizId}`,children:e.jsx("figure",{children:e.jsx("img",{src:r.imageSrc||"default_image_placeholder_url",alt:r.imageAlt,className:"h-48 w-full object-cover rounded-t-[10px] "})})}),e.jsxs("div",{className:"card-body p-3",children:[e.jsxs(t,{to:`quiz/${r.quizId}`,children:[e.jsx("h1",{className:"card-title text-[var(--primary)] hover:text-[var(--ternery)] pt-0 mb-3",children:r.title}),e.jsx("p",{className:"line-clamp-2 text-[var(--grey--800)]",children:r.description||"Take the quiz to find out more!"})]}),e.jsx("div",{className:"flex items-center pb-4 justify-start gap-1 order-3 sm:order-none",children:e.jsx("div",{className:"flex items-center mt-1 col-span-2 justify-start gap-4 order-3 sm:order-none",children:e.jsxs("div",{className:"flex items-center justify-center gap-2  cursor-pointer",children:[e.jsx("img",{className:"rounded-full size-6 border-2 border-[var(--ternery)]",src:`https://ui-avatars.com/api/?name=${encodeURIComponent("Sartaj Ashraf")}&background=random`,alt:"alt"}),e.jsx("span",{className:"text-sm text-[var(--primary)]",children:" Sartaj Ashraf"})]})})})]})]},r.id))})]},s==null?void 0:s.id))})}export{c as default};
