import {tasks} from './sample'; 

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello World con GraphQL'
        },

        greet: (root, {name}) => {
            console.log(name);
            return `Hola ${name}`
        },

        tasks() {
            return tasks;
        }
        
    }
}; 