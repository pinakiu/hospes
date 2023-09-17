const { faker } = require('@faker-js/faker');

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

    function createRandomUser() {
    function getRandomDate() {
        const today = new Date();
        const nextYear = new Date().setFullYear(today.getFullYear() + 1);
        const randomTime = today.getTime() + Math.random() * (nextYear - today.getTime());
        return new Date(randomTime);
    }

    function addThreeMonths(date) {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + 3);
        return newDate;
    }

    let startDate = getRandomDate();
    const lastPossibleStartDate = new Date().setFullYear(new Date().getFullYear() + 1) - 90*24*60*60*1000; // 90 days (about 3 months) in milliseconds
    while (startDate.getTime() > lastPossibleStartDate) {
        startDate = getRandomDate();
    }

    let endDate = addThreeMonths(startDate);
    while (endDate <= addThreeMonths(startDate)) {
        endDate = getRandomDate();
    }


    const cities = [
        "New York City, NY",
        "Los Angeles, CA",
        "Chicago, IL",
        "Houston, TX",
        "Phoenix, AZ",
        "Philadelphia, PA",
        "San Antonio, TX",
        "San Diego, CA",
        "Dallas, TX",
        "San Jose, CA",
        "Austin, TX",
        "Jacksonville, FL",
        "Fort Worth, TX",
        "Columbus, OH",
        "San Francisco, CA",
        "Charlotte, NC",
        "Indianapolis, IN",
        "Seattle, WA",
        "Denver, CO",
        "Washington, DC"
      ];
    const languages = ["Chinese", 
        "Spanish", 
        "English", 
        "Hindi",
        "Arabic", 
        "Bengali",
        "Portuguese",
        "Russian", "Japanese", "Lahnda (Western Punjabi)"
    ];
    const dietaryRestrictions = [
        'Vegetarian',
        'Vegan',
        'Gluten-Free',
        'Kosher',
        'Halal',
        'Pescatarian',
        'Dairy-Free',
        'Nut-Free',
        'Soy-Free',
        'No Restrictions'
    ]
    const countriesWithMostImmigrantsToUS = [
        'Mexico',
        'China',
        'India',
        'Philippines',
        'Vietnam',
        'El Salvador',
        'Cuba',
        'Dominican Republic',
        'South Korea',
      ];
      
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.person.fullName(),
    hostOrGuest: "Host",
    first_time: getRandomElement([true, false]),
    origin: getRandomElement(countriesWithMostImmigrantsToUS),
    location: getRandomElement(cities),
    language: getRandomElement(languages),
    price: Math.floor(Math.random() * 100),
    startDate: startDate,
    endDate: endDate,
    dietaryRestrictions: getRandomElement(dietaryRestrictions),
    capacity: Math.floor(Math.random() * 5),
    homeImage: "",
    personImage: faker.image.avatar(),
    details: faker.lorem.sentence(),
    gender: getRandomElement(["Male", "Female", "Other"]),
    age: Math.floor(Math.random() * 45),
    rating: parseFloat((Math.random() * 5).toFixed(1)),
  };
}

const USERS = Array.from({ length: 1 }, createRandomUser);
console.log(USERS)
module.exports = {
  createRandomUser,
  USERS,
};

