// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str){
    let res = ''
    let arr = str.split('-')
    //  console.log(arr)
    const t = arr.map((i,index) =>{
        if(index!== 0){
        return   i.charAt(0).toUpperCase() + i.slice(1)
        }
        else{
           return i
        }
    })
    console.log(t.join(''))
    return t.join('')
}
camelize("background-color") 
camelize("list-style-image") 
camelize("-webkit-transition") 