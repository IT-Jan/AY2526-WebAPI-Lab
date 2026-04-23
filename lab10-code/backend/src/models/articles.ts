import * as db from '../helpers/database'

export const getAll = async() => {
    let query = "SELECT * FROM articles;"
    let data = await db.run_query(query, '');
    return data;
}

export const getById = async (id:number) => {
    let query = "SELECT * FROM articles WHERE ID = ?"
    let values = [id]
    let data = await db.run_query(query, values);
    return data;
}

export const add = async (article:any) => {
    let keys = Object.keys(article); // keys = ['title', 'allText']
    let values = Object.values(article); // values = ['new title', 'content is here']
    let key = keys.join(',');
    let param = '';
    for(let i:number = 0; i<values.length; i++){ param +='?,'};
    param = param.slice(0,-1);
    let query = `INSERT INTO articles (${key}) VALUES (${param})`;
    try{
        await db.run_insert(query, values);
        return {status: 201};
    }catch(err:any){
        return err;
    }
}

export const update = async (id:number, article:any) => {
    let query = "UPDATE articles SET ";
    let values: any = { id: id }; //{ id: 5, title: 'New title', allText: 'New text' }
    let setClauses: string[] = [];
    Object.keys(article).forEach((key) => {
        setClauses.push(`${key} = :${key}`);
        values[key] = article[key];
      });
    
    query += setClauses.join(', ') + " WHERE id = :id;"; //UPDATE articles SET title = :title, allText = :allText WHERE id = :id
    
    try{
        await db.run_update(query, values);
        return {status: 201};
    }catch(err:any){
        return err;
    }
}

export const del = async (id: number) => {
    let query = `DELETE FROM articles WHERE id = :id;`;

    let values = {
        id: id
    };

    try{
        await db.run_delete(query, values);
        return {status: 201};
    }catch(err:any){
        return err;
    }
};