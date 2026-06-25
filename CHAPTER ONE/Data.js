const nama = ('Oakwing');
let usia = (40);

let crew = document.getElementById(`Crew`);

function BiodataGenerate() {
    let Gen;

    if (usia > 10 && usia < 19 ) {
    Gen = "First Gen";
    } else if (usia >19) {
    Gen = "Second Gen"
    } else if (usia <10 && usia >2) {
    Gen = "Third Gen"
    } else {
    Gen = "Anomaly"
    }
    
    return crew.innerHTML = Gen

    } 

console.log (nama);
console.log (usia);

BiodataGenerate();