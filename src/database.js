const mongoose = require( 'mongoose' );

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/db_test';

mongoose.connect( URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
} );

const connection = mongoose.connection;

connection.once( 'open', () => {
    console.log( 'DB is connected' );
} );