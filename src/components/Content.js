import { Link } from 'react-router-dom';

function Content({ id, authorName, authorPhoto, topicName, date, title, description, image }) {
  return (
    <>
      <div className="content" id={id}>
        <div className="left">
          <div className="top">
            <div className="infotop">
              <img className="author-photo" src={authorPhoto} alt="author-photo" />
              <div className="author-name">{authorName}</div>
              <div className="delemiter">in</div>
              <div className="topicname">{topicName}</div>
              <div className="delemiter">·</div>
              <div className="delemiter">{date}</div>
            </div>
            <Link to={'../post/' + id} id="refFullPost" className="ref-full-post">
              <div className="text">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
              </div>
            </Link>
          </div>
          <div className="infobottom">
            <div className="info">
              <div className="infobutton">Java Script</div>
              <div className="delemiter">12 min read</div>
              <div className="delemiter">·</div>
              <div className="delemiter">Selected for you</div>
            </div>
            <div className="action">
              <img className="actionicon" src="/assets/actionicon.png" alt="actionicon" />
              <img className="actionicon" src="/assets/actionicon.png" alt="actionicon" />
              <img className="actionicon" src="/assets/actionicon.png" alt="actionicon" />
            </div>
          </div>
        </div>
        <Link to={'../post/' + id} id="refFullPost" className="ref-full-post">
          <img className="content-image" src={image} alt="content-image" />
        </Link>
      </div>
    </>
  );
}

export default Content;
