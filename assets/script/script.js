//Test de connexion
console.log("Be water my Friend");
console.log("-----");

//Beginning of the project
// const allInput = document.querySelectorAll('input');
// const img = document.getElementById('image');
// const spanJS = document.querySelector('span');
// let color = document.getElementById('color').value;
// // spanJS.style.color = `${color}`;

// document.addEventListener('input', () => {
//     let spacing = document.getElementById('spacing').value;
//     let blur = document.getElementById('blur').value;
//     color = document.getElementById('color').value;
//     img.style.border = `solid ${color} ${spacing}px`;
//     img.style.filter = `blur(${blur}px)`;
//     spanJS.style.color = `${color}`;
// })

// TODO Try with the var() méthode 

const inputs = document.querySelectorAll('.controls input');
console.log('inputs', inputs)

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log('this', this)
    console.log('suffix', suffix)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate)); $