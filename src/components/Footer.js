import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="frame">
          <div className="menu">
            <p>
              Credits: photos from <Link to="#"> Unsplash.com </Link>, icons from{' '}
              <Link to="#"> Icons8 </Link>, graphics from <Link to="#"> craftwork.design </Link>.
            </p>
          </div>
        </div>
        <div className="menu">Made with ✨❤️ at nFactorial in 2022.</div>
      </footer>
    </>
  );
}

export default Footer;
