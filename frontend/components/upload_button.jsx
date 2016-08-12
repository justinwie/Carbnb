const React = require('react');

const UploadButton = React.createClass({
  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results) {
      if (!error) {
        this.props.updateUrl(results[0].url);
      }
    }.bind(this));
  },

  render() {
    return (
      <div className='upload-form'>
        <button className={'upload-button-' + this.props.buttonText[0] } onClick={this.upload}>{this.props.buttonText[1]}</button>
      </div>
    );
  }
});

module.exports = UploadButton;
