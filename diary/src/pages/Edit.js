import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

    const navigate = useNavigate();
    const [searchParmas, setSearchParams] = useSearchParams();
    const id = searchParmas.get("id");
    console.log("id: ", id);
    const mode = searchParmas.get("mode");
    console.log("mode: ", mode);

    return (<div> 
        <h1>Edit</h1> 
        <p>이곳은 Edit 입니다</p>
        <button onClick={()=> setSearchParams({who: "winterlood"})
        }>QS 바꾸기</button>

        <button onClick={() => {
            navigate("/home")
        }}>홈 버튼 </button>

<button onClick={() => {
            navigate(-1)
        }}>뒤로가기</button>
        </div>
    );
};
export default Edit;