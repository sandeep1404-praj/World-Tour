import { useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    const error = useRouteError()
    return(<>
    <h1>I am Error Page</h1>
    </>)
}