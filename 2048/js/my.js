function copyData(data1,data2,size){
	for(var i=0;i<size;i++){
		for(var j=0;j<size;j++){
			data2[i][j]=data1[i][j];
		}
	}

}

function initData(size){
	var data = new Array(size);
	for (var i=0;i<size;i++){
    		data[i] = new Array(size);
    		for (var j=0;j<size;j++){
      		data[i][j]=0;
    		}
  	}
  	return data;
}



function showState(size,data){
 	var i = 0;
 	var j = 0
 	var string = '';
 	console.log(size);
 	for(i=0;i<size;i++){
 		for(j=0;j<size;j++){
 			string = string + ' ' + data[j][i];
 		}
 		console.log(string);
 		string = '';
 	}
}