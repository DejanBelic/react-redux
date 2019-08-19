import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from '../js/actions/index';

class Posts extends Component {
  
    componentDidMount() {
        console.log(getData)
        this.props.getData()
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      articles: state.remoteArticles.slice(0, 10)
    };
  }
  export default connect(
    mapStateToProps,
     { getData } 
  )(Posts);