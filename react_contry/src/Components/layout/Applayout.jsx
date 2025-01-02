import { Outlet } from "react-router-dom"
import { Header } from "./HEader"
import { Footer } from "./Footer"

export const AppLayout =() =>{
    return(<>
    <Header/>
    <Outlet/>
    <Footer/>
    </>)
}