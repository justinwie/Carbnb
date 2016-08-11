const React = require('react');
const SessionStore = require('../stores/session_store');
const CarStore = require('../stores/car_store');
const CarActions = require('../actions/car_actions')

const ReviewForm = React.createClass({
  getInitialState(){
    return { description: "", rating: 0 }
  },

  componentDidMount() {
    CarStore.addListener(this._handleChange)
  },

  _handleChange(){
    this.setState({ description: "", rating: 0 })
  },

  _handleRating(e){
    e.preventDefault();

    this.setState({rating: e.target.value})
  },

  _handleDescription(e){
    e.preventDefault();

    this.setState({ description: e.target.value})
  },

  _handleSubmit(e){
    e.preventDefault();

    const data = {
      description: this.state.description,
      rating: parseInt(this.state.rating),
      car_id: this.props.car.id
    };
    CarActions.createReview(data)
  },

  render(){
    return(
      <div className='review_form'>
        <h1>submit a review</h1>
        <form onSubmit={this._handleSubmit}>
          <select
            className='review_rating'
            value={this.state.rating}
            onChange={this._handleRating}
            >
            <option disabled value='Select a rating'>Please select a rating</option>
            <option value='1' >1</option>
            <option value='2' >2</option>
            <option value='3' >3</option>
            <option value='4' >4</option>
            <option value='5' >5</option>
          </select>

          <textarea
            className='review_form_text'
            placeholder='Write your review here'
            value={this.state.description}
            onChange={this._handleDescription}
          />
        <button type='submit'>submit!</button>
        </form>
      </div>
    )
  }
})
module.exports = ReviewForm;
