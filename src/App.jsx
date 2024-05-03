import MyNavbar from "./components/navbar";
import MovieCard from "./components/moviecard";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <main className="p-3">
        <div className="row">
          <div className="col-4">
            <MovieCard title="Ghilli-2004" image="ghilli.jpg" desc="It is the Tamil remake of the Telugu film Okkadu (2003). In the film, a Kabaddi player goes to Madurai to participate in a match, but instead rescues a woman from a gang leader who is obsessed with her."/>
          </div>
          <div className="col-4">
          <MovieCard title="Aruvi-2016" image="aruvi.webp" desc="A gentle girl born and brought up amidst the ever growing eco-social-consumeristic environment finds it difficult to fit in the society. She decides to take it hard on the people."/>

          </div>
          <div className="col-4">
          <MovieCard title="Vinnaithadi Varuvaya-" image="vtv.jpg" desc="Vinnaithaandi Varuvaayaa is a love story about two grown up people. Karthik(Simbu) and Jessie(Trisha)meet each other, one unassuing evening..... And it's love at first sight, for Karthik. Not having seen a beauty such as Jessie in years passed by, Karthik is love struck, dumbstruck, and spellbound...all at once."/>

          </div>
        </div>
        
      </main>
      </div>

  )
}

export default App;
