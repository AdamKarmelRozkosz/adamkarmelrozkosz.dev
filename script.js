proj = document.getElementById("proj")
cert = document.getElementById("cert")
cd = document.getElementById("cd")

proj.addEventListener("mouseover", function() {
    cd.innerHTML= "cd projects"
    cd.style.animation = 'typing 4s steps(41) ';
    cd.style.width = '41ch';
 
})
proj.addEventListener("mouseleave", function() {
    cd.innerHTML= "cd"
    cd.style.width="0"
})

cert.addEventListener("mouseover", function() {
    cd.innerHTML= "cd certifications"
    cd.style.width = '41ch';   
})
cert.addEventListener("mouseleave", function() {
    cd.innerHTML= "cd"
    cd.style.width="0"
})
