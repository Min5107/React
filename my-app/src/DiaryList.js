import DiaryItem from './DiaryItem';

const DiaryList = ({diaryList}) => {
    console.log(diaryList);
    return(<div className="DiaryList">
        <h2>일기 내용</h2>
        <h4> {diaryList.length}개 만큼 있습니다 </h4>
        <div>
            {diaryList.map((it) => (
            <DiaryItem key={it.id} {...it}/>
            ))}
        </div>
    </div>
    );
};

DiaryList.defaultProps = {
    diaryList:[]
};

 export default DiaryList;