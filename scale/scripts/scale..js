//변수생성
const height = document.querySelector('#dietFrm #height');  //키
const weight = document.querySelector('#dietFrm #weight'); //몸무게
const normal_W =document.querySelector('.result .normal_W')  //적정체중
const over_W = document.querySelector('.result .over_W')  //초과체중
const submitBtn = document.querySelector('#dietFrm #submitBtn')
const resetBtn = document.querySelector('.result #resetBtn')
console.log(height,weight,normal_W,over_W,submitBtn,resetBtn)
//적정체중 출력

submitBtn.addEventListener('click',function(){
    normal_W.innerHTML = `${(height.value-100)*0.9}kg`;
    over_W.innerHTML = `${(height.value-100)*0.9-weight.value}kg`
});
resetBtn.addEventListener('click',function(){
    normal_W.innerHTML=''; over_W.innerHTML='';
})
