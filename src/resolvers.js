import {tasks} from './sample'; 
import User from './models/User';

export const resolvers = {

    Query: {
        hello: () => {
            return 'Hello World con GraphQL'
        },

        greet: (root, {name}, ctx) => {
            console.log(ctx);
            console.log(name);
            return `Hola ${name}`
        },

        tasks() {
            return tasks;
        },

        async Users() {
          const users = await User.find();
          return users;
        }
        
    },

    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        
        async createUser(_, { input }) {
            const newUser = new User(input)
            await newUser.save();
            console.log(newUser)
            return newUser;
        },

        async deleteUser(_, {_id}) {
          return  await User.findByIdAndDelete(_id);
        },

        async updateUser(_, { _id, input }) {
           return await User.findByIdAndUpdate(_id, input, {new: true});
        }
    }
}; 