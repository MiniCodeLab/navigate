import { useParams, useNavigate } from 'react-router-dom';
import { getHeroe, deleteHeroe } from '../data/heroes';
import { HeroeType } from '../types/types';

export default function Heroe() {
  const params = useParams();
  const navigate = useNavigate();
  const heroe: HeroeType | undefined = getHeroe(params.heroeId as string);

  if (!heroe) return <p>No existe el héroe que buscas 😭</p>;

  return (
    <div className="hero-profile">
      <p className="hero-name">
        {heroe.name}: {heroe.alias}
      </p>

      <button
        className="hero-delete"
        onClick={() => {
          deleteHeroe(heroe!.id).then(() => {
            navigate('/heroes');
          });
        }}
      >
        Borrar a {heroe.name}
      </button>
    </div>
  );
}
