
function Button({ path, children, target }) {

    if (!path) {
        return (
            <button className="btn bg-primary bg-gradient text-light fw-bold mb-2" disabled>{children}</button>
        );
    }
    return (
        <a href={path} target={target} className="btn bg-primary bg-gradient text-light fw-bold mb-2">{children}</a>
    )
}

export default Button