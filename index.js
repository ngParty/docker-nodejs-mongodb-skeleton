const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://db/test' );

const Cat = mongoose.model( 'Cat', { name: String } );

const kitty = new Cat({ name: 'Cat2' });

debugger;

kitty.save();

Cat.find( function( error, data ) {

  console.log( data );

});
