var fs=require('fs')
	,path=require('path');

var mx={};

mx.readDir=function (dir) {
	return fs.readdirSync(dir);
};

mx.currentDir=function(){
	return fs.readdirSync('.');
};

mx.isEmptyDir=function(dir){
	return !fs.readdirSync(dir).length;
};

mx.exist=function(path){
	return fs.existsSync(path);
};

mx.readFile=function(path){
	return fs.readFileSync(path,'utf8');
};

mx.writeFile=function(){
	var arg=arguments;
	fs.writeFileSync(arg[0],arg[1],arg[2]);
};

module.exports=mx;