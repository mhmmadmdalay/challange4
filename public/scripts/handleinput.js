// const textinput = document.getElementById('list')
// const hasil_ti = document.getElementById('hasil_ti')
// textinput.addEventListener('change', (e) => {
//     e.preventDefault()
//     hasil_ti.innerHTML = e.target.value
//     filterCar(e.target.value)
// }
// )

const available = () => {
    let tipeDriver = document.getElementById('list').value

    return tipeDriver
}
const date = () =>{
    let tipeDate=document.getElementById("list2date").value
    return tipeDate
}
const time = () =>{
    let tipeTime=document.getElementById("list3").value
    return tipeTime
}

const capacity = () => {
    let letCapacity = document.getElementById('Penumpang').value

    return letCapacity
}



const button = document.getElementById('tombolButton')
button.addEventListener('click', (e) =>{
    e.preventDefault()
    filterCar(available(),date(),time(),capacity())
}) 