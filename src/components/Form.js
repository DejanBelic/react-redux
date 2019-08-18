import React from 'react'
import uuidv1 from 'uuid';
import { addArticle } from '../js/actions/index';
import { connect } from 'react-redux';

class  ConnectedForm extends React.Component {
        constructor(props){
            super(props)
            this.state  = {
                title : ''
            }

            this.submitHandler = this.submitHandler.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }


      submitHandler = event => {
        event.preventDefault();
        const id = uuidv1();
        const { title } = this.state;

        this.props.addArticle({ id, title })
        this.setState({ title: ""})
    }

     handleChange = (event)  => {
        this.setState({ [event.target.id]: event.target.value });
      }


    render() {
        const { title } = this.state;
    return (
        <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={this.handleChange}
                />
            </div>
            <button className="btn btn-success btn-lg" type="submit">SAVE</button>
        </form>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

