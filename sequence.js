const getNum=document.querySelector('#getNum');
const disp=document.querySelector('#disp')
const setSeq=document.querySelector('#getSeq')
setSeq.addEventListener('click',()=>{
    generate();
    visible();
})
document.addEventListener("keydown",(event)=>{
    if(event.defaultPrevented){
        return
    }
    else if(event.key==="Enter"){
        generate();
        visible();
    }
})

function generate(){
    let num=getNum.value; 
    let genArr=[];
    if (num==0||num<0){
        disp.innerHTML=`Invalid Number`
    }
    else{
        for(let i=0;i<50;i++){
            num++;
            genArr.push(num);   
        }
        disp.innerHTML=`Generated Sequence:<br>${genArr}`
    }
}
function visible(){

    let content =document.querySelector("#hidden")
    content.classList.add("visible")
}