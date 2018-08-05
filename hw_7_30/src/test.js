import { normalize, schema } from 'normalizr';

const test = () => {

    const data = [
        {
            H: {
                id: 2
            },
            name: 'hhh'
        },
        {
            H: {
                id: 3
            },
            name: 'ppp'
        }
    ]
    const newSchema = new schema.Entity('test',undefined,{idAttribute:value=>{
        console.log('v=>',value.name);
        return value.H.id
    }
});
const newSchemaList = normalize(data,[newSchema]);
console.log('this is schema List ',newSchemaList);
}
export default test