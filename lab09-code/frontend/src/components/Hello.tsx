interface HelloProps {
    name?:string;
}

//const Hello = ( { name='World' } : { name?:string } ) => {
    // const greeting = 'Hello Component!';
const Hello = ( { name='World' } : HelloProps ) => {
    const greeting = `Hello ${name}`;
    return <h1>{greeting}</h1>;
}

export default Hello;