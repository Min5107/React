const DiaryItem = ({id, author, content, created_date, emotion}) => {
    return (
    <div className="DiaryItem">
        <div className="info">
            <span>
            <span>작성자 : {author} | 감정 점수 : {emotion} |</span>
            
            </span>
            <br/>
            <span className="date">{new Date(created_date).toLocaleDateString()}</span>
        </div>
        <div className="content">{content}</div>
    </div>
);
};

export default DiaryItem;