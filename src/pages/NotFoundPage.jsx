import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <section>
            This page doesn't exist. Go <Link to="/">home</Link>
        </section>
    )
}

export {NotFound}