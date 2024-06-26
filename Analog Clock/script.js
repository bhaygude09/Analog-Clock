const degree = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    const date = new Date();
    
    const hours = date.getHours() % 12; 
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hh = hours * 30 + minutes * 0.5; 
                                          
    const mm = minutes * degree;         
    const ss = seconds * degree;          

    hr.style.transform = `rotateZ(${hh}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
}, 1000);
