
const assert = require( "assert" );
const shardize = require( "./shardize.js" );

assert.equal( shardize( "Hello World" ), "hello-world", "should be equal to 'hello-world'" );

assert.equal( shardize( "hello_world" ), "hello-world", "should be equal to 'hello-world'" );

assert.equal( shardize( "helloWorld" ), "hello-world", "should be equal to 'hello-world'" );

assert.equal( shardize( "hello world" ), "hello-world", "should be equal to 'hello-world'" );

console.log( "ok" );
