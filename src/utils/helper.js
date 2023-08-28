export const filter = (arr,data)=>{
    return arr.filter((elem)=> elem.task!=data);
}

export const name_provider = (name='Sahnawaz Alam')=>{
    return `${name[0]}${name[name?.indexOf(' ') + 1]}`
}


