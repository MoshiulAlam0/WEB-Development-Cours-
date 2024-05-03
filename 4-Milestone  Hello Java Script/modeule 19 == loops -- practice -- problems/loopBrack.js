// target: loop brack 
var studentAge = [22, 33, 33, 555, 55, 333, 88, 29];
var index = 0;
while(index < studentAge.length){
    var element = studentAge[index];
    if (element > 100){
        break;
    }
    console.log(element);
    index++;
}

var studentName = ['noman', 'abid', 'baizit', 'emran', 'hasim']
for (var i = 0; i < studentName.length; i++){
    var name = studentName[i];
    console.log(name);
    if (name == 'emran'){
        break;
    }
}