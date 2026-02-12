import { Sequelize, QueryTypes } from "sequelize";
import config from '../config';

export const run_query = async (query:string, values:any) => {
    try {
        const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
        await sequelize.authenticate();
        //query = "SELECT * FROM XX"
        let data = await sequelize.query(query, {
            replacements: values,
            type: QueryTypes.SELECT
        });
        await sequelize.close()
        return data;
    } catch (err:any){
        console.error(err, query, values)
        throw 'Database query error';
    }
};

export const run_insert = async function run_insert(query:string, values:any ) {
    try {
        const sequelize = new Sequelize(`postgres://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`);
        await sequelize.authenticate();
        //query = "INSERT XXX INTO XXX"
        let data = await sequelize.query(query, {
            replacements: values,
            type: QueryTypes.INSERT
        });
        await sequelize.close()
        return data;
    } catch (err:any){
        console.error(err, query, values)
        throw 'Database query error';
    }
}

export const run_update = async (query:string, values:any) => {
    //Do something
}

export const run_delete = async (query:string, values:any) => {
    //Do something
}