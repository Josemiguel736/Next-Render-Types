

import { Characters} from "@/components/models/Characters.model"
import Link from "next/link"


    const getCharacters = async () => {
        const response = await fetch ("https://dragonball-api.com/api/characters")
        const data:Characters =await response.json()
        return data.items     
    }

const DragonBallApiPage = async () => {

    const  characters = await getCharacters()

    return (
        <div className="bg-slate-100 min-h-screen">
        <header className="bg-slate-800 text-amber-50 text-center text-2xl">
            Dragon Ball Characters
        </header>
        <main className="max-w-6xl mx-auto py-5">
           {
            characters.length == 0 && (
               <p>No se encontraron personajes</p>
            )
           }
             {
            characters.length > 0 && (
                <div className="grid grid-cols-4 gap-5 text-center p-5 ">{
               characters.map((character) => {
                return (
                <div className="hover:font-bold font-normal" key={character.id}> 
                <Link href={`/dr-dynamic/${character.id}`}>
                {character.name}
                <img className="hover:h-80 h-60 mx-auto" src={character.image} alt={`imagen de ${character.name}`} />
                </Link>
                </div>
                )
               }) }
            </div>
            )
           }

        </main>
        </div>
    )
}

export default DragonBallApiPage