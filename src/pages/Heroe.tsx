import { useParams, useNavigate } from "react-router-dom";
import { getHeroe, deleteHeroe } from "../data/data";
import { HeroeType } from "../types/types";

export default function Heroe() {
  let params = useParams();
  let navigate = useNavigate();
  let heroe: HeroeType | undefined = getHeroe(params.heroeId as string);

  if (!heroe) return <p>No hay </p>;
  return (
    <main>
      <div>
        <p>
          {heroe.name}: {heroe.alias}
        </p>
        <button
          onClick={() => {
            deleteHeroe(heroe!.id);
            navigate("/heroes");
          }}
        >
          Delete Heroe
        </button>
      </div>
    </main>
  );
}
