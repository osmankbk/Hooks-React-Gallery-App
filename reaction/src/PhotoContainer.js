import React from 'react';
import NotFound from './NotFound';
import Image from './Image';

const PhotoContainer = (props) => {
  
    const loading = props.loading;
    let photos;
    let title = props.title;
    const pictures = props.data;
    if (pictures.length < 1) {
      photos = <NotFound />
    } else {
       photos = pictures.map(photo =>
          <Image
            key={photo.id.toString()}
            server={photo.server}
            secret={photo.secret}
            farmId={photo.farm}
            id={photo.id}
            />
      );
    }
    return(
      <div className="photo-container">
        <h2>Images Of {title} </h2>
        <ul>
          {loading ? <h2>...Loading</h2> : photos }
        </ul>
      </div>
    );
  }

export default PhotoContainer;
