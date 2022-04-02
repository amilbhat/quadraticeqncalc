
function quadEqn() {
    let coeffx2 = document.getElementById("coeffx2")
    let coeffx = document.getElementById("coeffx")
    let constTerm = document.getElementById("const-term")
    let oneroot  = document.getElementById("root-1")
    let otherroot  = document.getElementById("root-2")

    let a = coeffx2.value
    let b = coeffx.value
    let c = constTerm.value

    let Discrim = b*b - 4*a*c
    if (Discrim < 0) {
        return alert("Roots of this quadratic equation is Imaginary")
    }
    else {
        let rootDis = Math.sqrt(Discrim)
        let root1 = (-b + rootDis)/ (2*a)
        let root2 = (-b - rootDis)/ (2*a)
        oneroot.innerText = root1.toFixed(3); 
        otherroot.innerText = root2.toFixed(3)
    }   
}
