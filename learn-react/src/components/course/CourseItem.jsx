function HeartIconBtn({ onClick, isFavorite = false}) {

  // function handleFavorite(){
  //   alert(isFavorite ? '좋아요' : '모르겠어요');
  // }

    return (<button className="btn" onClick={(e) => onClick(e)}>
      {/* {isFavorite ? (<img className="icon-heart" src="/img/heart-fill-icon.svg" alt="" />) : 
      (<img className="icon-heart" src="/img/heart-icon.svg" alt="" />)} */}

    <img className="btn__img" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"} alt="" />
    </button>);
}

function LinkIconBtn ({link}){
  return(
    <a className="btn" href={link} target="_blank" rel="noreferrer"> 
            <img className="btn__img" src="/img/link-icon.svg" alt=""/>
          </a>
  )
}

function CourseItem({ title, description, thumbnail, isFavorite, link}) {
  function handleFavorite(e){
    e.stopPropagation();
    alert(isFavorite ? ' 좋아요' : '모르겠어요')
  }

  function handleItemClick(){
    alert('Item Click~!');
    window.open(link, '_blank')
  }
  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의 이미지지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
          <HeartIconBtn isFavorite = {isFavorite}  onClick={handleFavorite}/>
          {link && <LinkIconBtn link={link}/>}
          
      </div>
    </article>
  );
}

export default CourseItem;
