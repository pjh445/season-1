document.addEventListener("DOMContentLoaded" , ()=> {   
    

    //페이지가 로드 된후 실행
    const menu = document.getElementById('menu');  //<iframe id="menu">
    
    menu.addEventListener("load" , ()=>{
        //부모페이지에서 자식 아이프레임의 콘텐츠에 접근가능해야한다.
        const nav = menu.contentDocument.querySelectorAll("nav a");// 각각각 메뉴 <a href="spring">
        nav.forEach( i => {
                i.classList.add('act');
        });
    });



}); //end....................
