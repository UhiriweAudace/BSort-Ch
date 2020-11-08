import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [data, setData] = React.useState(articles.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1));

    const onMostUpvote = () => {
        const mostUpvote = articles.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1);
        setData([...mostUpvote])
    }
    const onMostRecent = () => {
        const mostRecent = articles.sort((c, d) => new Date(c.date) < new Date(d.date) ? 1 : -1)
        setData([...mostRecent]);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={ onMostUpvote}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={onMostRecent}>Most Recent</button>
            </div>
            <Articles articles={data} />
        </div>
    );

}

export default App;
