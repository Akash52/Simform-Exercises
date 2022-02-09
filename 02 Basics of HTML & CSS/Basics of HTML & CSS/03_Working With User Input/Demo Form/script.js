const moveValue = document.getElementById('move-value')

document.getElementById('move-range').addEventListener('change',function(){
    moveValue.innerText=this.value
},false)