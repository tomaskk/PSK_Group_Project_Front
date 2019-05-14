export const SWITCH_TAB = "SWITCH_TAB";
export const UPDATE_PHOTO = "UPDATE_PHOTO";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_SURNAME = "UPDATE_SURNAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_MASTER_AT = "UPDATE_MASTER_AT";
export const UPDATE_WANTS_TO_LEARN = "UPDATE_WANTS_TO_LEARN";

export const switchTab = tab => ({
    type: SWITCH_TAB,
    tab
  });
  
  export const updatePhoto = newString => ({
    type: UPDATE_PHOTO,
    newString
  });

  export const updateName = newString => ({
    type: UPDATE_NAME,
    newString
  });

  export const updateSurname = newString => ({
    type: UPDATE_SURNAME,
    newString
  });

  export const updateEmail = newString => ({
    type: UPDATE_EMAIL,
    newString
  });

  export const updateCity = newString => ({
    type: UPDATE_CITY,
    newString
  });

  export const updateMasterAt = newObj => ({
    type: UPDATE_MASTER_AT,
    newObj
  });

  export const updateWantsToLearn = newObj => ({
    type: UPDATE_WANTS_TO_LEARN,
    newObj
  });