import React, { useState } from "react";
const Tabs = ({tabs}) => {
//   console.log(tabs);
const [list,setList] = useState(tabs)
const [content1 , setContent1] = useState("");
const [content2 , setContent2] = useState("");

// console.log(list);
return ( <div>
    <ul>
 {list[0].map(item => {
   return <li key={item.id} onClick={() => setContent1(item.content)}>{item.title}</li>
 })}
 {content1 && <p>{content1}</p>}
 </ul>
 <ul>
 {list[1].map(item => {
   return <li key={item.id} onClick={() => setContent2(item.content)}>{item.title}</li>
 })}
  {content2 && <p>{content2}</p>}
 </ul>
</div>
)
}
export default Tabs