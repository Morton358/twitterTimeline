export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const checkValidityInput = value => {
    let isValid = true;
    const pattern = /^@([a-zA-Z0-9_]){1,15}$/;
    isValid = pattern.test(value) && isValid;
    return isValid;
};
