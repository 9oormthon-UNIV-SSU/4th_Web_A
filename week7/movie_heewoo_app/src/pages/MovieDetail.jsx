import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail(){
    const {title} = useParams();    // url경로에 포함된 동적 파라미터 가져온다.
    const {state} = useLocation();

    console.log("env", import.meta.env)

    return(
        <div className="page-container">
            <div style={{display:"flex"}}>
                <img 
                    style={{width:"300px", height:"450px"}}
                    src = {`${import.meta.env.VITE_IMG_BASE_URL}${state.poster_path}`}
                    alt="영화 포스터 이미지"
                />
                <div>
                    <div style={{fontSize:"32px", marginLeft:"16px"}}>{title} </div>
                </div>
            </div>
        </div>
    );
}