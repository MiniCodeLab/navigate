import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import QueryNavLink from '../components/QueryNavLink';
import { getHeroes } from '../data/heroes';
import { HeroeType } from '../types/types';

export default function Heroes() {
  const heroes = getHeroes();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSearch = (event: any) => {
    const filter = event.target.value;

    if (filter) setSearchParams({ filter });
    else setSearchParams({});
  };

  return (
    <>
      <nav className="heroes">
        <h2>All heroes 🦸‍♂️🦸‍♀️</h2>

        <div className="heroes-filter">
          <label>Find: </label>
          <input
            value={searchParams.get('filter') || ''}
            onChange={(event) => handleChangeSearch(event)}
          />
        </div>

        <div className="heroes-links">
          {heroes
            .filter((heroes: HeroeType) => {
              const filter = searchParams.get('filter');
              if (!filter) return true;

              const name = heroes.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((heroes: any) => (
              <QueryNavLink to={`/heroes/${heroes.id}`} key={heroes.id}>
                {heroes.name}
              </QueryNavLink>
            ))}
        </div>
      </nav>

      {/* Aquí renderizamos las subrutas incluidas en el path de este componente */}
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
