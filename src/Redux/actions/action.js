import * as actionTypes from "./actionTypes";


export const RemoveCategorie = (data,id) => async (dispatch) => {

  try {
    
    data.map((i) => {
      if(i.categories.length){
        i.categories.map((j,index) => {
          if(j.id === id){
            i.categories.splice(index, 1)
          }
        })
      }
    })
      dispatch({
        type: actionTypes.REMOVE_CATEGORIES,
        payload: data,
      });
      dispatch({
        type: actionTypes.UPDATE_DATA,
        payload: Math.random(),
      });
  } catch (err) {
    console.log('error');
  }
};
