import { getHeroes } from "../data/data";
import {
  Outlet,
  NavLink,
  NavLinkProps,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { HeroeType } from "../types/types";
import React from "react";

function QueryNavLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
} & NavLinkProps) {
  let location = useLocation();
  return (
    <NavLink to={to + location.search} {...props}>
      {children}
    </NavLink>
  );
}

export default function Heroes() {
  const heroes = getHeroes();
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSearch = (event: any) => {
    let filter = event.target.value;
    if (filter) setSearchParams({ filter });
    else setSearchParams({});
  };

  return (
    <main className="body">
      <nav className="nav">
        <h2>heroes</h2>
        <label>Find: </label>
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => handleChangeSearch(event)}
        />
        {heroes
          .filter((heroes: HeroeType) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            const name = heroes.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((heroes: any) => (
            <QueryNavLink to={`/heroes/${heroes.id}`} key={heroes.id}>
              {heroes.name}
            </QueryNavLink>
          ))}
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
}
