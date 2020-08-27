import mongoose from 'mongoose';

export async function connect() {
    
try {

    await mongoose.connect('mongodb://localhost/mongodbgraphql', {
        useUnifiedTopology: true
    });
    
    console.log('DB conectada.')

}

catch(error) {

    console.log('algo no va.');
    console.log(error);

}

}
