const progressBar=document.getElementById('progressBar');
const updateProgress=()=>{const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progressBar.style.width=(max>0?(d.scrollTop/max)*100:0)+'%'};
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min(i*35,180)+'ms';observer.observe(el)});
