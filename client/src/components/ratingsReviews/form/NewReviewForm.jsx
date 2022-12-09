import React from 'react'

export default class NewReviewForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        body: ''
        // name: '',
        // helpfulness: ''
      }

      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {

  }
  handleChange(event) {
    this.setState({body: event.target.value})
   }

  handleSubmit(event) {
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>Add Review</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            New Review
            <input type="text" value={this.state.body} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}

