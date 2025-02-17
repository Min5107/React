import { Fragment } from "react";
import CourseItem from "./CourseItem";
import Card from "../Card";
function CourseListCard({title, items, onFavorite}) {
    // const [course1, course2, course3] = items
    return (
        <>
        <Card title={title}>
        <div className="courses">
            {items.map((item, index) => (
            <Fragment key={item.id}>
            <CourseItem  {...item} onFavorite ={onFavorite}/> 
            {index != items.length - 1 
            && <hr className="divider"/>} 
            </Fragment>
            ))}
          
           </div>
        </Card>
    </>
    );
  }
  
  export default CourseListCard;
  