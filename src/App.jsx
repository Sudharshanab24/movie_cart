import MyNavbar from "./components/navbar";
import MovieCard from "./components/moviecard";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  const [movieList, setmovieList] = useState([]);

  useEffect(() => {

    async function callApi() {
      const res = await fetch('/v1')
      const moviedata = await res.json()
      setmovieList(moviedata.results)
    }

    callApi()

  }, [])

  return (
    <div>
      <MyNavbar />
      <main className="p-3">
        <div className="row">
          {
            movieList.map((movie) => {
              return <div className="col-4" key={movie.id}>
                <MovieCard title={movie.title} image={"https://image.tmdb.org/t/p/original/" + movie.poster_path} desc={movie.overview.substring(0,150)} />

              </div>


            })
          }

        </div>

      </main>
    </div>

  )
}

export default App;
