export default async function getUser( id ) {

  if (!id) {
    return;
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const data = await res.json();

  return data;
}
