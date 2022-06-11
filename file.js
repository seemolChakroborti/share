document.querySelector('#msFormWrap [value="next"]').addEventListener('click',function(){
    document.querySelector('#msFormWrap').firstElementChild.classList.remove('beforColor');
    document.getElementById('sosialMidiaInput').classList.remove('beforColor')
    document.querySelector('#msFormWrap').classList.remove('beforColor')
    document.getElementById('sosialMidiaInput').classList.remove('defolte')
    
   
        document.querySelector('#msFormWrap').classList.add('activeColor');
        document.querySelector('#msFormWrap').firstElementChild.classList.add('activeColor');
        document.getElementById('sosialMidiaInput').classList.add('activeColor');
  
  

})

document.querySelector('#sosialMidiaInput [value="previous"]').addEventListener('click',function(){
    document.querySelector('#msFormWrap').firstElementChild.classList.toggle('beforColor');
    document.getElementById('sosialMidiaInput').classList.toggle('beforColor')
    document.querySelector('#msFormWrap').classList.toggle('beforColor')
    
    document.querySelector('#msFormWrap').classList.toggle('activeColor');
    document.querySelector('#msFormWrap').firstElementChild.classList.toggle('activeColor');
    document.getElementById('sosialMidiaInput').classList.toggle('activeColor');
    document.getElementById('sosialMidiaInput').classList.toggle('defolte')

})










document.querySelector('#sosialMidiaInput [value="next"]').addEventListener('click',function(){
    
    document.querySelector('#msFormWrap').firstElementChild.classList.remove('activeColor')
    
    document.getElementById('personalDetls').classList.remove('beforColor')
    document.getElementById('personalDetls').classList.remove('defolte')
    
    document.getElementById('sosialMidiaInput').classList.add('defolte1')
    document.querySelector('#msFormWrap').firstElementChild.classList.add('activeColor3')

    document.getElementById('personalDetls').classList.add('defoltPresonalDetels')

})

document.querySelector('#personalDetls [value="previous"]').addEventListener('click',function(){
    
    document.getElementById('sosialMidiaInput').classList.remove('defolte1')
    document.querySelector('#msFormWrap').firstElementChild.classList.remove('activeColor3');
    document.getElementById('personalDetls').classList.remove('defoltPresonalDetels')

    document.querySelector('#msFormWrap').firstElementChild.classList.add('activeColor')
    document.getElementById('personalDetls').classList.add('beforColor')
    document.getElementById('personalDetls').classList.add('defolte')


})