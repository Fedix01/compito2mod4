import './App.css';
import BooksTemplate from './components/BooksTemplate/BooksTemplate';
import MyFooter from './components/MyFooter/MyFooter';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Welcome from './components/Welcome/Welcome';
import data from './data/fantasy.json';

function App() {
  return (
    <>
      <MyNavbar />
      <Welcome />
      <BooksTemplate books={data} />
      <MyFooter />
    </>
  );
}

export default App;
