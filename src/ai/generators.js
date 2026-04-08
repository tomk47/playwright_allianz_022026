function generatePassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Example usage:
const newPassword = generatePassword(12);
console.log("Generated Password:", newPassword);

// Vytvoření náhodného českého křestního jména s parametrizací genderu, minimálně 20 jmen v jedné kategorii
function generateCzechName(gender) {
  const maleNames = [
    "Jan",
    "Petr",
    "Martin",
    "Tomáš",
    "Lukáš",
    "David",
    "Jakub",
    "Marek",
    "Vladislav",
    "Filip",
    "Adam",
    "Michal",
    "Karel",
    "Václav",
    "Stanislav",
    "Jaroslav",
    "František",
    "Roman",
    "Vladislav",
    "Zdeněk",
  ];
    const femaleNames = [
    "Jana",
    "Petra",
    "Martina",
    "Tereza",
    "Lucie",
    "Davidová",
    "Jakubová",
    "Markéta",
    "Vladislava",
    "Filipová",
    "Adamová",
    "Michalová",
    "Karla",
    "Václava",
    "Stanislava",
    "Jaroslava",
    "Františka",
    "Romana",
    "Vladislava",
    "Zdeněka",
    ];
    if (gender === "male") {
    return maleNames[Math.floor(Math.random() * maleNames.length)];
  } else if (gender === "female") {
    return femaleNames[Math.floor(Math.random() * femaleNames.length)];
  } else {
    throw new Error("Invalid gender specified. Use 'male' or 'female'.");
  }
}

// Example usage:
const randomMaleName = generateCzechName("male");
const randomFemaleName = generateCzechName("female");
console.log("   Generated       Male Name:", randomMaleName);
console.log("Generated Female Name:", randomFemaleName);