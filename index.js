let displayCountryListEl = document.getElementById("displayAllCountries");
let allContinents = [
  {
    continentalName: "North America",
    id: "NORTH AMERICA",
    timeZones: [
      "America/Adak",
      "America/Anchorage",
      "America/Anguilla",
      "America/Antigua",
      "America/Araguaina",
      "America/Argentina/Buenos_Aires",
      "America/Argentina/Catamarca",
      "America/Argentina/ComodRivadavia",
      "America/Argentina/Cordoba",
      "America/Argentina/Jujuy",
      "America/Argentina/La_Rioja",
      "America/Argentina/Mendoza",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Salta",
      "America/Argentina/San_Juan",
      "America/Argentina/San_Luis",
      "America/Argentina/Tucuman",
      "America/Argentina/Ushuaia",
      "America/Aruba",
      "America/Asuncion",
      "America/Atikokan",
      "America/Atka",
      "America/Bahia",
      "America/Bahia_Banderas",
      "America/Barbados",
      "America/Belem",
      "America/Belize",
      "America/Blanc-Sablon",
      "America/Boa_Vista",
      "America/Bogota",
      "America/Boise",
      "America/Buenos_Aires",
      "America/Cambridge_Bay",
      "America/Campo_Grande",
      "America/Cancun",
      "America/Caracas",
      "America/Catamarca",
      "America/Cayenne",
      "America/Cayman",
      "America/Chicago",
      "America/Chihuahua",
      "America/Ciudad_Juarez",
      "America/Coral_Harbour",
      "America/Cordoba",
      "America/Costa_Rica",
      "America/Creston",
      "America/Cuiaba",
      "America/Curacao",
      "America/Danmarkshavn",
      "America/Dawson",
      "America/Dawson_Creek",
      "America/Denver",
      "America/Detroit",
      "America/Dominica",
      "America/Edmonton",
      "America/Eirunepe",
      "America/El_Salvador",
      "America/Ensenada",
      "America/Fort_Nelson",
      "America/Fort_Wayne",
      "America/Fortaleza",
      "America/Glace_Bay",
      "America/Godthab",
      "America/Goose_Bay",
      "America/Grand_Turk",
      "America/Grenada",
      "America/Guadeloupe",
      "America/Guatemala",
      "America/Guayaquil",
      "America/Guyana",
      "America/Halifax",
      "America/Havana",
      "America/Hermosillo",
      "America/Indiana/Indianapolis",
      "America/Indiana/Knox",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Tell_City",
      "America/Indiana/Vevay",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Indianapolis",
      "America/Inuvik",
      "America/Iqaluit",
      "America/Jamaica",
      "America/Jujuy",
      "America/Juneau",
      "America/Kentucky/Louisville",
      "America/Kentucky/Monticello",
      "America/Knox_IN",
      "America/Kralendijk",
      "America/La_Paz",
      "America/Lima",
      "America/Los_Angeles",
      "America/Louisville",
      "America/Lower_Princes",
      "America/Maceio",
      "America/Managua",
      "America/Manaus",
      "America/Marigot",
      "America/Martinique",
      "America/Matamoros",
      "America/Mazatlan",
      "America/Mendoza",
      "America/Menominee",
      "America/Merida",
      "America/Metlakatla",
      "America/Mexico_City",
      "America/Miquelon",
      "America/Moncton",
      "America/Monterrey",
      "America/Montevideo",
      "America/Montreal",
      "America/Montserrat",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Nome",
      "America/Noronha",
      "America/North_Dakota/Beulah",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/Nuuk",
      "America/Ojinaga",
      "America/Panama",
      "America/Pangnirtung",
      "America/Paramaribo",
      "America/Phoenix",
      "America/Port-au-Prince",
      "America/Port_of_Spain",
      "America/Porto_Acre",
      "America/Porto_Velho",
      "America/Puerto_Rico",
      "America/Punta_Arenas",
      "America/Rainy_River",
      "America/Rankin_Inlet",
      "America/Recife",
      "America/Regina",
      "America/Resolute",
      "America/Rio_Branco",
      "America/Rosario",
      "America/Santa_Isabel",
      "America/Santarem",
      "America/Santiago",
      "America/Santo_Domingo",
      "America/Sao_Paulo",
      "America/Scoresbysund",
      "America/Shiprock",
      "America/Sitka",
      "America/St_Barthelemy",
      "America/St_Johns",
      "America/St_Kitts",
      "America/St_Lucia",
      "America/St_Thomas",
      "America/St_Vincent",
      "America/Swift_Current",
      "America/Tegucigalpa",
      "America/Thule",
      "America/Thunder_Bay",
      "America/Tijuana",
      "America/Toronto",
      "America/Tortola",
      "America/Vancouver",
      "America/Virgin",
      "America/Whitehorse",
      "America/Winnipeg",
      "America/Yakutat",
      "America/Yellowknife",
    ],
  },
  {
    continentalName: "Europe",
    id: "EUROPE",
    timeZones: [
      "Europe/Amsterdam",
      "Europe/Andorra",
      "Europe/Astrakhan",
      "Europe/Athens",
      "Europe/Belfast",
      "Europe/Belgrade",
      "Europe/Berlin",
      "Europe/Bratislava",
      "Europe/Brussels",
      "Europe/Bucharest",
      "Europe/Budapest",
      "Europe/Busingen",
      "Europe/Chisinau",
      "Europe/Copenhagen",
      "Europe/Dublin",
      "Europe/Gibraltar",
      "Europe/Guernsey",
      "Europe/Helsinki",
      "Europe/Isle_of_Man",
      "Europe/Istanbul",
      "Europe/Jersey",
      "Europe/Kaliningrad",
      "Europe/Kiev",
      "Europe/Kirov",
      "Europe/Kyiv",
      "Europe/Lisbon",
      "Europe/Ljubljana",
      "Europe/London",
      "Europe/Luxembourg",
      "Europe/Madrid",
      "Europe/Malta",
      "Europe/Mariehamn",
      "Europe/Minsk",
      "Europe/Monaco",
      "Europe/Moscow",
      "Europe/Nicosia",
      "Europe/Oslo",
      "Europe/Paris",
      "Europe/Podgorica",
      "Europe/Prague",
      "Europe/Riga",
      "Europe/Rome",
      "Europe/Samara",
      "Europe/San_Marino",
      "Europe/Sarajevo",
      "Europe/Saratov",
      "Europe/Simferopol",
      "Europe/Skopje",
      "Europe/Sofia",
      "Europe/Stockholm",
      "Europe/Tallinn",
      "Europe/Tirane",
      "Europe/Tiraspol",
      "Europe/Ulyanovsk",
      "Europe/Uzhgorod",
      "Europe/Vaduz",
      "Europe/Vatican",
      "Europe/Vienna",
      "Europe/Vilnius",
      "Europe/Volgograd",
      "Europe/Warsaw",
      "Europe/Zagreb",
      "Europe/Zaporozhye",
      "Europe/Zurich",
    ],
  },
  {
    continentalName: "Asia",
    id: "ASIA",
    timeZones: [
      "Asia/Aden",
      "Asia/Almaty",
      "Asia/Amman",
      "Asia/Anadyr",
      "Asia/Aqtau",
      "Asia/Aqtobe",
      "Asia/Ashgabat",
      "Asia/Ashkhabad",
      "Asia/Atyrau",
      "Asia/Baghdad",
      "Asia/Bahrain",
      "Asia/Baku",
      "Asia/Bangkok",
      "Asia/Barnaul",
      "Asia/Beirut",
      "Asia/Bishkek",
      "Asia/Brunei",
      "Asia/Calcutta",
      "Asia/Chita",
      "Asia/Choibalsan",
      "Asia/Chongqing",
      "Asia/Chungking",
      "Asia/Colombo",
      "Asia/Dacca",
      "Asia/Damascus",
      "Asia/Dhaka",
      "Asia/Dili",
      "Asia/Dubai",
      "Asia/Dushanbe",
      "Asia/Famagusta",
      "Asia/Gaza",
      "Asia/Harbin",
      "Asia/Hebron",
      "Asia/Ho_Chi_Minh",
      "Asia/Hong_Kong",
      "Asia/Hovd",
      "Asia/Irkutsk",
      "Asia/Istanbul",
      "Asia/Jakarta",
      "Asia/Jayapura",
      "Asia/Jerusalem",
      "Asia/Kabul",
      "Asia/Kamchatka",
      "Asia/Karachi",
      "Asia/Kashgar",
      "Asia/Kathmandu",
      "Asia/Katmandu",
      "Asia/Khandyga",
      "Asia/Kolkata",
      "Asia/Krasnoyarsk",
      "Asia/Kuala_Lumpur",
      "Asia/Kuching",
      "Asia/Kuwait",
      "Asia/Macao",
      "Asia/Macau",
      "Asia/Magadan",
      "Asia/Makassar",
      "Asia/Manila",
      "Asia/Muscat",
      "Asia/Nicosia",
      "Asia/Novokuznetsk",
      "Asia/Novosibirsk",
      "Asia/Omsk",
      "Asia/Oral",
      "Asia/Phnom_Penh",
      "Asia/Pontianak",
      "Asia/Pyongyang",
      "Asia/Qatar",
      "Asia/Qostanay",
      "Asia/Qyzylorda",
      "Asia/Rangoon",
      "Asia/Riyadh",
      "Asia/Saigon",
      "Asia/Sakhalin",
      "Asia/Samarkand",
      "Asia/Seoul",
      "Asia/Shanghai",
      "Asia/Singapore",
      "Asia/Srednekolymsk",
      "Asia/Taipei",
      "Asia/Tashkent",
      "Asia/Tbilisi",
      "Asia/Tehran",
      "Asia/Tel_Aviv",
      "Asia/Thimbu",
      "Asia/Thimphu",
      "Asia/Tokyo",
      "Asia/Tomsk",
      "Asia/Ujung_Pandang",
      "Asia/Ulaanbaatar",
      "Asia/Ulan_Bator",
      "Asia/Urumqi",
      "Asia/Ust-Nera",
      "Asia/Vientiane",
      "Asia/Vladivostok",
      "Asia/Yakutsk",
      "Asia/Yangon",
      "Asia/Yekaterinburg",
      "Asia/Yerevan",
    ],
  },
  {
    continentalName: "Africa",
    id: "AFRICA",
    timeZones: [
      "Africa/Abidjan",
      "Africa/Accra",
      "Africa/Addis_Ababa",
      "Africa/Algiers",
      "Africa/Asmara",
      "Africa/Asmera",
      "Africa/Bamako",
      "Africa/Bangui",
      "Africa/Banjul",
      "Africa/Bissau",
      "Africa/Blantyre",
      "Africa/Brazzaville",
      "Africa/Bujumbura",
      "Africa/Cairo",
      "Africa/Casablanca",
      "Africa/Ceuta",
      "Africa/Conakry",
      "Africa/Dakar",
      "Africa/Dar_es_Salaam",
      "Africa/Djibouti",
      "Africa/Douala",
      "Africa/El_Aaiun",
      "Africa/Freetown",
      "Africa/Gaborone",
      "Africa/Harare",
      "Africa/Johannesburg",
      "Africa/Juba",
      "Africa/Kampala",
      "Africa/Khartoum",
      "Africa/Kigali",
      "Africa/Kinshasa",
      "Africa/Lagos",
      "Africa/Libreville",
      "Africa/Lome",
      "Africa/Luanda",
      "Africa/Lubumbashi",
      "Africa/Lusaka",
      "Africa/Malabo",
      "Africa/Maputo",
      "Africa/Maseru",
      "Africa/Mbabane",
      "Africa/Mogadishu",
      "Africa/Monrovia",
      "Africa/Nairobi",
      "Africa/Ndjamena",
      "Africa/Niamey",
      "Africa/Nouakchott",
      "Africa/Ouagadougou",
      "Africa/Porto-Novo",
      "Africa/Sao_Tome",
      "Africa/Timbuktu",
      "Africa/Tripoli",
      "Africa/Tunis",
      "Africa/Windhoek",
    ],
  },
  {
    continentalName: "Antarctica",
    id: "ANTARCTICA",
    timeZones: [
      "Antarctica/Casey",
      "Antarctica/Davis",
      "Antarctica/DumontDUrville",
      "Antarctica/Macquarie",
      "Antarctica/Mawson",
      "Antarctica/McMurdo",
      "Antarctica/Palmer",
      "Antarctica/Rothera",
      "Antarctica/South_Pole",
      "Antarctica/Syowa",
      "Antarctica/Troll",
      "Antarctica/Vostok",
    ],
  },
  {
    continentalName: "Australia",
    id: "AUSTRALIA",
    timeZones: [
      "Australia/ACT",
      "Australia/Adelaide",
      "Australia/Brisbane",
      "Australia/Broken_Hill",
      "Australia/Canberra",
      "Australia/Currie",
      "Australia/Darwin",
      "Australia/Eucla",
      "Australia/Hobart",
      "Australia/LHI",
      "Australia/Lindeman",
      "Australia/Lord_Howe",
      "Australia/Melbourne",
      "Australia/NSW",
      "Australia/North",
      "Australia/Perth",
      "Australia/Queensland",
      "Australia/South",
      "Australia/Sydney",
      "Australia/Tasmania",
      "Australia/Victoria",
      "Australia/West",
      "Australia/Yancowinna",
    ],
  },
  { continentalName: "South America", id: "SOUTH_AMERICA", timeZones: [] },
];

const getCurrentTimeInTimeZone = (timeZone) => {
  const options = {
    timeZone: timeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "long",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const timeZoneInfo = formatter.formatToParts();

  return {
    weekDay: timeZoneInfo[0].value,
    month: timeZoneInfo[2].value,
    date: timeZoneInfo[4].value,
    year: timeZoneInfo[6].value,
    hour: timeZoneInfo[8].value,
    minute: timeZoneInfo[10].value,
    second: timeZoneInfo[12].value,
    dayPeriod: timeZoneInfo[14].value,
    timeZoneCity: timeZoneInfo[16].value,
    continentName: timeZone.split("/")[0],
  };
};

const updateList = () => {
  displayCountryListEl.innerHTML = "";

  for (let each of allContinents) {
    each.timeZones.forEach((tz) => {
      const country = getCurrentTimeInTimeZone(tz);
      let listEl = document.createElement("li");
      listEl.classList.add("list-view");

      let divEl = document.createElement("div");
      divEl.classList.add("div-container");

      divEl.appendChild(
        (() => {
          let conOne = document.createElement("div");
          conOne.classList.add("view-names");
          let spanOne = document.createElement("span");
          spanOne.classList.add("span-view");
          spanOne.textContent = "Continent : ";
          conOne.appendChild(spanOne);

          let paraOne = document.createElement("p");
          paraOne.textContent = `${country.continentName}`;
          paraOne.classList.add("date-para");
          conOne.appendChild(paraOne);

          return conOne;
        })()
      );
      divEl.appendChild(
        (() => {
          let conTwo = document.createElement("div");
          conTwo.classList.add("view-names");
          let spanOne = document.createElement("span");
          spanOne.classList.add("span-view");
          spanOne.textContent = "TimeZone :  ";
          conTwo.appendChild(spanOne);

          let paraOne = document.createElement("p");
          paraOne.classList.add("date-para");
          paraOne.textContent = `${country.timeZoneCity}`;
          conTwo.appendChild(paraOne);

          return conTwo;
        })()
      );
      listEl.appendChild(divEl);

      // Add a separator
      let separator = document.createElement("hr");
      separator.classList.add("separator");
      listEl.appendChild(separator);

      // Display current time
      let timeEl = document.createElement("div");
      timeEl.classList.add("time-view");

      let dayDetailEl = document.createElement("div");
      dayDetailEl.classList.add("day-detail");

      dayDetailEl.appendChild(
        (() => {
          let dayEl = document.createElement("div");
          dayEl.classList.add("day-con");
          let spanOne = document.createElement("span");
          spanOne.classList.add("span-view");
          spanOne.textContent = "Week Day : ";
          dayEl.appendChild(spanOne);
          let day = document.createElement("p");
          day.textContent = `${country.weekDay}`;
          day.classList.add("date-para");
          dayEl.appendChild(day);
          return dayEl;
        })()
      );
      dayDetailEl.appendChild(
        (() => {
          let dayEl = document.createElement("div");
          dayEl.classList.add("day-con");
          let spanOne = document.createElement("span");
          spanOne.classList.add("span-view");
          spanOne.textContent = "Date : ";
          dayEl.appendChild(spanOne);
          let day = document.createElement("p");
          day.classList.add("date-para");
          day.textContent = ` ${country.date} / ${country.month} / ${country.year}`;
          dayEl.appendChild(day);
          return dayEl;
        })()
      );
      timeEl.appendChild(dayDetailEl);
      listEl.appendChild(timeEl);

      // Display current time
      let timeViewEl = document.createElement("div");
      timeViewEl.classList.add("time-contaier-view");
      timeViewEl.appendChild(
        (() => {
          let hourEl = document.createElement("div");
          console.log(typeof country.hour);
          hourEl.classList.add("timer");
          let hour = document.createElement("p");
          hour.classList.add("time-count");
          hour.textContent =
            country.hour.length === 1 ? `0${country.hour}` : `${country.hour}`;
          hourEl.appendChild(hour);
          let spanOne = document.createElement("span");
          spanOne.textContent = ":";
          spanOne.classList.add("span-time");
          hourEl.appendChild(spanOne);

          let minute = document.createElement("p");
          minute.classList.add("time-count");
          minute.textContent =
            country.minute.length === 1
              ? `0${country.minute}`
              : `${country.minute}`;
          hourEl.appendChild(minute);
          let spanTwo = document.createElement("span");
          spanTwo.textContent = ":";
          spanTwo.classList.add("span-time");
          hourEl.appendChild(spanTwo);

          let second = document.createElement("p");
          second.classList.add("time-count");
          second.textContent =
            country.second.length === 1
              ? `0${country.second}`
              : `${country.second}`;
          hourEl.appendChild(second);

          return hourEl;
        })()
      );
      timeEl.appendChild(timeViewEl);
      displayCountryListEl.appendChild(listEl);
    });
  }
};

const updateInterval = setInterval(updateList, 1000);
