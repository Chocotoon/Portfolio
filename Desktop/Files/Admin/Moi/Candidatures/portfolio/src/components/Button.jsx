function Button({ path, children, target }) {

    if (!path) {
        return (
            <span className="btn bg-primary bg-gradient text-light fw-bold mb-2" style={{opacity:0.5, cursor: "auto"}}>{children}</span>
        );
    }
    return (
        <a href={path} target={target} className="btn bg-primary bg-gradient text-light fw-bold mb-2">{children}</a>
    )
}

export default Button