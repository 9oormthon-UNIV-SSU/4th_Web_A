import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {
  const { title } = useParams();   //뒷부분을 가져온다.
  const { state } = useLocation();

  console.log(title);
  console.log(state);
  console.log("env",import.meta.env);

return (
    <div className="page-container">
      <div style={{display: 'flex'}}>
        <img 
          style={{width: '300px', height: '450px'}} 
          src={`${import.meta.env.VITE_IMG_BASE_URL}/${state.poster_path}`} 
          alt='영화 포스터' />
        <div>
          <div style={{ fontSize: "32px", marginLeft:"16px" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}
