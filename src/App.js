
import "./App.css";
import Row from "./row/Row";
import requests from "./requests";
import Banner from "./banner/Banner";
import Nav from "./nav/Nav";

// const baseURL="https://api.themoviedb.org/3"

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row
				title="Documentaries Movies"
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
}

export default App;
