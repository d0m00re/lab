interface IValidJoin {
    id : number;
}

const validJoin = (data : IValidJoin[], id : number) : boolean => {
    return data.findIndex(e => e.id === id) !== -1;
}

const generateId = (data : any[]) => data.length;

export {
    validJoin,
    generateId
}