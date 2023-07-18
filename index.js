let movies=[
    {
        name:"falcon and the winter soldier",
        des:"jscgjagcjscgjadjdgc cgjcdadchcdhkdckdc",
        image:"src/images/slider 2.png"
    },
    {
        name:"Loki",
        des:"jscgjagcjscgjadjdgc cgjcdadchcdhkdckdc",
        image:"src/images/slider 1.png"
    },
    {
        name:"Wanda vision",
        des:"jscgjagcjscgjadjdgc cgjcdadchcdhkdckdc",
        image:"src/images/slider 3.png"
    },
    {
        name:"Raya and the last dragon",
        des:"jscgjagcjscgjadjdgc cgjcdadchcdhkdckdc",
        image:"src/images/slider 4.png"
    },
    {
        name:"Luca",
        des:"jscgjagcjscgjadjdgc cgjcdadchcdhkdckdc",
        image:"src/images/slider 5.png"
    },
];

const carousel=document.querySelector('.carousel');
let sliders=[];
let slideIndex=0; //track the current side

const createSlide=()=>{
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attach all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images

    imgElement.src=movies[slideIndex].image;

    //setting elements class names

    slide.className='slider';
    content.className='slidecontent';
    h1.className='title';
    p.className='des';

    sliders.push(slide);

    if(slide.length){
        sliders[0].style.marginLeft='calc(-${100*(sliders.length-2)}%-${30*(sliders.length-2)}px)';

    }
}

for(let i=0;i<3;i++){
    createSlide();
}
setIntervel(()=>{
    createSlide();
},3000);

// video cards

const videoCards=[...document.querySelectorAll(".videocard")];

videoCards.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
        let video =item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave",()=>{
        let video=item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers=[...document.querySelectorAll('.cardContainer')];
let prebutton=[...document.querySelectorAll('.prebtn')];
let nextbutton=[...document.querySelectorAll('.nxtbtn')];

cardContainers.forEach((items,i)=>{
    let containerDimentions=items.getBoundingClientRect();
    let containerWidth=containerDimentions.width;

    nextbutton[i].addEventListener('click',()=>{
        items.scrollLeft+=containerWidth-200;
    })
    prebutton.addEventListener('click',()=>{
        items.scrollLeft-=containerWidth+200;
    })
})
