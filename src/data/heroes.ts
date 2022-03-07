let heroes = [
  {
    id: 1,
    name: 'Superman',
    age: 65,
    alias: 'Clark Kent',
  },
  {
    id: 2,
    name: 'Batman',
    age: 55,
    alias: 'Bruce Wayne',
  },
  {
    id: 3,
    name: 'Wonder Woman',
    age: 1555,
    alias: 'Diana',
  },
];

export function getHeroes() {
  return heroes;
}

export function getHeroe(id: string) {
  return heroes.find((heroe) => heroe.id.toString() === id);
}

export async function deleteHeroe(id: number) {
  heroes = heroes.filter((heroe) => heroe.id !== id);
}
