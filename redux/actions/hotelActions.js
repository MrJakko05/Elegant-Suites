// import { hoteles } from '../../data/hoteles';
// import Hotel from '../../models/hotel';

export const SET_HOTELES = 'SET_HOTELES';
export const ACTUALIZAR_FILTRO_PRECIO = 'ACTUALIZAR_FILTRO_PRECIO';
export const ACTUALIZAR_FILTRO_UBICACION = 'ACTUALIZAR_FILTRO_UBICACION';
export const ACTUALIZAR_FILTRO_CATEGORIA = 'ACTUALIZAR_FILTRO_CATEGORIA';

export const setHoteles = (hoteles) => {
  return {
    type: 'SET_HOTELES',
    payload: hoteles,
  };
};

export const actualizarFiltroPrecio = (precio) => {
  return {
    type: 'ACTUALIZAR_FILTRO_PRECIO',
    payload: precio,
  };
};
  

export const actualizarFiltroUbicacion = (ubicacion) => {
  return {
    type: 'ACTUALIZAR_FILTRO_UBICACION',
    payload: ubicacion,
  };
};  

export const actualizarFiltroCategoria = (categoria) => {
  return {
    type: 'ACTUALIZAR_FILTRO_CATEGORIA',
    payload: categoria,
  };
};  