import { useState, useContext } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { DiaryStateContext } from "../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Home = () => {
    const [curDate, setCurDate] = useState(new Date());
    console.log(curDate);

    const curText = `${curDate.getFullYear()} 년 ${curDate.getMonth() + 1} 월` 

    const handlePrevMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
        )
    };

    const handleNextMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
        )
    };

    const { dummyData } = useContext(DiaryStateContext);
    const [startDate, setStartDate] = useState(new Date());
    
  
    
    return (<div> 

         <div>
            <MyHeader leftChild={<MyButton text={"<"} onClick={handlePrevMonth}/>} 
        headText={curText} 
        rightChild={<MyButton text={">"} onClick={handleNextMonth}/>}/>
            </div>
            <DatePicker
  
  selected={startDate} // 처음에 맨 위에 표시된 input에 나오는게 지금 날짜
  onChange={(date) => setStartDate(date)} // 내가 선택한 날짜가 맨 위에 표시 됨
  showTimeSelectOnly
  showTimeSelect // 시간 나오게 하기
  timeFormat="HH:mm" //시간 포맷 
  timeIntervals={30} // 15분 단위로 선택 가능한 box가 나옴
  timeCaption="time"
  dateFormat="HH:mm"

 />
            {dummyData.map(it => (
  <div key={it.id}>
    <p>{it.content}</p>
    <p>{it.author}</p>
  </div>
))}
            
           
        </div>

       
    );
};

export default Home;