
const Card = ({ project }) => {


    return (<div className="card">
        <div className="card-wrap">
            <div className="card-left">
                <div className="card-left-top"><a href={project.link} target='_blank' rel="project site">
                    <div className="job-image" style={{ backgroundImage: `url(${project.image})` }}>
                    </div>
                </a>
                </div>
                <div className="card-left-bottom">
                </div>
            </div>
            <div className="card-middle">
                <div className="card-middle-top"><input type="text" name='name' value={project.name} className={"name"} disabled />
                </div>
                <div className="card-middle-bottom">
                    <div className="description">
                        <textarea name="description" value={project.description} disabled />
                    </div>
                </div>
            </div>
            <div className="card-right">
            </div>
        </div>
    </div>)
}

export default Card;