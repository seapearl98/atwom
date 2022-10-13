// 헤더 ul호버시 백그라운드 화이트로 변경하고 하위 ul등장
const hd_wrap = document.querySelector('.header_wrap')
const hd_ul = document.querySelector('.head_in>ul')
hd_ul.addEventListener('mouseover',()=>{
    hd_wrap.classList.add('on')
})

hd_ul.addEventListener('mouseout',()=>{
    hd_wrap.classList.remove('on')
})

//location a 토글 시 dl class on붙이기
const loca_a = document.querySelectorAll('.location .a_btn')
let a_dl = document.querySelectorAll('.sec2>.location>.loc_wrap>dl')
console.log(a_dl)
for(let i=0;i<loca_a.length;i++){
    loca_a[i].addEventListener('click',e=>{
        e.preventDefault();
        a_dl[i].classList.toggle('on')
        if(a_dl[i].classList.contains("on")){
            activation(i,a_dl);
            }
    })
}
function activation(i,idx){
    for(let el of idx){
        el.classList.remove("on");
    }
    idx[i].classList.add("on");
}



// 모바일 버튼기능
const mob_Btn = document.querySelector('.mob_btn')
const mob_Hd = document.querySelector('.mob_hd')

mob_Btn.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle('on')
    if(mob_Btn.classList.contains('on')){
        mob_Hd.classList.add('on')
    }else{
        mob_Hd.classList.remove('on')
    }
})

//모바일 ul>li클릭 시 하위 ul 열리도록
//다시 누를 땐 닫히도록 토글 기능 사용
const mob_li = document.querySelectorAll('.mob_hd>ul>li')
const mob_li_ul = document.querySelectorAll('.mob_hd>ul>li>ul')
const mob_li_ul_li = document.querySelectorAll('.mob_hd>ul>li>ul>li')

        let all = [];
        all = mob_li
        console.log(all)
for(let k=0;k<mob_li.length;k++){
    mob_li[k].addEventListener('click',e=>{
        e.preventDefault();
        e.currentTarget.classList.toggle('on')
//클래스on붙여진 li 하위 ul열릴때 하위li높이값 X 하위li갯수 가져와서 하위 ul높이로 설정
        if(mob_li[k].classList.contains('on')){
            let li_height = e.currentTarget.children[1].children[0].offsetHeight;//mob_li_ul_li의 높이값
            let li_length = e.currentTarget.children[1].children.length; //mob_li_ul_li 개수
            console.log(li_height)
            console.log(li_length)
            mob_li_ul[k].style.height = li_height * li_length + 'px';
            // let ul_height =
            // console.log(ul_height)
            // e.currentTarget.children[0].style.height = ul_height; 
            activation(k,mob_li);
        }else{
            mob_li_ul[k].style.height = 0 + 'px';

        }
    })
}
function activation(k,list){
    for(let el of list){
        el.classList.remove("on");
    }
    list[k].classList.add("on");
}