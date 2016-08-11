const React = require('react');
const Moment = require('moment');
const DatePicker = require('react-datepicker');

const Dates = React.createClass({
  render() {
    return (
      <DatePicker
        selected={this.props.date}
        onChange={this.props.action}
        placeholderText={this.props.placeholder}
        className='date-dropdown'
      />
    );
  }
});

module.exports = Dates;
