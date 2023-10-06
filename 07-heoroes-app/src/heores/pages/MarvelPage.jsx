import { HeroesList } from "../component/HeroesList"


export const MarvelPage = () => {
    const publisher = 'Marvel Comics';
    return (
        <>
            <h1>Marvel Page</h1>
            <hr />

            <HeroesList publisher={publisher} />

        </>
    )
}
