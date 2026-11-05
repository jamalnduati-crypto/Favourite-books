import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';

const books = [
  { id: 1, title: 'All i want for christmas', author: 'Samsung usa' },
  { id: 2, title: 'Spcace chronicles', author: 'apple' },
  { id: 3, title: 'The bad boys', author: 'tripple gaming' },
];

function App() {
  return (
    <>
      <Header />
      <BookList books={books} />
      <Footer />
    </>
  );
}

export default App;