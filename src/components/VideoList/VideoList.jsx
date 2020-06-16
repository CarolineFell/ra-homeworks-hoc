import React from 'react';
import shortid from 'shortid';
import Video from '../Video/Video';

function VideoList(props) {
  return props.list.map(item => (
    <Video url={item.url} date={item.date} key={shortid.generate()} />
  ));
};

export default VideoList;