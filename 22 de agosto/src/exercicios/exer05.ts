const c = (v1:number[],v2:string[]) => {
    let res:number[]|string[] = [];
    for(let i = 0; i < v1.length; i++){
        res[i] = v1[i] + v2[i];
    }
    return res;
}

const cat1 = [5,3,1,8,2];
const cat2 = ["M","a","r","i","a"];
console.log("Resultado:", c(cat1,cat2));