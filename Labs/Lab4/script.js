let currentIndex = 0;
const menuImages = [
    {
        img: "../images/garlic-butter-chicken.jpg",
        name: "Garlic Butter Chicken",
        desc: "Seared chicken breasts or thighs topped with a garlic butter base.",
        price: "$15.99",
    },
    {
        img: "../images/grilled-chicken-tenders.jpg",
        name: "Grilled Chicken Tenders",
        desc: "12 pieces of open flame grilled chicken tenders.",
        price: "$12.99",
    },
    {
        img: "../images/crispy-chicken-sandwich.jpg",
        name: "Crispy Chicken Sandwich",
        desc: "Fresh toppings and even better than Chick-Fil-A",
        price: "$10.99",
    },
    {
        img: "../images/sirloin-steak.jpg",
        name: "Sirloin Steak",
        desc: "Cooked to your preference, the most juiciest steak you'll ever have.",
        price: "$18.99",
    },
    {
        img: "../images/drinks.jpg",
        name: "Refreshing Drinks",
        desc: "A variety of refreshing beverages. ID must be shown for alcoholic beverages.",
        price: "Prices vary."
    }
];

function updateImage() {
    document.getElementById("menuItems").src = menuImages[currentIndex].img;
    document.getElementById("menuTitle").innerText = menuImages[currentIndex].name;
    document.getElementById("menuDesc").innerText = menuImages[currentIndex].desc;
    document.getElementById("menuPrice").innerText = menuImages[currentIndex].price;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuImages.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + menuImages.length) % menuImages.length;
    updateImage();
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('jobForm');
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const zipcodeInput = document.getElementById('zipcode');
    const ageInput = document.getElementById('age');
    const phoneInput = document.getElementById('phone');
    const maritalStatusInput = document.getElementById('maritalStatus');
    const infoInput = document.getElementById('info');
    const charCounter = document.getElementById('charCounter');

    function validateAge(age) {
        age = parseInt(age, 10);
        if (isNaN(age)) {
            alert('Please enter a valid number for age.');
            return false;
        }
        if (age < 21 || age > 99) {
            alert('Age must be between 21 and 99.');
            return false;
        }
        return age;
    }

    function validatePhone(phone) {
        phone = phone.replace(/[^\d]/g, '');
        if (phone.length !== 10) {
            alert('Phone number must be 10 digits.');
            return false;
        }
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Format as 111-222-3333
    }

    function validateZipcode(zipcode) {
        const zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zipcode)) {
            alert('Zip code must be a 5-digit number.');
            return false;
        }
        return zipcode;
    }

    function updateCharCounter() {
        const remaining = 30 - infoInput.value.length;
        charCounter.textContent = `${remaining} characters remaining`;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        if (!name) {
            alert('Please enter your full name.');
            return;
        }

        const address = addressInput.value.trim();
        if (!address) {
            alert('Please enter your address.');
            return;
        }

        const city = cityInput.value.trim();
        if (!city) {
            alert('Please enter your city.');
            return;
        }

        const state = stateInput.value.trim();
        if (!state) {
            alert('Please enter your state.');
            return;
        }

        const zipcode = validateZipcode(zipcodeInput.value);
        if (zipcode === false) return;

        const age = validateAge(ageInput.value);
        if (age === false) return;

        const phone = validatePhone(phoneInput.value);
        if (phone === false) return;

        const maritalStatus = maritalStatusInput.value;

        const info = infoInput.value;

        console.log('Form Data Submitted:');
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('City:', city);
        console.log('State:', state);
        console.log('Zip Code:', zipcode);
        console.log('Age:', age);
        console.log('Phone:', phone);
        console.log('Marital Status:', maritalStatus);
        console.log('More Info:', info);

        form.reset();
    });

    infoInput.addEventListener('input', updateCharCounter);
});