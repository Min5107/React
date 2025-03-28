import { useEffect, useState } from 'react';

function Courses(){
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState('all'); // all
    useEffect(()=>{
        
        fetch(`data/courses_${filter}.json`)
        .then((res) => res.json())
        .then((data)=>{
            console.log('✅ 데이터 조회 성공 ')
            setList(data);
        })

        return() => {
            console.log('❎ 연결 해제~!')
        }
    },[filter])

    return(
        <div>
            <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === 'all'}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === 'favorite'}
        onChange={(e) => setFilter(e.target.value)}
      />
            <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
        </div>
    )
}

function AppEffect(props) {

    // 1] Dom 조작하기기
    // useEffect(() => {
    //     const $h2 = document.querySelector('#title');
    //     console.log('$h2: ' ,$h2)
    //     $h2.textContent = 'Data Fetching'
    // },[]);
    
    const [show, setShow] = useState(true);
    return (
        <div>
            <h2 id="title">데이터 가져오기</h2>
            <button onClick={() => setShow(!show)}>toggle</button>
            <hr/>
            {show && <Courses/>}
        </div>
    );
}

export default AppEffect;