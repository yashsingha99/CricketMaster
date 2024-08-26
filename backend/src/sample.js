const Ground = require("./models/grounds.model");

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
        url: "https://www.royalchallengers.com/PRRCB01/public/styles/817x545_landscape/public/2020-04/275679.jpg?h=61617f72&itok=eXbopVaQ",
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
  },
  {
    name: "Kardinia Park",
    location: {
      city: "Geelong",
      state: "Victoria",
      country: "Australia",
    },
    capacity: 36000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://i.redd.it/gzf1l0gz2rsb1.jpg",
        description: "Kardinia Park view",
      },
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAODbtvAJHbYgy_vPXa5qWqT82Lh1Twf3kw&s",
        description: "Kardinia Park close-up",
      },
    ],
    matches: [],
    established: "1941-01-01",
    homeTeams: ["Geelong Cats"],
    pitchType: "Hybrid",
    lastRenovated: "2021-01-01",
  },
  {
    name: "Gabba",
    location: {
      city: "Brisbane",
      state: "Queensland",
      country: "Australia",
    },
    capacity: 42000,
    dimensions: {
      length: 170,
      width: 140,
    },
    images: [
      {
        url: "https://www.austadiums.com/stadiums/photos/The-Gabba.jpg",
        description: "Gabba view",
      },
      {
        url: "https://www.thestatesman.com/wp-content/uploads/2022/12/Gabba-Pitch-1.jpg",
        description: "Gabba close-up",
      },
    ],
    matches: [],
    established: "1895-01-01",
    homeTeams: ["Brisbane Heat"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "Melbourne Cricket Ground",
    location: {
      city: "Melbourne",
      state: "Victoria",
      country: "Australia",
    },
    capacity: 100024,
    dimensions: {
      length: 170,
      width: 130,
    },
    images: [
      {
        url: "https://s.ndtvimg.com/images/entities/300/melbourne-cricket-ground-26.png",
        description: "Melbourne Cricket Ground view",
      },
      {
        url: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/01/12/641342-638531-mcg-pitch-ashes-2017-18-twitter.jpg",
        description: "Melbourne Cricket Ground close-up",
      },
    ],
    matches: [],
    established: "1853-01-01",
    homeTeams: ["Melbourne Stars"],
    pitchType: "Grass",
    lastRenovated: "2018-01-01",
  },
  {
    name: "Sydney Cricket Ground",
    location: {
      city: "Sydney",
      state: "New South Wales",
      country: "Australia",
    },
    capacity: 48400,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/scg-1.jpg",
        description: "Sydney Cricket Ground view",
      },
      {
        url: "https://example.com/scg-2.jpg",
        description: "Sydney Cricket Ground close-up",
      },
    ],
    matches: [],
    established: "1848-01-01",
    homeTeams: ["Sydney Sixers"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
  {
    name: "Adelaide Oval",
    location: {
      city: "Adelaide",
      state: "South Australia",
      country: "Australia",
    },
    capacity: 53000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/adelaide-oval-1.jpg",
        description: "Adelaide Oval view",
      },
      {
        url: "https://example.com/adelaide-oval-2.jpg",
        description: "Adelaide Oval close-up",
      },
    ],
    matches: [],
    established: "1871-01-01",
    homeTeams: ["Adelaide Strikers"],
    pitchType: "Grass",
    lastRenovated: "2018-01-01",
  },
  {
    name: "Lord's Cricket Ground",
    location: {
      city: "London",
      state: "England",
      country: "United Kingdom",
    },
    capacity: 30000,
    dimensions: {
      length: 165,
      width: 135,
    },
    images: [
      {
        url: "https://example.com/lords-1.jpg",
        description: "Lord's Cricket Ground view",
      },
      {
        url: "https://example.com/lords-2.jpg",
        description: "Lord's Cricket Ground close-up",
      },
    ],
    matches: [],
    established: "1814-01-01",
    homeTeams: ["Marylebone Cricket Club"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "The Oval",
    location: {
      city: "London",
      state: "England",
      country: "United Kingdom",
    },
    capacity: 25000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/the-oval-1.jpg",
        description: "The Oval view",
      },
      {
        url: "https://example.com/the-oval-2.jpg",
        description: "The Oval close-up",
      },
    ],
    matches: [],
    established: "1845-01-01",
    homeTeams: ["Surrey"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  },
  {
    name: "Old Trafford",
    location: {
      city: "Manchester",
      state: "England",
      country: "United Kingdom",
    },
    capacity: 26000,
    dimensions: {
      length: 165,
      width: 135,
    },
    images: [
      {
        url: "https://example.com/old-trafford-1.jpg",
        description: "Old Trafford view",
      },
      {
        url: "https://example.com/old-trafford-2.jpg",
        description: "Old Trafford close-up",
      },
    ],
    matches: [],
    established: "1857-01-01",
    homeTeams: ["Lancashire"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "Edgbaston",
    location: {
      city: "Birmingham",
      state: "England",
      country: "United Kingdom",
    },
    capacity: 25000,
    dimensions: {
      length: 160,
      width: 130,
    },

    images: [
      {
        url: "https://example.com/edgbaston-1.jpg",
        description: "Edgbaston view",
      },
      {
        url: "https://example.com/edgbaston-2.jpg",
        description: "Edgbaston close-up",
      },
    ],
    matches: [],
    established: "1882-01-01",
    homeTeams: ["Warwickshire"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  },
  {
    name: "Trent Bridge",
    location: {
      city: "Nottingham",
      state: "England",
      country: "United Kingdom",
    },
    capacity: 15000,
    dimensions: {
      length: 155,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/trent-bridge-1.jpg",
        description: "Trent Bridge view",
      },
      {
        url: "https://example.com/trent-bridge-2.jpg",
        description: "Trent Bridge close-up",
      },
    ],
    matches: [],
    established: "1841-01-01",
    homeTeams: ["Nottinghamshire"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
  {
    name: "The Ageas Bowl",
    location: {
      city: "Southampton",
      state: "England",
      country: "United Kingdom",
    },
    capacity: 25000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/ageas-bowl-1.jpg",
        description: "The Ageas Bowl view",
      },
      {
        url: "https://example.com/ageas-bowl-2.jpg",
        description: "The Ageas Bowl close-up",
      },
    ],
    matches: [],
    established: "2001-01-01",
    homeTeams: ["Hampshire"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "Seddon Park",
    location: {
      city: "Hamilton",
      state: "Waikato",
      country: "New Zealand",
    },
    capacity: 6000,
    dimensions: {
      length: 155,
      width: 125,
    },
    images: [
      {
        url: "https://example.com/seddon-park-1.jpg",
        description: "Seddon Park view",
      },
      {
        url: "https://example.com/seddon-park-2.jpg",
        description: "Seddon Park close-up",
      },
    ],
    matches: [],
    established: "1952-01-01",
    homeTeams: ["Northern Districts"],
    pitchType: "Grass",
    lastRenovated: "2020-01-01",
  },
  {
    name: "Basin Reserve",
    location: {
      city: "Wellington",
      state: "Wellington",
      country: "New Zealand",
    },
    capacity: 11000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/basin-reserve-1.jpg",
        description: "Basin Reserve view",
      },
      {
        url: "https://example.com/basin-reserve-2.jpg",
        description: "Basin Reserve close-up",
      },
    ],
    matches: [],
    established: "1868-01-01",
    homeTeams: ["Wellington Firebirds"],
    pitchType: "Grass",
    lastRenovated: "2018-01-01",
  },
  {
    name: "Hagley Oval",
    location: {
      city: "Christchurch",
      state: "Canterbury",
      country: "New Zealand",
    },
    capacity: 5000,
    dimensions: {
      length: 155,
      width: 120,
    },
    images: [
      {
        url: "https://example.com/hagley-oval-1.jpg",
        description: "Hagley Oval view",
      },
      {
        url: "https://example.com/hagley-oval-2.jpg",
        description: "Hagley Oval close-up",
      },
    ],
    matches: [],
    established: "1881-01-01",
    homeTeams: ["Canterbury Kings"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  },
  {
    name: "Bellerive Oval",
    location: {
      city: "Hobart",
      state: "Tasmania",
      country: "Australia",
    },
    capacity: 20000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/bellerive-oval-1.jpg",
        description: "Bellerive Oval view",
      },
      {
        url: "https://example.com/bellerive-oval-2.jpg",
        description: "Bellerive Oval close-up",
      },
    ],
    matches: [],
    established: "1987-01-01",
    homeTeams: ["Hobart Hurricanes"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
  {
    name: "Blundstone Arena",
    location: {
      city: "Hobart",
      state: "Tasmania",
      country: "Australia",
    },
    capacity: 20000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/blundstone-arena-1.jpg",
        description: "Blundstone Arena view",
      },
      {
        url: "https://example.com/blundstone-arena-2.jpg",
        description: "Blundstone Arena close-up",
      },
    ],
    matches: [],
    established: "1987-01-01",
    homeTeams: ["Hobart Hurricanes"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  },
  {
    name: "Mount Maunganui",
    location: {
      city: "Mount Maunganui",
      state: "Bay of Plenty",
      country: "New Zealand",
    },
    capacity: 6000,
    dimensions: {
      length: 155,
      width: 120,
    },
    images: [
      {
        url: "https://example.com/mount-maunganui-1.jpg",
        description: "Mount Maunganui view",
      },
      {
        url: "https://example.com/mount-maunganui-2.jpg",
        description: "Mount Maunganui close-up",
      },
    ],
    matches: [],
    established: "1955-01-01",
    homeTeams: ["Central Districts"],
    pitchType: "Grass",
    lastRenovated: "2018-01-01",
  },
  {
    name: "Newlands",
    location: {
      city: "Cape Town",
      state: "Western Cape",
      country: "South Africa",
    },
    capacity: 25000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/newlands-1.jpg",
        description: "Newlands view",
      },
      {
        url: "https://example.com/newlands-2.jpg",
        description: "Newlands close-up",
      },
    ],
    matches: [],
    established: "1888-01-01",
    homeTeams: ["Cape Cobras"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
  {
    name: "Wanderers Stadium",
    location: {
      city: "Johannesburg",
      state: "Gauteng",
      country: "South Africa",
    },
    capacity: 34000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/wanderers-1.jpg",
        description: "Wanderers Stadium view",
      },
      {
        url: "https://example.com/wanderers-2.jpg",
        description: "Wanderers Stadium close-up",
      },
    ],
    matches: [],
    established: "1956-01-01",
    homeTeams: ["Highveld Lions"],
    pitchType: "Grass",
    lastRenovated: "2019-01-01",
  },
  {
    name: "Kingsmead",
    location: {
      city: "Durban",
      state: "KwaZulu-Natal",
      country: "South Africa",
    },
    capacity: 25000,
    dimensions: {
      length: 160,
      width: 130,
    },
    images: [
      {
        url: "https://example.com/kingsmead-1.jpg",
        description: "Kingsmead view",
      },
      {
        url: "https://example.com/kingsmead-2.jpg",
        description: "Kingsmead close-up",
      },
    ],
    matches: [],
    established: "1923-01-01",
    homeTeams: ["Durban Heat"],
    pitchType: "Grass",
    lastRenovated: "2021-01-01",
  },
];

module.exports = sample;