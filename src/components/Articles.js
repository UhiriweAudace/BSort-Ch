import React from "react";

function Articles({ articles }) {
    const ArticleList =
        articles &&
        articles.map((article, index) => (
            <tr data-testid="article" key={index}>
                <td data-testid="article-title">{article.title}</td>
                <td data-testid="article-upvotes">{article.upvotes}</td>
                <td data-testid="article-date">{article.date}</td>
            </tr>
        ));

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody> {ArticleList} </tbody>
            </table>
        </div>
    );
}

export default Articles;
