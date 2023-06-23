


const hidden = document.querySelectorAll(".hide")

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')
            }
        })
    },{
        // threshold:0.5
        threshold:0
    }
);

hidden.forEach((hid) => {observer.observe(hid)})


