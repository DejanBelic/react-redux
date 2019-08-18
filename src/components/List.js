import React from 'react'
import { connect } from 'react-redux';

 function List({ articles }) {
    return (
        <div>
            <h2>List component</h2>
            <ul className="list-group list-group-flush">
            {
                articles.map(article => (
                    <li className="list-group-item" key={article.id}>
                    {article.title}
                  </li>
                ))
            }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(List);