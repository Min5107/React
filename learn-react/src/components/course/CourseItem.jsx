function CourseItem() {

  const coure = {
    title : '입문자를 위한, HTML&CSS 웹 개발 입문',
    description : '웹 개발에 필요한 기본 지식을 배웁니다.',
    image : './img/htmlcss.png',
    alt : '강의 이미지'
  };
  
  const isEmpty = false;

  if(isEmpty){
    return(
      <>
      <p>강의가 없습니다.</p>
      </>
    )
  }

  return (
    <article className="course">
      <img className="course__img" src={coure.image} alt={coure.alt} />
      <div className="course__body">
        <div className="course__title">
          {coure.title}
        </div>
        <div className="course__description">
          {coure.description}
        </div>
      </div>
    </article>
  );
}

export default CourseItem;
