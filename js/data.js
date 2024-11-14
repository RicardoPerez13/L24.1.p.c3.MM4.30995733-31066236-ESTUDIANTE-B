let nombresDeAprobados=(estudiante)=>{
    let nombres = [];
    for( let i=0;i<estudiante.length;i++){
        if(estudiante[i].nota>=10){
            nombres.push(estudiante[i].nombre)
        }
        }
        return nombres
    }
    

let estudiantes =[
    {nombre:"Luis",semestre:5,nota:14},
    {nombre:"Daniela",semestre:1,nota:19},
    {nombre:"Juan",semestre:3,nota:10},
    {nombre:"Ricardo",semestre:5,nota:7},
    {nombre:"Moises",semestre:4,nota:10}
];

let salida=document.getElementById("salida")

salida.innerHTML=`
Estudiantes Aprobados: ${(nombresDeAprobados(estudiantes))}
`