

const palabras1 = ["Perro", "Gato", "Alpaca", "Jirafa", "Ardilla"]
const palabras2 = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"] 
const palabras3 = ["azul","rojo","verde","morado","naranja"]
const palabras4 = ["suerte" , "sabiduria" , "amor" , "fuerza" , "paz"]

function frase () {
    let frase = "Tu Guia espiritual es : " + palabras1[Math.floor(Math.random() * palabras1.length)] 
    console.log(frase)
}

function planeta () {
    let planeta = "Tu planeta es : " + palabras2[Math.floor(Math.random() * palabras2.length)] 
    console.log(planeta)
}

function color () {
    let color = "Tu color es : " + palabras3[Math.floor(Math.random() * palabras3.length)]
    console.log(color)

}

function fortuna () {
    let fortuna = "El dia de hoy tendras  : " + palabras4[Math.floor(Math.random() * palabras4.length)]
    console.log(fortuna)
}
frase()
planeta()
color()
fortuna()


