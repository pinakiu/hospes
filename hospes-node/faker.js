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
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1602872029708-84d970d3382b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "https://plus.unsplash.com/premium_photo-1686090448451-fe1327f9b042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1599243272864-e9dd455966bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk2fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1509422007420-a57adf7b7fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEwfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIyfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
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
    price: Math.floor(Math.random() * 50 + 20),
    startDate: startDate,
    endDate: endDate,
    dietaryRestrictions: getRandomElement(dietaryRestrictions),
    capacity: Math.floor(Math.random() * 4 +1),
    homeImage: getRandomElement(homes),
    personImage: faker.image.avatar(),
    details: faker.lorem.sentence(),
    gender: getRandomElement(["Male", "Female", "Other"]),
    age: Math.floor(Math.random() * 30 + 18),
    rating: parseFloat((Math.random() * 3 + 2).toFixed(1)),
  };
}

const USERS = Array.from({ length: 100}, createRandomUser);
module.exports = {
  createRandomUser,
  USERS,
};

