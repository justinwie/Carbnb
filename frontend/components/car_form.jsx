const React = require('react');
const SessionStore = require('../stores/session_store')
const CarActions = require('../actions/car_actions')
const UploadButton = require('./upload_button')

const CarForm = React.createClass({
  getInitialState() {
    return { lat: 0, lng: 0, manufacturer: "", model: "", year: null, style: "", color: "", price: null, description: "", imageFile:null, imageUrl:null, owner_id: SessionStore.currentUser().id }
  },

  componentDidMount(){
    this.geocoder = new google.maps.Geocoder();
    const input = document.getElementById('car_address');
    const autocomplete = new google.maps.places.Autocomplete(input);
    this.autocompleteListener = google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const address = autocomplete.getPlace();
      this.setState({ lat: address.geometry.location.lat(), lng: address.geometry.location.lng()})
    });
  },

  _success(){
    alert('Success! Your car has been uploaded')
  },

  _handleSubmit(e){
    e.preventDefault();
    
    var formData = new FormData();
    formData.append("car[lat]", this.state.lat)
    formData.append("car[lng]", this.state.lng)
    formData.append("car[manufacturer]", this.state.manufacturer)
    formData.append("car[model]", this.state.model)
    formData.append("car[year]", this.state.year)
    formData.append("car[style]", this.state.style)
    formData.append("car[color]", this.state.lat)
    formData.append("car[price]", this.state.price)
    formData.append("car[description]", this.state.description)
    formData.append("car[owner_id]", this.state.owner_id)
    formData.append("car[image]", this.state.imageFile)

    CarActions.createCar(formData, this._success)
  },

  _handleUpdate(prop){
    return (e) => this.setState({[prop]: e.target.value})
  },

  updateFile(e){
    let file = e.currentTarget.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
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
            type='text'
            placeholder='address'
            id='car_address'
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

        <img src={this.state.imageUrl}></img>
        <input type='file' className='picUploadButton' onChange={this.updateFile}></input>
        <button className='carFormButton' type='submit'>Add Your Car</button>
        </form>
      </div>
    );
  }
});


module.exports = CarForm;
