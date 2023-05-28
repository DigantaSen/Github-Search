import React from "react";

const GithubRepos = ({ data }) => {
    return (
        <>
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card-header">
                                <p className="h5 test-primary" >Github Repos Details</p>
                            </div>
                            <div className="lead">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aliquid expedita impedit cupiditate quas quam a cumque consequatur? Temporibus voluptatum aperiam placeat? Distinctio velit quo eius sequi qui dolorum vel. Sed dicta saepe necessitatibus, praesentium placeat recusandae quidem beatae vitae cumque excepturi sapiente iusto in molestiae magni laudantium, vel aliquam.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h4">Your repositories</p>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {data.map((repo) =>{
                                            return (
                                                <>
                                                    <li className="list-group-item">
                                                        <div className="d-flex justify-content-between">
                                                            <span className="h5">
                                                                <a href={repo.html_url}>{repo.name}</a>
                                                            </span>
                                                            <span>
                                                                <span className="badge bg-success me-5">
                                                                    {repo.stargazers_count} stars
                                                                </span>
                                                                <span className="badge bg-warning">
                                                                    {repo.watchers_count} watchers
                                                                </span>
                                                            </span>
                                                            
                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GithubRepos;