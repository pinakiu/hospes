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
   "https://images.unsplash.com/photo-1525881652041-60a28ba9778e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDAyfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1524061511843-fd43443e3cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
   "https://images.unsplash.com/photo-1509732499382-20be2145852e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE3fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1560026301-88340cf16be7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDM1fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1610569244414-5e7453a447a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDY0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDg1fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDk4fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1636138390620-119327795fef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTE1fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTMxfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTQwfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1574741690638-84dc0244851a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTQ2fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTc0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTk3fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1540393941896-255c66854aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjEyfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjUzfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1523772354886-34a1dc2f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjkyfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzQxfHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
   "https://images.unsplash.com/photo-1532089957061-ceb61a40b6be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzc2fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODY5fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1541701768-a3d67ec0bc0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTE0fHxob21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
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

const USERS = Array.from({ length: 24}, createRandomUser);
module.exports = {
  createRandomUser,
  USERS,
};


