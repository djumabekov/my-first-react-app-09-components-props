import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

let data = require('../data/data.json');

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        {data.map((post, key) => (
          <Content key={key} {...post} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Main;
