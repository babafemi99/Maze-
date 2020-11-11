const btn = document.querySelector('.move');
const moveX = (element,amount,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const bodyBoundary = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;

            if (elRight+amount > bodyBoundary){
                reject();
            }else{
                element.style.transform = `translateX(${currLeft+amount}px)`;
                resolve();
            }
        }, delay);
    })   
    
};

// moveX(btn,300,1000).then( ()=>{
//     console.log('DONE MOVING')
//     return moveX(btn, 400,1000)
// }).then(()=>{
//     console.log('second done')
//     return moveX(btn,1000,2000)
// }).then(()=>{
//     console.log('fourth movement')
//     return moveX(btn,500,1000)
// }).then('wont run')
// .catch(()=>{
//     alert('space no dey again'.toUpperCase())
// })


async function animate(el, amt){
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt,1000)
    await moveX(el,amt, 1000)
}
animate(btn,100).catch((err)=>{
    console.log("all done moving back");
    animate(btn,-100);
})