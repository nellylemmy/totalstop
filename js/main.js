// Any javascript code will go here

let windowWidth = $(document).width();
if(windowWidth <= 992){
    document.querySelector(".founders").classList.remove("three");
    document.querySelector(".founders").classList.add("two");
} else{
    document.querySelector(".founders").classList.add("three");
}