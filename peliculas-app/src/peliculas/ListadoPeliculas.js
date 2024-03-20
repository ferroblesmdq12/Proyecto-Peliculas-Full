import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ListadoPeliculas() {

    const urlBase = "http://localhost:8080/movie-app/peliculas";

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        cargarPeliculas();
    }, []); // Dejamos [] un arreglo vacío , indicando que se va a ejecutar una sola vez este HOOK.
            // De lo contrario se cargara infinitamente.

    const cargarPeliculas = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado de Carga de Peliculas");
        console.log(resultado.data);
        setPeliculas(resultado.data);
    } // Es una peticion asicronica...
      // espera a que el BACKEND responda

    const eliminarPelicula = async (id) => {
        await axios.delete(`${urlBase}/${id}`);
        cargarPeliculas();
    }

    return (
        <div className="container">
            <div className="container text-center" style={{ margin: "30px" }}>
                <h3>Nuestras Listas de Peliculas</h3>
            </div>
            <table className="table table-striped table-hover align-midldle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Generos</th>
                        <th scope="col">URL</th>
                        <th scope="col">Imagen</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    //los renglones Se agregaran de forma dinamica//
                    // Iteramos el arrelgo // 
                    peliculas.map((pelicula, indice) => (
                        <tr key={indice}>
                        <th scope="row">{pelicula.idPelicula}</th>
                        <td>{pelicula.titulo}</td>
                        <td>{pelicula.generos}</td>
                        <td>{pelicula.url}</td>
                        <td>{pelicula.imagen}</td>
                        <td className='text-center'>
                            <div>
                                <Link to={`/editar/${pelicula.idPelicula}`} 
                                className='btn btn-warning btn-sm me-3'>Editar</Link>
                                <button onClick={()=> eliminarPelicula(pelicula.idPelicula)} 
                                className='btn btn-danger btn-sm'>
                                    Eliminar
                                </button>
                            </div>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
