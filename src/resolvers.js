import {tasks} from './sample'; 

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello World con GraphQL'
        },

        greet: (root, {name}, context) => {
            console.log(context);
            console.log(name);
            return `Hola ${name}`
        },

        tasks() {
            return tasks;
        },
        
    },

    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
}; 