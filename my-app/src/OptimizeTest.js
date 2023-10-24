// import React, {useEffect, useState} from "react";

/* 옵티마이저 연동 테스트 A */

// const Textview = React.memo(({ text }) => {
//     useEffect(()=>{
//         console.log(`Update :: Text : ${text}`);
//     });
//     return <div>{text}</div>
// });

// const CountView = React.memo(({count}) => {
//     useEffect(()=>{
//         console.log(`Update :: Count : ${count}`);
//     });
//     return <div>{count}</div>

// });
// const OptimizeTest = () => {
//     const [count, SetCount] = useState(1);
//     const [text, SetText] = useState("");
//     return(
//         <div>
//             <div>
//             <h2>count</h2>
//             <CountView count={count}/>
//             <button onClick={(e) => SetCount(count + 1)}> + </button>
//         </div>
//         <div>
//         <h2>text</h2>
//             <Textview text={text}/>
//             <input value={text} onChange={(e) => SetText(e.target.value)}/>
//         </div>
//         </div>

//     );
// };



/* 옵티마이저 연동 테스트 B */


// const CounterA = React.memo(({count}) => {
//     useEffect(()=> {
//         console.log(`CountA Update - count : ${count}`);
//             });
//             return <div>{count}</div>;
// });

// const CounterB = (({obj}) => {
//     useEffect(()=> {
//         console.log(`CountA Update - count : ${obj.count}`);
//             });
//             return <div>{obj.count}</div>;
// });

// const araEqual = (prevProps, nextProps) => {
//     if(prevProps.obj.count === nextProps.obj.count){
//         return true;
//     } return false;
// };

// const MemoizedCounterB = React.memo(CounterB, araEqual);

// const OptimizeTest = () => {
//     const [count, setCount] = useState(1);
//     const [obj, setObj] = useState({
//         count:1
//     });

//     return(
//         <div>
//             <div>
//             <h2>Counter A</h2>
//             <CounterA count={count}/>
//             <button onClick={(e) => setCount(count)}> A Button </button>
//         </div>
//         <div>
//         <h2>Counter B</h2>
//             <MemoizedCounterB obj={obj}/>
//             <button onClick={(e) => setObj({count : 1})}> A Button </button>
//         </div>
//         </div>

//     );
// };

// export default OptimizeTest;