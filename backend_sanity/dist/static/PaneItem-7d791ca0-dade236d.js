import{n as b,a7 as D,w as x,bM as _,r as o,cF as F,j as e,cG as L,cH as P,$ as M,cI as T,cJ as j,cK as R,cL as E,k as p,a9 as W}from"./sanity-1980e088.js";const $=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(W,{})});function B(t){const{layout:n,value:s}=t;return e(P,{...$(s._id,s._type),layout:n})}function k(t,n,s){return t===!1?!1:t||n&&n.icon||s||!1}function J(t){const{icon:n,id:s,layout:i="default",pressed:I,schemaType:a,selected:r,title:u,value:c}=t,v=b(),l=D(),{ChildLink:d}=x(),m=_(s),f=!!(a&&a.name&&v.get(a.name)),[y,h]=o.useState(!1),g=o.useMemo(()=>c&&F(c)?!a||!f?e(B,{value:c}):e(L,{documentPreviewStore:l,icon:k(n,a,R),layout:i,schemaType:a,value:c,presence:m}):e(P,{status:e(M,{muted:!0,children:e(T,{})}),icon:k(n,a,E),layout:i,title:u}),[l,f,n,i,a,u,c,m]),w=o.useMemo(()=>function(S){return e(d,{...S,childId:s})},[d,s]),C=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(j,{__unstable_focusRing:!0,as:w,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:C,pressed:I,selected:r||y,tone:"inherit",children:g})}export{J as P};
