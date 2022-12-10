import React from 'react';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: {}
    }
  }

  render() {
    let currentImage = this.props.currentStyle.photos ? this.props.currentStyle.photos[0] : {};
    return (
      <div className="image-gallery">
        <div className="main-image-container">
          <img src={currentImage.url} alt={this.props.currentStyle.name}></img>

          <div className="thumbnails-container">
            {this.props.currentStyle.photos && this.props.currentStyle.photos.map((photo, i) => {
              if (i === this.props.currentStyle.photos.indexOf(currentImage)) {
                return (
                  <div className="img-gallery-thumbnail selected-thumbnail" key={i}>
                    <img src={photo.thumbnail_url}></img>
                  </div>
                );
              } else {
                return (
                  <div className="img-gallery-thumbnail" key={i}>
                    <img src={photo.thumbnail_url}></img>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
  }