
const assert = require( "assert" );
const shardize = require( "./shardize.js" );

assert.equal( shardize( "Hello World" ), "hello-world", "should have value 'hello-world'" );

assert.equal( shardize( "hello_world" ), "hello-world", "should have value 'hello-world'" );

assert.equal( shardize( "helloWorld" ), "hello-world", "should have value 'hello-world'" );

assert.equal( shardize( "hello world" ), "hello-world", "should have value 'hello-world'" );

console.log( "ok" );
