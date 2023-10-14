(function(){
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.equal-btn')
    let clear = document.querySelector('.clear-btn')
    let screen = document.querySelector('.input')


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
           let value = e.target.dataset.num;
           screen.value +=value;
        })
 
    })

    equal.addEventListener('click',function(){
        if(screen.value===""){
            screen.value=''
        }else
        {
           let ans = eval(screen.value);
           screen.value=ans;
        }
    })
    clear.addEventListener('click',function(){
        screen.value='';
    })
    



})();

