var  mySlidePhtos = document.querySelector(".photos");
     myPhotos = document.querySelectorAll('.photos img') ;
    let counter = 1;
    const size = myPhotos[0].clientWidth;

     mySlidePhtos.style.transform = ' translateX(' + (-size * counter) + 'px)';
     setInterval(()=> {
        if(counter >= myPhotos.length - 1)return; 
    mySlidePhtos.style.transition = "transform 2.5s ease-in-out";
    counter++;
    mySlidePhtos.style.transform = 'translateX(' + (-size * counter) + 'px)';

},3900)
