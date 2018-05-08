// food is an array of possible restaurants

var food = [{
    name: "Heirloom Market BBQ",
    photo: "https://cdn.vox-cdn.com/thumbor/OBD-phCIuOks9dqLqeQPUqHtVFE=/0x0:1600x900/520x390/filters:focal(672x322:928x578):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58263397/Heirloom_20Market_20BBQ_20-_20EATL_20-_2001-2.0.0.0.0.jpg",
    scores: [
      "1",
      "2",
      "3",
      "3",
      "2",
      "2"
    ]
  }, {
    name: "Porch Light Latin Kitchen",
    photo: "https://cdn.vox-cdn.com/thumbor/ABhmbzwMlqTTnx2w_oOi_LHrU20=/0x0:960x639/520x390/filters:focal(404x244:556x396):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58263399/12509582_1135502633161887_6547723717684186674_n.0.0.jpg",
    scores: [
      "2",
      "3",
      "3",
      "1",
      "1",
      "1"
    ]
  },
  {
    name: "Atlas",
    photo: "https://cdn.vox-cdn.com/thumbor/N8IRpB8tq-VUEtWkA98kqx7QgoQ=/0x0:5616x3744/520x390/filters:focal(2359x1423:3257x2321):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58263403/Atlas_-_005_-_Brian_Gassel.0.0.jpg",
    scores: [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1"
    ]
  },
  {
    name: "Desta Ethiopian Kitchen",
    photo: "https://cdn.vox-cdn.com/thumbor/EnyaSpBoS1UhOguR4z8UL98QSmQ=/0x0:960x641/520x390/filters:focal(404x245:556x397):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58263407/12047013_1038039689553141_793432965410667820_n.0.0.jpg",
    scores: [
      "3",
      "1",
      "3",
      "3",
      "2",
      "2"
    ]
  },
  {
    name: "Royal Myanmar Cuisine",
    photo: "https://cdn.vox-cdn.com/thumbor/lux8m4krydEzytOlih7vBFq68ls=/0x0:1000x1000/520x390/filters:focal(420x420:580x580):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58263409/RoyalMyanmarGraceL.0.jpg",
    scores: [
      "3",
      "3",
      "2",
      "2",
      "2",
      "1"
    ]
  },
  {
    name: "Cakes & Ale",
    photo: "https://cdn.vox-cdn.com/thumbor/szAxsqKv7bQonHuKmCNmIftS1Zk=/0x0:960x637/520x390/filters:focal(404x243:556x395):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58263431/cakes.0.0.jpg",
    scores: [
      "2",
      "2",
      "2",
      "2",
      "2",
      "2"
    ]
  }

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = food;