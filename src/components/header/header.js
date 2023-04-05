export const headerEffects = () => {
    window.onload = () => {
        const headerContainer = document.getElementById('header-container');
        const headerTitle = document.getElementById('headerTitle');
        const headerText = document.getElementById('headerText');
    
        headerContainer.classList.add('blur');
        setTimeout(() => {
            headerTitle.classList.remove('no-opacity');
        }, 500);
        setTimeout(() => {
            headerText.classList.remove('no-opacity');
        }, 700);
    }

}