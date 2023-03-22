import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>
            <h1>Home component</h1>
            <p>This is my Home page</p>
            <p>This page describe information about our software</p>
            <Link to={'/about'}>About</Link>
        </>
    )
}