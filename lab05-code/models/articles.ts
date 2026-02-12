import * as db from '../helpers/database';

export const getAll = async() => {
    let query = "SELECT * FROM articles;";
    let data = await db.run_query(query, '');
    return data;
}

export const getById = async(id:number) => {
    let query = "SELECT * FROM articles WHERE ID = ?;";
    let values = [id];
    let data = await db.run_query(query, values);
    return data
}

export const add = async(article:any) => {
    let keys = Object.keys(article) // keys = ['title', 'allText']
    let values = Object.values(article) // values = ['new article', 'hello world']
    let key = keys.join(','); //title, allText
    let param = '';
    for(let i:number = 0; i<values.length; i++){ param += '?,'};
    param = param.slice(0,-1)
    //INSERT INTO articles (title, allText)  VALUES (?, ?)
    let query = `INSERT INTO articles (${key}) VALUES (${param});`;
    try{
        await db.run_insert(query, values);
        return { status: 201}
    }catch(err:any) {
        return err;
    }
}


//Update
export const update = async(id:number, article:any) => {
    //do something
}

//Delete
export const del = async(id:number) => {
    //do something
}