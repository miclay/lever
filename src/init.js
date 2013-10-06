var mktree=require('mktree')
	,mpath=require('../index').mpath
	,lvfs=require(mpath['fs']);

/*
* 目录结构
*/
var dir={
	'build':'',
	'src':'',
	'tmpl':{
		'widget':['a1','a2'],
		'module':['k1']
	},
	'conf':''
};

/*
* 打印目录结构
*/
var printDirTree=function(dir,prefix,levelName){
	if(dir&&typeof dir=='object'){
		console.log('----项目初始化----');
	}else{
		return false;
	}

	prefix=prefix||'|--';
	levelName=levelName||'$level';

	var recall=function(cur,parent){
		if(typeof cur=='object'){
			if(parent){
				cur[levelName]=parent[levelName]+1;
			}else{
				cur[levelName]=0;
			}
			for(var key in cur){
				if(key!=levelName){
					var pathName=key;
					if(cur.push){
						pathName=cur[key];
					}
					var line=lenChar(cur[levelName],prefix.length)
						+prefix
						+pathName;
					console.log(line);
				}
				recall(cur[key],cur);
			}
		}
	};

	var lenChar=function(len,indent){
		len=len||0;
		indent=indent||2;

		var char='';
		for(var i=0;i<indent;i++){
			char+=' ';
		}

		var rs='';
		for(var i=0;i<len;i++){
			rs+=char;
		}
		return rs;
	};

	recall(dir,null);
};

module.exports=function () {

	/* init dir */
	// mktree(dir,function(){
	// 	printDirTree(dir,'|--');
	// });

	console.log(lvfs.isEmptyDir('.'));

};