const oompa = ["oompa", 8293, "loompa", "you are a disappointment to your parents"];

console.log(oompa.length);
console.log(oompa[3]);


oompa.forEach(omp => {
    console.log(omp);
})

// for (var i of oompa) {
//     console.log(i);
// }

// for (var i = 0; i < oompa.length; i++) {
//     console.log(oompa[i]);
// }

oompa.push("you are an idiot");
console.log(oompa[oompa.length - 1])

oompa.unshift("heh");
console.log(oompa[0])

oompa.pop();

console.log(oompa);