import { SET_HOTELES, ACTUALIZAR_FILTRO_PRECIO, ACTUALIZAR_FILTRO_UBICACION } from '../actions/hotelActions';

// import Hotel from '../../models/hotel';

const initialState = {
    hoteles: [],
    filtros: {
      precio: null,
      ubicacion: null,
      categoria: null
    },
  };
  
  const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_HOTELES:
        return {
          ...state,
          hoteles: action.payload,
        };
      case ACTUALIZAR_FILTRO_PRECIO:
        return {
          ...state,
          filtros: {
            ...state.filtros,
            precio: action.payload,
          },
        };
      case ACTUALIZAR_FILTRO_UBICACION:
        return {
          ...state,
          filtros: {
            ...state.filtros,
            ubicacion: action.payload,
          },
        };
      default:
        return state;
    }
  };

  export default hotelReducer;  