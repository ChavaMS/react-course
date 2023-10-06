import { HeroesList } from "../component/HeroesList"

export const DcPage = () => {
    const publisher = 'DC Comics';
    return (
        <>
            <h1>DC Page</h1>
            <hr />
            <HeroesList publisher={publisher} />
        </>
    )
}

