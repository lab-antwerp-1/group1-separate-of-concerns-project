// check that book title, author and description will have at least 2 characters without any space characters

export const validityCheck = (parameter) => {
    return parameter.split("").filter(v=>v!==" ").join("").length<2 ? true : false;
};
