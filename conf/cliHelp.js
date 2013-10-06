var mpath=require('../index').mpath
	,sysConf=require(mpath['sysConf']);
var lang=sysConf['lang']
	,curLang=sysConf['defaultLang'];

module.exports=function(cmd){
	var line=0;
	for(var i=0,len=lang.length;i<len;i++){
		if(lang[i]==curLang){
			line=i;
			break;
		}
	}
	if(msg[cmd]){
		return msg[cmd][line];
	}else{
		return '';
	}
};

var msg={
	'conf':[
		'启动配置向导，进行偏好设置。',
		'Preferences setting'
	],
	'init':[
		'在当前目录下初始化项目。',
		'init project under current directory.'
	],
	'debug':[
		'测验当前目录及其子目录下的文件。对象范围可配置。',
		'Debug under current directory & children. The range is configurable.'
	]
};