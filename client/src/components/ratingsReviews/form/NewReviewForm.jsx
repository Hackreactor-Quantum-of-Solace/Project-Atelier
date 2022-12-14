import React from 'react'

export default class NewReviewForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        showForm: false,
        name: "",
        date: "",
        summary: "",
        body: ""
      }

      this.handleClickForm = this.handleClickForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderReviewForm = this.renderReviewForm.bind(this);
  }

  handleClickForm(event) {
    //want form to appear
    this.setState({showForm: true});
    console.log(this.state.showForm, 'line 22')
    // this.renderReviewForm();


  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    //need multi targets
   }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name)
    console.log(this.state.date)
    console.log(this.state.summary)
    console.log(this.state.body)
    //axios.post request
  }

  renderReviewForm () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" placeholder="input name" value={this.state.name} onChange={this.handleChange}/>
            <br />
            Date:
            <input name="date" type="text" placeholder="input date" value={this.state.date} onChange={this.handleChange}/>
            <br />
            Review Summary:
            <input name="summary" type="text" placeholder="input summary" value={this.state.summary} onChange={this.handleChange}/>
            <br />
            Review Body:
            <input name="body" type="text" placeholder="input review" value={this.state.body} onChange={this.handleChange}/>
            <br />
          </label>

        </form>
        <button type="button" onClick={this.handleClick}>Submit</button>
      </div>
    )
  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.handleClickForm}>Add Review</button>
        {this.state.showForm && this.renderReviewForm()}
      </div>
    )
  }
}

