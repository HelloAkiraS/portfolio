$(document).ready(function() {
    let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 });

    let GsapTL = gsap.timeline({delay: 1.5});

    const text = [["MY NAME IS ENZO AKIRA!"],["I WAS BORN IN JAPAN,"],["BUT I’M BRAZILIAN."]];

    text[0].forEach(word => {
        let tl = gsap.timeline();
        tl.to('.text-start', { duration: 2, text: word });
        GsapTL.add(tl);
    });

    GsapTL.add(() => {
        $('.wrapper-text-start .cursor').toggle()
        $('.wrapper-text-mid .cursor').addClass('toggle')
    })

    text[1].forEach(word => {
        let tl = gsap.timeline();
        tl.to('.text-mid', { duration: 2, text: word });
        GsapTL.add(tl);
    });

    GsapTL.add(() => {
        $('.wrapper-text-mid .cursor').toggle()
        $('.wrapper-text-end .cursor').addClass('toggle')
    })

    text[2].forEach(word => {
        let tl = gsap.timeline();
        tl.to('.text-end', { duration: 2, text: word });
        GsapTL.add(tl);
    });

    
    //MORPH ANIMATIONS
    const menuSvg1 = "M0 17C0 7.61116 7.61116 0 17 0H83C92.3888 0 100 7.61116 100 17C100 26.3888 92.3888 34 83 34H17C7.61116 34 0 26.3888 0 17Z"

    const menuSvg2 = "M0 104C0 94.6112 7.61116 87 17 87H83C92.3888 87 100 94.6112 100 104C100 113.389 92.3888 121 83 121H17C7.61116 121 0 113.389 0 104Z"

    const menuSvg3 = "M0 191C0 181.611 7.61116 174 17 174H83C92.3888 174 100 181.611 100 191C100 200.389 92.3888 208 83 208H17C7.61116 208 0 200.389 0 191Z"

    const menuSvg4 = "M0 278C0 268.611 7.61116 261 17 261H83C92.3888 261 100 268.611 100 278C100 287.389 92.3888 295 83 295H17C7.61116 295 0 287.389 0 278Z"

    $('.arrow-circle-div svg').on("click", function(){

        const AnimejsTL = anime.timeline({
            duration: 2000
        });


        AnimejsTL.add({
            targets: '.arrow-0',
            translateX: '-750',
            easing: 'spring(1, 80, 10, 0)',
            complete: function() {
                $('.arrow-1, .arrow-2, arrow-3, .arrow-4').css('visibility', 'visible');
                $('.arrow-0').toggle();
            }
        }).add({
            targets: '.arrow-btn-svg-1',
            d: [{value: menuSvg1}]
        }, '-= 1500')
        .add({
            targets: '.arrow-btn-svg-2',
            d: [{value: menuSvg2}]
        }, '-= 1500')
        .add({
            targets: '.arrow-btn-svg-3',
            d: [{value: menuSvg3}]
        }, '-= 1500')
        .add({
            targets: '.arrow-btn-svg-4',
            d: [{value: menuSvg4}]
        }, '-= 1500')
    })
  
});