import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import Nightmode from '../Nightmode';

const Playlist = props => {
  return (
    <div>
      <Nightmode />
      <PlaylistHeader />
      <PlaylistItems />
    </div>
  );
};

export default Playlist;
