import React, { useContext } from "react";
import { DiaryStateContext } from "./App";
import DiaryItem from './DiaryItem';

const DiaryList = (/*{diaryList, onRemove, onEdit}*/) => {
    const diaryList = useContext(DiaryStateContext);
    console.log(diaryList);
    return(<div className="DiaryList">
        <h2>일기 내용</h2>
        <h4> {diaryList.length}개 만큼 있습니다 </h4>
        <div>
            {diaryList.map((it) => (
                <DiaryItem key={`diaryitem_${it.id}`} {...it} />
            // <DiaryItem onEdit={onEdit} key={it.id} {...it} onRemove={onRemove}/>
            ))}
        </div>
    </div>
    );
};

DiaryList.defaultProps = {
    diaryList:[]
};

 export default DiaryList;