var AllCar = null

const getAllCar = () => {
    fetch('/getcars')
        .then((response) => response.json())
        .then((hasil) => {
            const body = document.getElementById('ambil-cars')
            for (let i = 0; i < hasil.length; i++) {
                const Car = document.createElement('div')
                Car.innerHTML = `<div class="col mb-3">
                <div class="card" style="width: 18rem;">

                    <img src="${hasil[i].image}" class="card-img-top" alt="..." style="height:250px; widht: 100px;">
                    <div class="card-body">
                        <h5>${hasil[i].manufacture}</h5>
                        <h5>${hasil[i].rentPerDay}</h5>
                        <p>${hasil[i].description}</p>
                      <div class="user">
                          <img src="./asset/fi_users.png" alt="">
                          <label for="">${hasil[i].capacity}</label>
                      </div>
                      <div class="setting">
                          <img src="./asset/fi_settings.png" alt="">
                          <label for="">${hasil[i].transmission}</label>
                      </div>
                      <div class="tahun">
                          <img src="./asset/fi_calendar.png" alt="">
                          <label for="">${hasil[i].year}</label>
                      </div>
                      <button type="button" class="btn btn-success" style="width: 250px; height: 50px; margin-top: 30px">Pilih Mobil</button>

                    </div>
                    
                  </div>
            </div>`

                body.appendChild(Car)
                
            }
            AllCar = hasil
        })
}

getAllCar()

const filterCar = (char,date,time,passenger) => {
    const tanggal = new Date(date)
    const timeDetail = new Date(time)
    const jam = timeDetail.getHours()
    const menit = timeDetail.getMinutes()
    tanggal.setMinutes(menit)
    tanggal.setHours(jam)
    let newCar = AllCar.filter(car =>
                {
                    return car.available.toString().includes(char) &&
                    new Date(car.availableAt) < tanggal &&
                    car.capacity.toString() >= passenger
                }
                 )
    const body = document.getElementById('ambil-cars')

    body.innerHTML = ''
            newCar.forEach((element, id) => {
                const Car = document.createElement('div')
                Car.innerHTML = `<div class="col mb-3">
                <div class="card" style="width: 18rem;">

                    <img src="${element.image}" class="card-img-top" alt="..." style="height:250px; widht: 100px;">
                    <div class="card-body">
                        <h5>${element.manufacture}</h5>
                        <h5>${element.rentPerDay}</h5>
                        <p>${element.description}</p>
                      <div class="user">
                          <img src="./asset/fi_users.png" alt="">
                          <label for="">${element.capacity}</label>
                      </div>
                      <div class="setting">
                          <img src="./asset/fi_settings.png" alt="">
                          <label for="">${element.transmission}</label>
                      </div>
                      <div class="tahun">
                          <img src="./asset/fi_calendar.png" alt="">
                          <label for="">${element.year}</label>
                      </div>
                      <button type="button" class="btn btn-success" style="width: 250px; height: 50px; margin-top: 30px">Pilih Mobil</button>

                    </div>
                    
                  </div>
            </div>`

                body.appendChild(Car)
            });
}


