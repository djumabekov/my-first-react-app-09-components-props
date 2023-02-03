import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Page404() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="post-header">
          <div id="returnMainPageBtn" className="post-bottom-logo">
            <Link to="/">
              <img className="post-left-img" src="/assets/left.png" alt="left" />
            </Link>
          </div>
        </section>
        <h1>Страница не найдена</h1>
      </main>
      <Footer />
    </>
  );
}

export default Page404;
