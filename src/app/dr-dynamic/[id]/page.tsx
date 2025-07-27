import { Character } from "@/components/models/Character.model";

interface Props {
  params: Promise<{ id: string }>;
}

const getCharacterById = async (id: string) => {
  const result = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  const data: Character = await result.json();
  return data;
};

const SingleCharacterById = async ({ params }: Props) => {
  const { id } = await params;
  const character = await getCharacterById(id);
  return (
    <div className="bg-slate-100">
      <header className="bg-slate-800 text-amber-50 text-center text-2xl">
        Dragon Ball Characters
      </header>
      <div className="bg-amber-500 flex flex-col items-center min-h-[65vh] p-5">
        <div className="flex items-center gap-x-44">
          <img
            src={character.image}
            alt={`imagen de ${character.name}`}
            className="transition-transform duration-300 transform hover:scale-150 max-h-[800px] z-50 relative"
          />
          <div>
            <h2 className="font-bold text-5xl p-4 mb-4 border-2 border-black rounded-2xl ">
              {character.name}
            </h2>
            <ul className="bg-amber-600 rounded-2xl p-4 text-2xl">
              <li className="text-amber-50">
                <p>
                  <span className="font-bold">Ki:</span> {character.ki}
                </p>
              </li>
              <li className="text-amber-50">
                <p>
                  <span className="font-bold">Max ki: </span> {character.maxKi}
                </p>
              </li>
              <li className="text-amber-50">
                <p>
                  <span className="font-bold">Raza: </span> {character.race}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 w-screen" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {character.transformations &&
            character.transformations.length > 0 &&
            character.transformations.map((transformation) => (
              <div key={transformation.id} className="flex flex-col items-center">
                <h2 className="font-bold text-2 p-4 mb-4 border-2 border-black rounded-2xl ">
                  {transformation.name}
                </h2>
                <div className="w-[150px] aspect-[3/4] overflow-hidden">
  <img
    src={transformation.image}
    alt={`imagen de ${transformation.name}`}
    className="w-full h-full object-contain"
  />
</div>

                <p className="text-amber-50 bg-amber-600 rounded-2xl p-4 text-2xl">
                  
                    <span className="font-bold">Ki:</span> {transformation.ki}
                  </p>
                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCharacterById;
