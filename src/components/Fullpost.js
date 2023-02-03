import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
let data = require('../data/data.json');

function Fullpost() {
  const params = useParams();

  const id = params.id ? params.id : 1;

  return (
    <>
      <section className="post-header">
        <div id="returnMainPageBtn" className="post-bottom-logo">
          <Link to="/">
            <img className="post-left-img" src="/assets/left.png" alt="left" />
          </Link>
        </div>
      </section>
      <main className="post-main">
        <div className="post-content">
          <div className="post-frame">
            <div className="post-infotop">
              <img className="post-author-photo" src={data[id].authorPhoto} alt="author-photo" />
              <div className="post-info">
                <div className="post-author-name">{data[id].authorName}</div>
                <div className="post-info-text">
                  <div className="post-delemiter">{data[id].date}</div>
                  <div className="post-delemiter">·</div>
                  <div className="post-delemiter">12 min read</div>
                  <div className="post-delemiter">·</div>
                  <div className="post-delemiter">Member-only</div>
                </div>
              </div>
            </div>
            <div className="post-socialmedia">
              <div className="post-socialmediabtns">
                <img className="post-iconlink" src="/assets/linkedin.png" alt="linkedin" />
                <img className="post-iconlink" src="/assets/facebook.png" alt="facebook" />
                <img className="post-iconlink" src="/assets/twitter.png" alt="twitter" />
              </div>
            </div>
          </div>

          <div className="post-text">
            <div className="post-title">{data[id].title}</div>
            <div className="post-description">{data[id].description}</div>
          </div>
          <img
            className="post-content-image-large"
            src={data[id].imageLarge}
            alt="content-image-large"
          />
          <div className="post-main-text">
            <div className="post-main-text-title">{data[id].subHeader}</div>
            <div className="post-main-text-description">{data[id].fullText}</div>
          </div>
          <div className="post-infobottom">
            <div className="post-infobuttons">
              <div className="post-likes">
                <img className="post-likes-img" src="/assets/heart.png" alt="likes" />
                <div className="post-likescounter">180</div>
              </div>
              <div className="post-likes">
                <img className="post-likes-img" src="/assets/bubble.png" alt="likes" />
                <div className="post-likescounter">12</div>
              </div>
            </div>
            <div className="post-bookmarkbuttons">
              <img className="post-likes-img" src="/assets/comeicon.png" alt="comeicon" />
              <img className="post-likes-img" src="/assets/bookmark.png" alt="bookmark" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Fullpost;
