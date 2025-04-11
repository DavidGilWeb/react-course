const card = ({title, description}) => {
    return (
        <section>
            <div className="card">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
}

export default card;