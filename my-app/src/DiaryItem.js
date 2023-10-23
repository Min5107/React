import { useState } from "react";

const DiaryItem = ({id, author, content, created_date, emotion, onRemove}) => {

const[isEdit, setIsEdit] = useState(false);
const toggleIsEdit = () => setIsEdit(!isEdit);

    const handleRemove = () => {
        console.log(id);
            if(window.confirm(`${id} 번째 일기를 정말 삭제하겠습니까?`)){
                onRemove(id);
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
        <div className="content">{isEdit ? (<>
        <textarea/>
        </>) : (<> {content}</>
        )}
        </div>
        <button onClick={handleRemove}>삭제 버튼</button>
        <button onClick={toggleIsEdit}>수정 버튼</button>
    </div>
);
};

export default DiaryItem;