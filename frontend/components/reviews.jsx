const React = require('react');

const Reviews = React.createClass({
  render() {
    return (
      <div className='review'>
        <ul>
          <li className='rating'>Rating: {this.props.review.rating}</li>
          <li className='description'>{this.props.review.description}</li>
        </ul>
      </div>
    )
  }
});

module.exports = Reviews;
