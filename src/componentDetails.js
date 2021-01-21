import React from 'react'
import faker from 'faker'

const ComponentDetails = (props) => (
  <div>
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
    </div>
    <div className="content">
      <a href="/" className="author">
        {props.author}
      </a>
      <div className="metadata">
        <span className="date">{props.timeAgo}</span>
      </div>
      <div className="text">{props.comment}</div>
    </div>
  </div>
);

export default ComponentDetails