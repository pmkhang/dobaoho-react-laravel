const i=(o,t="0",r="",e=[])=>{const a=o.filter(n=>n.parent_id==t);for(const n of a){const c={id:n.id,name:`${r}${n.name}`};e.push(c),i(o,n.id,`${r}-- `,e)}return e};export{i as r};
