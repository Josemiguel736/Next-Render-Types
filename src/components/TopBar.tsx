import { Navbar } from "./Navbar"


export const TopBar =() => {

    return (
        <header className="bg-slate-900 text-amber-50 p-5 text-center">
            <h1 className="mb-4 ">Modos de renderizado con NextJS</h1>
            <Navbar/>
        </header>
    )
}