import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dummy } from './movieDummy'
import Movie from './components/Movie'


function App() {
  return (
    <div>
        <div className = "app-container">
          {
            dummy.results.map((item) => {
              return (
                <Movie 
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}

                />
              )
            })
          }
        </div>
    </div>
  )
}
export default App
