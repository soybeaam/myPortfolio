
//svg path animation
const paths = document.querySelectorAll("path");
paths.forEach(path => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    path.getBoundingClientRect();
    path.style.transition = path.style.transition = 'stroke-dashoffset 2s ease-in-out';
    path.style.strokeDashoffset = 0;
});

// document query selector
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                }
            }
        );
    }, 
    {threshold: 0.2}
    );

    document.querySelectorAll(".animate").forEach((element) => observer.observe(element))
    }
);