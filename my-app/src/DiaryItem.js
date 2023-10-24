import { useRef, useState } from "react";

const DiaryItem = ({onEdit, id, author, content, created_date, emotion, onRemove}) => {

const[isEdit, setIsEdit] = useState(false);
const toggleIsEdit = () => setIsEdit(!isEdit);
const localContentInput = useRef();

const [localContent, setLocalContent] = useState(content);

    const handleRemove = () => {
        console.log(id);
            if(window.confirm(`${id} 번째 일기를 정말 삭제하겠습니까?`)){
                onRemove(id);
            }
    };

    const handleEdit = () => {
        toggleIsEdit(false);
        setLocalContent(content);
    }

    const handelEdit = () =>{
        if(localContentInput < 5){
            localContentInput.current.focus();
            return
        }

        if(window.confirm(`${id}를 정말 수정하겠습니까?`)){
            onEdit(id, localContent);
            toggleIsEdit();
        }
    };

    return (
    <div className="DiaryItem">
        <div className="info">
            <span>
            <span>작성자 : {author} | 감정 점수 : {emotion} |</span>
            
            </span>
            <br/>
            <span className="date">{new Date(created_date).toLocaleDateString()}</span>
        </div>
        <div className="content" useRef={localContentInput} >
            {isEdit ? <textarea value={localContent} onChange={(e) => setLocalContent(e.target.value)}/> : content}
        </div>
        {isEdit ? (
    <div> 
        <button onClick={toggleIsEdit}>수정 취소</button>  
        <button onClick={handelEdit}>수정 완료</button>
    </div>
) : (
    <div> 
        <button onClick={handleRemove}>삭제 버튼</button>
        <button onClick={handleEdit}>수정 버튼</button>
    </div>
)}

    </div>
);
};

export default DiaryItem;