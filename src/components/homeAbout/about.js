
export const AboutEffects = () => {
    const aboutPosition = document.getElementById('about-container').offsetTop / 2;
    const preTextLine = document.getElementById('pre');
    const aboutImage = document.getElementById('aboutImage');

    document.addEventListener('scroll', (e)=>{
        if(window.scrollY >= aboutPosition){
            preTextLine.classList.add('active');
            setTimeout(() => {
                aboutImage.classList.add('shadow');
            }, 800);
        }

    });
}


