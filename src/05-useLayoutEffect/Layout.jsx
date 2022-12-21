import { LoadingPoke, Poke } from "../components";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
    const url =  'https://pokeapi.co/api/v2/pokemon/'
    const {counter, increment} = useCounter(810);
    const {data, isLoading, hasErrors} = useFetch(url+counter);
    // console.log(data);


    return (
        <>
            <h1>Pokedex Layout</h1>

            <hr />
            {
                (isLoading) ? ( 
                    <LoadingPoke />
                        ) : (
                            <Poke sprite={data.sprites.front_shiny} name={data.name} id={data.id} />

                        )
            }

            <button onClick={() => increment()} disabled={isLoading} className="btn btn-success">Next pokemon</button>
        </>
    )
}
