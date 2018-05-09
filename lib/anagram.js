function anagram(str){
    // var result=[]

    if(!str){
        return []
    }
    // result.push(str);
    // return result
    

if(str.length===1){
    return [str]
}


if(str.length===2){
    return [str[0]+str[1],str[1]+str[0]]
}

var return =[]

for(var i=0;i<str.length;i++){
    for(var j=0;j<2;j++){
        result.push(str[i]+anagram(drop(str,i))[j])

    }

}
    // result.push(str[2]+anagram(drop(str,0))[1])
    // result.push(str[2]+anagram(drop(str,0))[0])
    // result.push(str[2]+anagram(drop(str,0))[1])
    // result.push(str[2]+anagram(drop(str,0))[0])
    // result.push(str[2]+anagram(drop(str,0))[1])

    return result
}

function drop(str,n){
    var result=""
    for (i=0;i<str.length;i++){
        if(i===n){
                continue
        }
        result+=i
    }
return result
}

module.exports=anagram