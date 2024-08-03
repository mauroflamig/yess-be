// const url = 'https://6626b1c3b625bf088c06654c.mockapi.io/api/products/'
const url = 'http://localhost:8080/api/productos/'

const getAll = async _ => await fetch(url)
  .then(r => r.json())
  .then(a => a.map(producto => ({id: producto._id, ...producto})));

const guardar = async prod => await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type':'application/json'},
    body: JSON.stringify(prod)
}).then(r => r.json())

const actualizar = async (id, prod) => await fetch(url+id, {
    method: 'PUT',
    headers: { 'content-type':'application/json'},
    body: JSON.stringify(prod)
}).then(r => r.json())

const eliminar = async id => await fetch(url+id, {
    method: 'DELETE',
}).then(r => r.json())

// -------------------------------------------
//               Exportacion
// -------------------------------------------

export default {
    getAll,
    guardar,
    actualizar,
    eliminar
}