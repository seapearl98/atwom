// 헤더 ul호버시 백그라운드 화이트로 변경하고 하위 ul등장
const hd_wrap = document.querySelector('.header_wrap')
const hd_ul = document.querySelector('.head_in>ul')
hd_ul.addEventListener('mouseover',()=>{
    hd_wrap.classList.add('on')
})

hd_ul.addEventListener('mouseout',()=>{
    hd_wrap.classList.remove('on')
})



// 모바일 버튼기능
const mob_Btn = document.querySelector('.mob_btn')
const bg = document.querySelector('.bg')
const mob_Hd = document.querySelector('.mob_hd')

mob_Btn.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle('on')
    if(mob_Btn.classList.contains('on')){
        bg.classList.add('on')
        mob_Hd.classList.add('on')
    }else{
        bg.classList.remove('on')
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
for(let i=0;i<mob_li.length;i++){
    mob_li[i].addEventListener('click',e=>{
        e.currentTarget.classList.toggle('on')
//클래스on붙여진 li 하위 ul열릴때 하위li높이값 X 하위li갯수 가져와서 하위 ul높이로 설정
        if(mob_li[i].classList.contains('on')){
            let li_height = e.currentTarget.children[1].children[0].offsetHeight;//mob_li_ul_li의 높이값
            let li_length = e.currentTarget.children[1].children.length; //mob_li_ul_li 개수
            console.log(li_height)
            console.log(li_length)
            mob_li_ul[i].style.height = li_height * li_length + 'px';
            // let ul_height =
            // console.log(ul_height)
            // e.currentTarget.children[0].style.height = ul_height; 
            
        }else{
            mob_li_ul[i].style.height = 0 + 'px';

        }
    })
}

//스크롤
let devHeight;
devHeight = window.innerHeight;
console.log(devHeight)
window.addEventListener('resize',()=>{
    devHeight = window.innerHeight;
    console.log(devHeight) //현재높이값
})
const sections = document.querySelectorAll("main>div>section");
console.log(sections)
for(let i=0;i<sections.length;i++){
    sections[i].style.height = devHeight + 'px';
}


window.addEventListener("scroll",e=>{
    let scroll = document.querySelector("html").scrollTop;
    console.log(scroll)
    for(let i=0;i<sections.length;i++){
        if(scroll>=(i*devHeight) && scroll<(i+1)*devHeight){
            activation(i,sections)
        }   
    }
})
let activation =(index,sections)=>{
    for(let el of sections){
        el.classList.remove("on")
    }
    sections[index].classList.add("on")
}




window.addEventListener("scroll", ()=>{

    let scroll = document.querySelector("html").scrollTop;
    
    for(let i=0; i<sections.length; i++){
        if(scroll >= i*devHeight && scroll < (i+1)*devHeight){
            activation(i,sections);
        }
    }


    let contents = document.querySelectorAll("main>div")
    for(let i=0; i<contents.length; i++){
        contents[i].addEventListener("wheel", e=>{
            if(e.wheelDelta >= 0){
                let prev = e.currentTarget.previousElementSibling.offsetTop;
                window.scroll({
                    top: prev,
                    left: 0,
                    behavior: "smooth"
                    
                });
            }else if(e.wheelDelta <= 0){
                let next = e.currentTarget.nextElementSibling.offsetTop;
                window.scroll({
                    top: next,
                    left: 0,
                    behavior: "smooth"
                });
            };
        });
    };
})

//navigation버튼 클릭시 해당페이지로 이동
const nav = document.querySelectorAll('.ng>ul>li')
for(let k=0;k<nav.length;k++){
    nav[k].addEventListener("click",e=>{
        e.preventDefault();
        window.scroll({
            top:k*devHeight,
            left:0,
            behavior:'smooth'
        })
    })
}
window.addEventListener('scroll',()=>{ // 윈도우에서 스크롤을 움직이면
    let scroll = document.querySelector('html').scrollTop; // 스크롤 값구하기

    for(i=0;i<nav.length;i++){//스크롤 값에 따라서 클래스 함수발생.
        if(scroll>=(i*devHeight) && scroll< [(i+1)*devHeight]){
            act(i,nav); 
        }

    }
})
let act = (idx,nav) => {//클릭이벤트 발생시 .on지우고 채우는 함수
    for(let el of nav){
        el.classList.remove("on");
    }
    nav[idx].classList.add("on");
} 


//con3 ul>li click on class add
const con3_li = document.querySelectorAll('.content3>section>.business>ul>li')
const txt = document.querySelectorAll('.txt_wrap>div')
const pic =  document.querySelectorAll('.pic>ul')

for(let k=0;k<con3_li.length;k++){
    con3_li[k].addEventListener('click',e=>{
        e.preventDefault();
        con3_li[k].classList.add('on')
        txt[k].classList.add('on')
        pic[k].classList.add('on')
        activation(k,con3_li)
        activation(k,txt)
        activation(k,pic)
    })
}



let actv = (index,con3_li)=>{
    for(let el of con3_li){
        el.classList.remove('on')
    }
}

document.querySelector('.content1').addEventListener("load",()=>{
    EventTarget.classList.add('on')
})