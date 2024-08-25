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
        url: "https://www.google.com/search?sca_esv=e7a2bf937769b224&rlz=1C1UEAD_enIN1108IN1108&udm=2&sxsrf=ADLYWILRb4r_Lkv1EjDJ9IPcHCd_TvDL2g:1724580918953&q=chinnaswamy+stadium&spell=1&sa=X&ved=2ahUKEwjB2b3I9I-IAxWTRWcHHYmOAZIQBSgAegQIBxAB&biw=1536&bih=695&dpr=1.25",
        description: "View of M. Chinnaswamy Stadium",
      },
      {
        url: "https://www.google.com/search?q=chinnaswamy+stadium+pitch&sca_esv=e7a2bf937769b224&rlz=1C1UEAD_enIN1108IN1108&udm=2&biw=1536&bih=695&sxsrf=ADLYWIJIYPk1g1FJciqL7Xp_2wkibyssCw%3A1724580939377&ei=SwTLZrLTFtWTseMPma_Q6Qo&oq=chinnaswamy+stadium+pi&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmNoaW5uYXN3YW15IHN0YWRpdW0gcGkqAggAMgUQABiABDIFEAAYgAQyBxAAGIAEGBgyBxAAGIAEGBgyBxAAGIAEGBgyBxAAGIAEGBgyBxAAGIAEGBgyBxAAGIAEGBgyBxAAGIAEGBgyBxAAGIAEGBhIsRBQAFgAcAB4AJABAJgBngKgAZ4CqgEDMi0xuAEDyAEAmAIBoAKlApgDAIgGAZIHAzItMaAHugY&sclient=gws-wiz-serp",
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
        url: "https://www.google.com/search?q=feroz+shah+kotla+stadium+&sca_esv=e7a2bf937769b224&rlz=1C1UEAD_enIN1108IN1108&udm=2&biw=1536&bih=695&sxsrf=ADLYWIKcu3lvb2OG9pLkdJcmqMItVw_DMg%3A1724581014907&ei=lgTLZqyKN5WbnesPrM6_sA8&ved=0ahUKEwisrZ729I-IAxWVTWcHHSznD_YQ4dUDCBA&uact=5&oq=feroz+shah+kotla+stadium+&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWZlcm96IHNoYWgga290bGEgc3RhZGl1bSAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIEEAAYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAgYHjIHEAAYgAQYGEiNE1CQAliKC3ABeACQAQCYAd4BoAG8B6oBBTAuMy4yuAEDyAEA-AEBmAICoAKlA5gDAIgGAZIHBTAuMS4xoAe5CA&sclient=gws-wiz-serp",
        description: "Feroz Shah Kotla Ground view",
      },
      {
        url: "https://www.google.com/search?sca_esv=e7a2bf937769b224&rlz=1C1UEAD_enIN1108IN1108&udm=2&sxsrf=ADLYWIKdbC3Gy4R15NNdp4Q09XOMO9NyGQ:1724581012162&q=feroz+shah+kotla+stadium+pitch&spell=1&sa=X&ved=2ahUKEwjCw_b09I-IAxWhR2wGHQJIIWAQBSgAegQIBxAB&biw=1536&bih=695&dpr=1.25",
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
        url: "https://www.google.com/search?q=punjab+cricket+association+stadium&sca_esv=e7a2bf937769b224&rlz=1C1UEAD_enIN1108IN1108&udm=2&biw=1536&bih=695&sxsrf=ADLYWIJm_mgF1vbZ0qdBxcr1zGQceexzog%3A1724581043177&ei=swTLZq7ICoWHnesP0buC0As&oq=punja+stadium&gs_lp=Egxnd3Mtd2l6LXNlcnAiDXB1bmphIHN0YWRpdW0qAggAMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMggQABgFGAcYHkijNlCLGljvLHADeACQAQCYAc8BoAHdCKoBBTAuNC4yuAEDyAEA-AEBmAIIoALsB8ICBBAjGCfCAgoQABiABBhDGIoFwgIFEAAYgATCAgYQABgIGB6YAwCIBgGSBwUzLjQuMaAHyiQ&sclient=gws-wiz-serp",
        description: "View of Punjab Cricket Association Stadium",
      },
      {
        url: "https://www.google.com/search?q=punjab+cricket+association+stadium+pitch&sca_esv=e7a2bf937769b224&rlz=1C1UEAD_enIN1108IN1108&udm=2&biw=1536&bih=695&sxsrf=ADLYWIIpAAVg43DWlbaey0v4DPlI7Jl5qg%3A1724581093622&ei=5QTLZr3VJf-LnesP4uXBuAE&ved=0ahUKEwj92-Kb9Y-IAxX_RWcHHeJyEBcQ4dUDCBA&uact=5&oq=punjab+cricket+association+stadium+pitch&gs_lp=Egxnd3Mtd2l6LXNlcnAiKHB1bmphYiBjcmlja2V0IGFzc29jaWF0aW9uIHN0YWRpdW0gcGl0Y2gyBxAAGIAEGBgyBxAAGIAEGBgyBxAAGIAEGBhIkTVQAFjFL3AAeACQAQCYAbsCoAGYEqoBBzAuNS41LjG4AQPIAQD4AQGYAgigAskOwgIFEAAYgATCAgQQABgemAMAkgcHMC4yLjUuMaAH6yY&sclient=gws-wiz-serp",
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
        url: "https://example.com/jawaharlal-nehru-1.jpg",
        description: "Jawaharlal Nehru Stadium view",
      },
      {
        url: "https://example.com/jawaharlal-nehru-2.jpg",
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
        url: "https://example.com/sardar-patel-1.jpg",
        description: "Sardar Patel Stadium view",
      },
      {
        url: "https://example.com/sardar-patel-2.jpg",
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
        url: "https://example.com/ma-chidambaram-1.jpg",
        description: "M. A. Chidambaram Stadium view",
      },
      {
        url: "https://example.com/ma-chidambaram-2.jpg",
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
        url: "https://example.com/rajiv-gandhi-1.jpg",
        description: "Rajiv Gandhi International view",
      },
      {
        url: "https://example.com/rajiv-gandhi-2.jpg",
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
        url: "https://example.com/holkar-1.jpg",
        description: "Holkar Cricket Stadium view",
      },
      {
        url: "https://example.com/holkar-2.jpg",
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
        url: "https://example.com/arun-jaitley-1.jpg",
        description: "Arun Jaitley Stadium view",
      },
      {
        url: "https://example.com/arun-jaitley-2.jpg",
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
        url: "https://example.com/dy-patil-1.jpg",
        description: "DY Patil Stadium view",
      },
      {
        url: "https://example.com/dy-patil-2.jpg",
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
        url: "https://example.com/kardinia-park-1.jpg",
        description: "Kardinia Park view",
      },
      {
        url: "https://example.com/kardinia-park-2.jpg",
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
        url: "https://example.com/gabba-1.jpg",
        description: "Gabba view",
      },
      {
        url: "https://example.com/gabba-2.jpg",
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
        url: "https://example.com/mcg-1.jpg",
        description: "Melbourne Cricket Ground view",
      },
      {
        url: "https://example.com/mcg-2.jpg",
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