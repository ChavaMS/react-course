import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroePage = () => {
    const { heroId } = useParams();
    const navigate = useNavigate();

    //Memorizamos el valor y solo se vuelve a llamar cuando las dependencias cambian (heroId)
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to={'/marvel'} />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${heroId}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero} />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
                    <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button className="btn btn-primary" onClick={onNavigateBack}>Regresar</button>
            </div>
        </div>
    )
}