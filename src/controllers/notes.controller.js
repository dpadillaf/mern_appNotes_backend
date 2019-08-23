const notesCtrl = {};

const Note = require( '../models/Note' );

notesCtrl.getNotes = async ( req, res ) => {
    const notes = await Note.find();
    res.json( notes );
};

notesCtrl.createNote = async ( req, res ) => {
    const note = new Note( req.body );
    await note.save();
    res.json( { msj: 'note saved' } );
};

notesCtrl.getNote = async ( req, res ) => {
    const note = await Note.findById( req.params.id );
    res.json( note );
};

notesCtrl.updateNote = async ( req, res ) => {
    await Note.findOneAndUpdate( { _id: req.params.id }, req.body );
    res.json( { msj: 'note updated' } );
};

notesCtrl.deleteNote = async ( req, res ) => {
    await Note.findByIdAndDelete( req.params.id );
    res.json( { msj: 'note deleted' } );
};

module.exports = notesCtrl;