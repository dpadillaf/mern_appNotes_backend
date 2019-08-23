const usersCtrl = {};

const User = require( '../models/User' );

usersCtrl.getUsers = async ( req, res ) => {
    const users = await User.find();
    res.json( users );
};

usersCtrl.createUser = async ( req, res ) => {
    const user = new User( req.body );
    await user.save( ( err ) => {
        if( err ){
            res.json( { msj: 'user exist' } );
        }else{
            res.json( { msj: 'user saved' } );
        }
    } );
    
};

usersCtrl.deleteUser = async ( req, res ) => {
    await User.findByIdAndDelete( req.params.id );
    res.json( { msj: 'user deleted' } );
};

module.exports = usersCtrl;