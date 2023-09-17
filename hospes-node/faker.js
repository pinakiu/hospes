const { faker } = require('@faker-js/faker');
const { get } = require('./routers/userRouter');

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

    function addSevenMonths(date) {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + 7);
      return newDate;
  }
  
  let startDate = getRandomDate();
  const lastPossibleStartDate = new Date().setFullYear(new Date().getFullYear() + 1) - 210*24*60*60*1000; // 210 days (about 7 months) in milliseconds
  while (startDate.getTime() > lastPossibleStartDate) {
      startDate = getRandomDate();
  }
  
  let endDate = addSevenMonths(startDate);
  while (endDate <= addSevenMonths(startDate)) {
      endDate = getRandomDate();
  }
    const homes = [
      "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3625711/pexels-photo-3625711.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3075974/pexels-photo-3075974.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2972969/pexels-photo-2972969.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3221216/pexels-photo-3221216.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3571200/pexels-photo-3571200.png?auto=compress&cs=tinysrgb&w=800"
    ]

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
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    const languages = ['Mandarin Chinese', 'Spanish', 'Hindi', 'Arabic', 'Portuguese', 'Bengali', 'Russian', 'Japanese'];
    
    const shuffledLanguages = shuffleArray([...languages]);
    const numLanguages = Math.floor(Math.random() * 2) + 1;
    const randomLanguages = shuffledLanguages.slice(0, numLanguages);

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
    language: randomLanguages,
    price: Math.floor(Math.random() * 70),
    startDate: startDate,
    endDate: endDate,
    dietaryRestrictions: getRandomElement(dietaryRestrictions),
    capacity: Math.floor(Math.random() * 5),
    homeImage: getRandomElement(homes),
    personImage: faker.image.avatar(),
    details: faker.lorem.sentence(),
    gender: getRandomElement(["Male", "Female", "Other"]),
    age: Math.floor(Math.random() * 30 + 18),
    rating: parseFloat((Math.random() * 3 + 2).toFixed(1)),
  };
}

const USERS = Array.from({ length: 5}, createRandomUser);
module.exports = {
  createRandomUser,
  USERS,
};

