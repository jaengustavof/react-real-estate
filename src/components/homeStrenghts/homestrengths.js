
export const StrengthEffects = () => {
    const strenghtsPosition = document.getElementById('home-strengths').offsetTop;
    const preTextLine = document.getElementById('strength-pre');
    const strenghtsImage = document.getElementById('strenghtsImage');

    document.addEventListener('scroll', (e)=>{
        if(window.scrollY >= strenghtsPosition){
            preTextLine.classList.add('active');
            setTimeout(() => {
                strenghtsImage.classList.add('shadow');
            }, 500);
        }
    });
}