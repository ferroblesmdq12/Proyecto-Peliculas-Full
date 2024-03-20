import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navegacion from '../plantilla/Navegacion'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarPelicula() {

    const urlBase = "http://localhost:8080/movie-app/peliculas";

    let navegacion = useNavigate();

    const {id} = useParams();


    const [pelicula, setPelicula]=useState({
        titulo:"",
        generos:"",
        url:"",
        imagen:""
    })

    const{titulo, generos, url, imagen} = pelicula

    useEffect(() => {
        cargarPelicula();
    },[])

    const cargarPelicula = async () => {
        const resultado = await axios.get(`${urlBase}/${id}`)
        setPelicula(resultado.data);
    }

    const onInputChange = (e) => {
        //Spread operator... Para expandir los atributos //
        setPelicula({...pelicula, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/movie-app/peliculas";
        await axios.put(`${urlBase}/${id}`, pelicula);
        //reedirigimos a la pagina de inicio una vez q terminamos de agregar pelicula//
        navegacion('/');
    }


  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Editar Pelicula</h3>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control" id="titulo" name='titulo' required={true}
                    value={titulo} onChange={(e)=>onInputChange(e)}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="generos" className="form-label">Generos</label>
                    <input type="text" className="form-control" id="generos" name='generos'
                    value={generos} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="url" className="form-label">URL</label>
                    <input type="text" className="form-control" id="url" name='url'
                    value={url} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3 htmlForm-check">
                    <label htmlFor="imagen" className="form-label">Imagen</label>
                    <input type="text" className="form-control" id="imagen" name='imagen'
                    value={imagen} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='text-center'>
                <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
                <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
                </div>     
            </form>
        </div>
    </div>
  )
}
