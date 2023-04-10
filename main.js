let yearBtn = document.getElementById('year-btn');
let yearOut = document.getElementById('year-span');
let out = '';

yearBtn.addEventListener('click', yearHandler);
function yearHandler(){
    let s = document.getElementById('dropdown');
    switch (s){
        case "pre-power":
            out = "timeline/pre.txt";
            break;
        case "power":
            out = "timeline/power.txt";
            break;
        case "post-power":
            out = "timeline/post.txt";
            break;
    }
    yearOut.innerHTML = out;
}