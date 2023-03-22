import { Link } from "react-router-dom"

export const Page404 = () => {
    return(
        <>
            <h1>404 page</h1>
            <p>This page is not present</p>
            <Link to={'/'}>Home</Link>
        </>
    )
}