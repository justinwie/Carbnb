const React = require('react');
const SessionStore = require('../stores/session_store')
const CarActions = require('../actions/car_actions')
const UploadButton = require('./upload_button')

const CarForm = React.createClass({
  getInitialState() {
    return { lat: 0, lng: 0, manufacturer: "", model: "", year: null, style: "", color: "", price: null, description: "", image_url: "", owner_id: SessionStore.currentUser().id, buttonText: ['blank', 'Upload Picture'] }
  },

  _success(){
    alert('Success! Your car has been uploaded')
  },

  updateUrl(url) {
    this.setState({ image_url: url, buttonText: ['success', 'Picture successfully uploaded!'] });
  },

  _handleSubmit(){
    const data = {
      lat: this.state.lat,
      lng: this.state.lng,
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      year: this.state.year,
      style: this.state.style,
      color: this.state.color,
      price: this.state.price,
      description: this.state.description,
      image_url: this.state.image_url,
      owner_id: this.state.owner_id
    }

    CarActions.createCar(data, this._success)
  },

  _handleUpdate(prop){
    return (e) => this.setState({[prop]: e.target.value})
  },

  render(){
    return(
      <div className="carForm">
        <h1>Host Your Car</h1>
        <form onSubmit={this._handleSubmit}>
          <input
            type='text'
            placeholder='manufacturer'
            value={this.state.manufacturer}
            onChange={this._handleUpdate('manufacturer')}
            className='carFormInput'
          />

          <input
            type='text'
            placeholder='model'
            value={this.state.model}
            onChange={this._handleUpdate('model')}
            className='carFormInput'
          />

          <input
            type='number'
            placeholder='year'
            value={this.state.year}
            onChange={this._handleUpdate('year')}
            className='carFormInput'
          />

          <input
            type='text'
            placeholder='style (sedan, coupe, etc.)'
            value={this.state.style}
            onChange={this._handleUpdate('style')}
            className='carFormInput'
          />

          <input
            type='number'
            placeholder='price'
            value={this.state.price}
            onChange={this._handleUpdate('price')}
            className='carFormInput'
          />

          <input
            type='text'
            placeholder='color'
            value={this.state.color}
            onChange={this._handleUpdate('color')}
            className='carFormInput'
          />

          <textarea
            placeholder='description'
            value={this.state.description}
            onChange={this._handleUpdate('description')}
            className='carFormInput'
          />

          <input
            type='text'
            placeholder='image_url'
            value={this.state.image_url}
            onChange={this._handleUpdate('image_url')}
            className='carFormInput'
          />

        <UploadButton updateUrl={this.updateUrl} buttonText={this.state.buttonText}/>

        <button className='carFormButton' type='submit'>Add Your Car</button>
        </form>
      </div>
    );
  }
});


module.exports = CarForm;
