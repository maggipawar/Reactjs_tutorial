import { Link } from "react-router-dom"

export const About = () => {
    return(
        <>
            <h1>About component</h1>
            <p>This is my About page</p>
            <p>This page describe information about our software</p>
            <Link to={'/'}>Home</Link>
        </>
    )
}