import React, { Component } from "react";
import Panel from "../Shared/Panel";
import PostMeta from "./PostMeta";

class Post extends Component {
  componentDidMount() {
    this.props.handleActive();
  }
  render() {
    const imageUrl =
      "https://images.unsplash.com/photo-1505841392587-67bfc23db3f9?dpr=1&auto=compress,format&fit=crop&w=1189&h=&q=80&cs=tinysrgb&crop=";
    return (
      <Panel>
        <div className="post-image">
          <img src={imageUrl} alt="postimage" />
        </div>
        <div className="post-main">
          <div className="post-title">Backpacking across Italy</div>
          <PostMeta author="Carolyn Rivera" date="Jul 6th 2017" readTime="8" />
          <div className="post-content">
            <p className="post-emphasis">
              Sint dicta an quo, has purto erroribus eu. Congue conceptam in
              usu, duo et viderer dolorum. Et populo denique sed, mel putent
              voluptatum id.
            </p>
            <p>
              At cum volumus accumsan intellegam, blandit delectus sea eu, malis
              paulo regione et nam. Sit ipsum neglegentur at, ei rebum vitae
              vivendo his.{" "}
              <span className="link">
                Quot facilisis at pri, mei zril cotidieque ex.{" "}
              </span>Qui id porro meliore recusabo, vim dicam moderatius ei. Et
              est velit elitr copiosae. Id nominati delicata periculis usu.
            </p>
            <iframe
              title="youtube"
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/rkby8QrWMhs?rel=0"
              frameBorder="0"
              allowFullScreen
            />
            <div className="post-subtitle">Qui id porro meliore recusabo</div>
            <p>
              Et est velit elitr copiosae. Id nominati delicata periculis usu.{" "}
              <b>Est possit prompta eleifend at, qui doming iriure ne.</b>
            </p>
            <blockquote className="post-quote">
              Pericula pertinacia eu eum, inermis consulatu mea cu. Eum at
              officiis definitiones, commodo deleniti postulant has cu.
            </blockquote>
            <p>
              Semper inimicus mediocrem sea at, no case quaerendum nec. Sed
              posse noluisse an. Invenire tractatos eu cum. Ocurreret omittantur
              reformidans ut per, alterum aliquam reprehendunt ius ad.
            </p>
            <div className="post-subextra">
              <span className="post-tagged">TAGGED IN:</span>
              <span className="link"> TRAVEL </span>
              <span className="link">· NO COMMENTS</span>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
}

export default Post;
