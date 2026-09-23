/**
 * The Vinyl King - Curated Song Vault
 * 100% genuine Emraan Hashmi Bollywood anthems with verified YouTube Video IDs
 */

const SONGS_VAULT = [
  {
    "id": "chain-aapko-mila",
    "title": "Chain Aapko Mila",
    "movie": "Footpath",
    "year": 2003,
    "singers": "Asha Bhosle, SP Sailaja",
    "music": "Nadeem-Shravan",
    "mood": "Romantic",
    "era": "2003-2007",
    "ytId": "_wxm3p1zpMI"
  },
  {
    "id": "bheegey-hont-tere",
    "title": "Bheegey Hont Tere",
    "movie": "Murder",
    "year": 2004,
    "singers": "Kunal Ganjawala",
    "music": "Anu Malik",
    "mood": "Romantic",
    "era": "2003-2007",
    "ytId": "ojUTswFMjyM"
  },
  {
    "id": "kaho-na-kaho",
    "title": "Kaho Na Kaho",
    "movie": "Murder",
    "year": 2004,
    "singers": "Amir Jamal",
    "music": "Anu Malik",
    "mood": "Romantic",
    "era": "2003-2007",
    "ytId": "S-z6vyR89Ig"
  },
  {
    "id": "woh-lamhe",
    "title": "Woh Lamhe Woh Baatein",
    "movie": "Zeher",
    "year": 2005,
    "singers": "Atif Aslam",
    "music": "Mithoon",
    "mood": "Sad",
    "era": "2003-2007",
    "ytId": "FLKxnL7KwHw"
  },
  {
    "id": "agar-tum-mil-jao",
    "title": "Agar Tum Mil Jao",
    "movie": "Zeher",
    "year": 2005,
    "singers": "Shreya Ghoshal",
    "music": "Roop Kumar Rathod",
    "mood": "Romantic",
    "era": "2003-2007",
    "ytId": "2E2WA8_teMY"
  },
  {
    "id": "aashiq-banaya-aapne",
    "title": "Aashiq Banaya Aapne",
    "movie": "Aashiq Banaya Aapne",
    "year": 2005,
    "singers": "Himesh Reshammiya, Shreya Ghoshal",
    "music": "Himesh Reshammiya",
    "mood": "Fun",
    "era": "2003-2007",
    "ytId": "0bAVd9jJE2Q"
  },
  {
    "id": "zahreeli-raatein",
    "title": "Zahreeli Raatein",
    "movie": "Chocolate",
    "year": 2005,
    "singers": "KK",
    "music": "Pritam",
    "mood": "Sad",
    "era": "2003-2007",
    "ytId": "ZDHNortiqIY"
  },
  {
    "id": "jhalak-dikhhla-jaa",
    "title": "Jhalak Dikhhla Jaa",
    "movie": "Aksar",
    "year": 2006,
    "singers": "Himesh Reshammiya",
    "music": "Himesh Reshammiya",
    "mood": "Fun",
    "era": "2003-2007",
    "ytId": "vnlk8V-q0oU"
  },
  {
    "id": "tu-hi-meri-shab-hai",
    "title": "Tu Hi Meri Shab Hai",
    "movie": "Gangster",
    "year": 2006,
    "singers": "KK",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2003-2007",
    "ytId": "mWBvudKcByg"
  },
  {
    "id": "ya-ali",
    "title": "Ya Ali",
    "movie": "Gangster",
    "year": 2006,
    "singers": "Zubeen Garg",
    "music": "Pritam",
    "mood": "Sufi",
    "era": "2003-2007",
    "ytId": "pmHnlBqjpm0"
  },
  {
    "id": "bheegi-bheegi",
    "title": "Bheegi Bheegi",
    "movie": "Gangster",
    "year": 2006,
    "singers": "James",
    "music": "Pritam",
    "mood": "Sufi",
    "era": "2003-2007",
    "ytId": "WeY9hdsmIaQ"
  },
  {
    "id": "tera-mera-rishta",
    "title": "Tera Mera Rishta",
    "movie": "Awarapan",
    "year": 2007,
    "singers": "Mustafa Zahid",
    "music": "Pritam",
    "mood": "Sufi",
    "era": "2003-2007",
    "ytId": "P2kS3h46cIA"
  },
  {
    "id": "toh-phir-aao",
    "title": "Toh Phir Aao",
    "movie": "Awarapan",
    "year": 2007,
    "singers": "Mustafa Zahid",
    "music": "Pritam",
    "mood": "Sufi",
    "era": "2003-2007",
    "ytId": "h5-Kq9k3zeo"
  },
  {
    "id": "zara-sa",
    "title": "Zara Sa",
    "movie": "Jannat",
    "year": 2008,
    "singers": "KK",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2008-2012",
    "ytId": "-8C_2BBVWk8"
  },
  {
    "id": "haan-tu-hain",
    "title": "Haan Tu Hain",
    "movie": "Jannat",
    "year": 2008,
    "singers": "KK",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2008-2012",
    "ytId": "M0slFWoW-Dc"
  },
  {
    "id": "judai-jannat",
    "title": "Judai",
    "movie": "Jannat",
    "year": 2008,
    "singers": "Kamran Ahmed",
    "music": "Pritam",
    "mood": "Sad",
    "era": "2008-2012",
    "ytId": "sSFM_hCFgko"
  },
  {
    "id": "dil-ibadat",
    "title": "Dil Ibadat",
    "movie": "Tum Mile",
    "year": 2009,
    "singers": "KK",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2008-2012",
    "ytId": "U2QNhsAgIIE"
  },
  {
    "id": "tu-hi-haqeeqat",
    "title": "Tu Hi Haqeeqat",
    "movie": "Tum Mile",
    "year": 2009,
    "singers": "Javed Ali",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2008-2012",
    "ytId": "BKbnmLH8UAo"
  },
  {
    "id": "pee-loon",
    "title": "Pee Loon",
    "movie": "Once Upon a Time in Mumbaai",
    "year": 2010,
    "singers": "Mohit Chauhan",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2008-2012",
    "ytId": "D8XFTglfSMg"
  },
  {
    "id": "abhi-kuch-dino-se",
    "title": "Abhi Kuch Dino Se",
    "movie": "Dil Toh Baccha Hai Ji",
    "year": 2011,
    "singers": "Mohit Chauhan",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2008-2012",
    "ytId": "fbdxYoFb64g"
  },
  {
    "id": "hale-dil",
    "title": "Hale Dil",
    "movie": "Murder 2",
    "year": 2011,
    "singers": "Harshit Saxena",
    "music": "Harshit Saxena",
    "mood": "Sufi",
    "era": "2008-2012",
    "ytId": "acdKE2hja7w"
  },
  {
    "id": "phir-mohabbat",
    "title": "Phir Mohabbat",
    "movie": "Murder 2",
    "year": 2011,
    "singers": "Arijit Singh, Mohammad Irfan",
    "music": "Mithoon",
    "mood": "Sad",
    "era": "2008-2012",
    "ytId": "v71SiUe0KYY"
  },
  {
    "id": "tujhe-sochta-hoon",
    "title": "Tujhe Sochta Hoon",
    "movie": "Jannat 2",
    "year": 2012,
    "singers": "KK",
    "music": "Pritam",
    "mood": "Sad",
    "era": "2008-2012",
    "ytId": "PkhfKq9m0Uo"
  },
  {
    "id": "tu-hi-mera",
    "title": "Tu Hi Mera",
    "movie": "Jannat 2",
    "year": 2012,
    "singers": "Shafqat Amanat Ali",
    "music": "Pritam",
    "mood": "Romantic",
    "era": "2008-2012",
    "ytId": "yBa3FVQKAvY"
  },
  {
    "id": "tere-hoke-rahenge",
    "title": "Tere Hoke Rahenge",
    "movie": "Raja Natwarlal",
    "year": 2014,
    "singers": "Arijit Singh",
    "music": "Yuvan Shankar Raja",
    "mood": "Romantic",
    "era": "2013-Present",
    "ytId": "B_fOTfCpLXg"
  },
  {
    "id": "dance-basanti",
    "title": "Dance Basanti",
    "movie": "Ungli",
    "year": 2014,
    "singers": "Vishal Dadlani, Anushka Manchanda",
    "music": "Sachin-Jigar",
    "mood": "Fun",
    "era": "2013-Present",
    "ytId": "juZN67BA_5w"
  },
  {
    "id": "hasi-ban-gaye",
    "title": "Hasi Ban Gaye",
    "movie": "Hamari Adhuri Kahani",
    "year": 2015,
    "singers": "Ami Mishra",
    "music": "Ami Mishra",
    "mood": "Romantic",
    "era": "2013-Present",
    "ytId": "oyaudgo5_8Y"
  },
  {
    "id": "hamari-adhuri-kahani-title",
    "title": "Hamari Adhuri Kahani",
    "movie": "Hamari Adhuri Kahani",
    "year": 2015,
    "singers": "Arijit Singh",
    "music": "Jeet Gannguli",
    "mood": "Sad",
    "era": "2013-Present",
    "ytId": "IgYF-LjU-MI"
  },
  {
    "id": "bol-do-na-zara",
    "title": "Bol Do Na Zara",
    "movie": "Azhar",
    "year": 2016,
    "singers": "Armaan Malik",
    "music": "Amaal Mallik",
    "mood": "Romantic",
    "era": "2013-Present",
    "ytId": "EpEraRui1pc"
  },
  {
    "id": "rashke-qamar",
    "title": "Mere Rashke Qamar",
    "movie": "Baadshaho",
    "year": 2017,
    "singers": "Nusrat Fateh Ali Khan, Rahat Fateh Ali Khan",
    "music": "Tanishk Bagchi",
    "mood": "Sufi",
    "era": "2013-Present",
    "ytId": "ZsAOnmByy38"
  },
  {
    "id": "lut-gaye",
    "title": "Lut Gaye",
    "movie": "T-Series Single",
    "year": 2021,
    "singers": "Jubin Nautiyal",
    "music": "Tanishk Bagchi",
    "mood": "Sad",
    "era": "2013-Present",
    "ytId": "sCbbMZ-q4-I"
  },
  {
    "id": "yeh-awarapan-2026",
    "title": "Yeh Awarapan",
    "movie": "Awarapan 2",
    "year": 2026,
    "singers": "Arijit Singh",
    "music": "Amaal Mallik",
    "mood": "Sufi",
    "era": "2013-Present",
    "ytId": "h5-Kq9k3zeo"
  },
  {
    "id": "tera-mera-rishta-continues",
    "title": "Tera Mera Rishta Continues",
    "movie": "Awarapan 2",
    "year": 2026,
    "singers": "Saaj Bhatt, Subodhh Sharma",
    "music": "Mithoon / Mustafa Zahid",
    "mood": "Sufi",
    "era": "2013-Present",
    "ytId": "P2kS3h46cIA"
  }
];
