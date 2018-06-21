//create scene, camera and renderer
var scene = new THREE.Scene( );
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1/1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Ambient Lighting
var ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
ambientLight.position.set( 0, 0, 0 ).normalize();
scene.add( ambientLight );

//game logic
var update = function( )
{
	
};

//draw scene
var render = function()
{
	renderer.render( scene, camera );
};

//run game loop( update, render, repeat )
var GameLoop = function()
{
	request AnimationFrame( GameLoop );
	update( );
	render( );
};

GameLoop( );