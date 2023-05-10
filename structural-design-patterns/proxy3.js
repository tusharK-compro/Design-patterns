const me={
    age:23,
    name:'tushar',
}

const ab={
    age:23,
    name:'joe',
    address:'abc street',
}

const getProxy = ( obj) =>{
    return new Proxy(obj,{
        get:(target,key)=>{
            if(key==='name'){
                return target[key].toUpperCase();
            }
            else{
                return target[key];
            }
        }
    })
}
const proxy = new Proxy(me,{
    get:(target,key)=>{
        if(key==='name'){
            return target[key].toUpperCase();
        }
        else{
            return target[key];
        }
    }
})

console.log(getProxy(ab).name);