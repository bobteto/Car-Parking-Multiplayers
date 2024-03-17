const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// متغيرات اللعبة
const cars = [];
const parkingSpots = [];
const score = 0;

// تحميل الصور
const carImage = new Image();
carImage.src = "car.png";

const parkingSpotImage = new Image();
parkingSpotImage.src = "parking_spot.png";

// دالة لإنشاء سيارة
function createCar() {
    const car = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 5,
        vy: Math.random() * 5,
    };
    cars.push(car);
}

// دالة لإنشاء مكان لوقوف السيارات
function createParkingSpot() {
    const parkingSpot = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
    };
    parkingSpots.push(parkingSpot);
}

// دالة لرسم اللعبة
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // رسم السيارات
    for (const car of cars) {
        ctx.drawImage(carImage, car.x, car.y);
    }

    // رسم أماكن وقوف السيارات
    for (const parkingSpot of parkingSpots) {
        ctx.drawImage(parkingSpotImage, parkingSpot.x, parkingSpot.y);
    }

    // تحديث مواقع السيارات
    for (const car of cars) {
        car.x += car.vx;
        car.y += car.vy;

        // التحقق من اصطدام السيارة بحافة اللوحة
        if (car.x < 0 || car.x > canvas.width) {
            car.vx *= -1;
        }
        if (car.y < 0 || car.y > canvas.height) {
            car.vy *= -1;
        }
    }

    // التحقق من اصطدام السيارة بمكان لوقوف السيارات
    for (const car of cars) {
        for (const parkingSpot of parkingSpots) {
            if (
                car.
