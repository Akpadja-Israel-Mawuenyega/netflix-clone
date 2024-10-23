import './App.css';
import Row from './components/Row';
import requests from "./requests";

function App() {
  return (
    <div className='App'>
      <h2>Hey let's build a netflix clone front end!</h2>
      <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending}/>
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated}/>
      <Row title={""} />
    </div>
  );
}



export default App;
