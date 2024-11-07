
const sample = [
  {
    name: "Eden Gardens",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    capacity: 66000,
    dimensions: {
      length: 180,
      width: 150,
    },
    images: [
      {
        url: "https://static.india.com/wp-content/uploads/2018/08/16-kolkata-eden-gardens-3-1.jpg?impolicy=Medium_Resize&w=1200&h=800",
        description: "Main view of Eden Gardens",
      },
      {
        url: "https://akm-img-a-in.tosshub.com/indiatoday/eden-story_647_111717124404.jpg?VersionId=wuyw5Ou_lqTcRl81Yg_z42rVXXYxWI9i",
        description: "Close-up of the pitch",
      },
    ],
    matches: [],
    established: "1864-01-01",
    homeTeams: ["Kolkata Knight Riders"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  },
  {
    name: "Wankhede Stadium",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    capacity: 33000,
    dimensions: {
      length: 180,
      width: 140,
    },
    images: [
      {
        url: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2023-04/banner-1.jpg?h=1d4b4ebd&itok=O_B8CxOM",
        description: "Wankhede Stadium view",
      },
      {
        url: "https://static.tnn.in/thumb/msid-109213173,thumbsize-70430,width-1280,height-720,resizemode-75/109213173.jpg?quality=100",
        description: "Cricket action at Wankhede",
      },
    ],
    matches: [],
    established: "1974-01-01",
    homeTeams: ["Mumbai Indians"],
    pitchType: "Grass",
    lastRenovated: "2018-01-01",
  },
  {
    name: "M. Chinnaswamy Stadium",
    location: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    capacity: 40000,
    dimensions: {
      length: 160,
      width: 140,
    },
    images: [
      {
        url: "https://www.joinpaperplanes.com/wp-content/uploads/2024/02/Chinnaswamy-Stadium-%E2%80%94-Header.png",
        description: "View of M. Chinnaswamy Stadium",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymYjmYvI-qpQV9WZDLtoMKhNVvBVHvbP6xw&s",
        description: "Pitch at M. Chinnaswamy Stadium",
      },
    ],
    matches: [],
    established: "1969-01-01",
    homeTeams: ["Royal Challengers Bangalore"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "Feroz Shah Kotla Ground",
    location: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    capacity: 41000,
    dimensions: {
      length: 165,
      width: 135,
    },
    images: [
      {
        url: "https://www.cricwindow.com/images/stadiums/feroz_shah_kotla_stadium.jpg",
        description: "Feroz Shah Kotla Ground view",
      },
      {
        url: "https://www.cricketcountry.com/wp-content/uploads/2019/03/Feroz-Shah-Kotla-pitch-CA.jpg",
        description: "Close-up of Feroz Shah Kotla",
      },
    ],
    matches: [],
    established: "1883-01-01",
    homeTeams: ["Delhi Capitals"],
    pitchType: "Grass",
    lastRenovated: "2017-01-01",
  },
  {
    name: "Punjab Cricket Association Stadium",
    location: {
      city: "Mohali",
      state: "Punjab",
      country: "India",
    },
    capacity: 26500,
    dimensions: {
      length: 170,
      width: 150,
    },
    images: [
      {
        url: "https://www.cricwindow.com/images/stadiums/punjab_cricket_association_stadium.jpg",
        description: "View of Punjab Cricket Association Stadium",
      },
      {
        url: "https://images.tv9kannada.com/wp-content/uploads/2024/01/mohali-pitch-ind-vs-afg.jpg",
        description: "Action at Punjab Cricket Association",
      },
    ],
    matches: [],
    established: "1993-01-01",
    homeTeams: ["Kings XI Punjab"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
  {
    name: "Jawaharlal Nehru Stadium",
    location: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    capacity: 60000,
    dimensions: {
      length: 160,
      width: 140,
    },
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gVMIhYEG2pHk31k5_QXSJx34ic5LKKyP_g&s",
        description: "Jawaharlal Nehru Stadium view",
      },
      {
        url: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/09/20/Pictures/_424567da-9de6-11e7-ba2d-20fa1b34073f.jpg",
        description: "Jawaharlal Nehru Stadium close-up",
      },
    ],
    matches: [],
    established: "1982-01-01",
    homeTeams: ["Delhi Capitals"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "Sardar Patel Stadium",
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
    },
    capacity: 110000,
    dimensions: {
      length: 180,
      width: 150,
    },
    images: [
      {
        url: "https://www.cricwindow.com/images/stadiums/sardar_patel_stadium.jpg",
        description: "Sardar Patel Stadium view",
      },
      {
        url: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/05/22/Pictures/organised-conditions-hindustan-wankhede-practice-wankhede-association_aa70c086-9bd9-11ea-9ae4-6c4a5d56c128.jpg",
        description: "Inside Sardar Patel Stadium",
      },
    ],
    matches: [],
    established: "1982-01-01",
    homeTeams: ["Gujarat Titans"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
  {
    name: "M. A. Chidambaram Stadium",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    capacity: 50000,
    dimensions: {
      length: 160,
      width: 140,
    },
    images: [
      {
        url: "https://www.iplt20.com/assets/images/stadiumimage/Chennai-new.jpg",
        description: "M. A. Chidambaram Stadium view",
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2024-01-08_at_07.41.40.webp?v=1704680644",
        description: "Close-up of M. A. Chidambaram",
      },
    ],
    matches: [],
    established: "1916-01-01",
    homeTeams: ["Chennai Super Kings"],
    pitchType: "Grass",
    lastRenovated: "2018-01-01",
  },
  {
    name: "Rajiv Gandhi International Cricket Stadium",
    location: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
    capacity: 55000,
    dimensions: {
      length: 170,
      width: 140,
    },
    images: [
      {
        url: "https://static.toiimg.com/photo/103995162.cms",
        description: "Rajiv Gandhi International view",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PCcyfPywkVuXdusBE0-uaZ2uRxg2cX-maw&s",
        description: "Rajiv Gandhi International Stadium close-up",
      },
    ],
    matches: [],
    established: "2004-01-01",
    homeTeams: ["Sunrisers Hyderabad"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
  {
    name: "Holkar Cricket Stadium",
    location: {
      city: "Indore",
      state: "Madhya Pradesh",
      country: "India",
    },
    capacity: 30000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKArnykhV3bnSagyDnOODfAgd_1UqLqVniQ&s",
        description: "Holkar Cricket Stadium view",
      },
      {
        url: "https://cdn.newsnationtv.com/resize/460_-/images/2024/01/13/5-77.jpg",
        description: "Holkar Cricket Stadium close-up",
      },
    ],
    matches: [],
    established: "1990-01-01",
    homeTeams: ["Indore Royals"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  },
  {
    name: "Arun Jaitley Stadium",
    location: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    capacity: 41000,
    dimensions: {
      length: 165,
      width: 135,
    },
    images: [
      {
        url: "https://crictoday.com/wp-content/uploads/2023/10/Arun-Jaitley-Stadium-1.jpg",
        description: "Arun Jaitley Stadium view",
      },
      {
        url: "https://i.timesnowhindi.com/stories/Arun_Jaitley_stadium_Delhi_Pitch_report.jpg",
        description: "Close-up of Arun Jaitley Stadium",
      },
    ],
    matches: [],
    established: "1982-01-01",
    homeTeams: ["Delhi Capitals"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "DY Patil Stadium",
    location: {
      city: "Navi Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    capacity: 55000,
    dimensions: {
      length: 170,
      width: 140,
    },
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaBDAGtaWgy-SE0yxEGP1PG4iSLrsKtkoJg&s",
        description: "DY Patil Stadium view",
      },
      {
        url: "https://i.timesnowhindi.com/stories/dy_patil_4.jpg",
        description: "DY Patil Stadium close-up",
      },
    ],
    matches: [],
    established: "2008-01-01",
    homeTeams: ["Mumbai Indians"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  }  
];

module.exports = sample;