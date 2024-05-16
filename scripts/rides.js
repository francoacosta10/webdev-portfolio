// Function to convert height to the correct unit if it's not in inches
function convertHeight(height, unit) {
  if (unit === "feet") {
    return height * 12; // Convert feet to inches
  } else if (unit === "meters") {
    return height * 3.28; // Convert meters to feet
  }
  return height; // Default: inches
}

// Function to convert weight to the correct unit if it's not in pounds
function convertWeight(weight, unit) {
  if (unit === "kilograms") {
    return weight * 2.2; // Convert kilograms to pounds
  }
  return weight; // Default: pounds
}

// Function to validate rides based on height and weight
function validateRides() {
  const heightInput = parseFloat(document.getElementById("height").value);
  const heightUnit = document.getElementById("heightUnit").value;
  const weightInput = parseFloat(document.getElementById("weight").value);
  const weightUnit = document.getElementById("weightUnit").value;
  const selectedListType = document.querySelector(
    'input[name="listType"]:checked'
  ).value;

  const heightInInches = convertHeight(heightInput, heightUnit);
  const weightInPounds = convertWeight(weightInput, weightUnit);

  console.log("Height (inches):", heightInInches);
  console.log("Weight (pounds):", weightInPounds);
  console.log("Selected List Type:", selectedListType);

  const ridesList = document.getElementById("ridesList");
  ridesList.innerHTML = ""; // Clear previous list

  const recommendations = [
    "Visit the indoor and outdoor arcade games located in the midway.",
    "Visit the gift shop and food concession stands located within the fairway.",
    "Visit the petting zoo and bee hives located south of Child's Play.",
  ];

  //ride restrictions data
  const rideRestrictions = [
    {
      name: "White Water Rapids",
      height: 55,
      weight: 75,
      location: "WaterWorld",
    },
    {
      name: "The Jolly Roger",
      height: 43,
      weight: 50,
      location: "Pirates of the Mountain",
    },
    {
      name: "The Unicorn Carousel",
      height: 43,
      location: "Child's Play",
    },
    {
      name: "Downhill Tube Race",
      height: 60,
      location: "WaterWorld",
    },
    {
      name: "Tumbler",
      height: 63,
      weight: 100,
      location: "Escape Mountain",
    },
    {
      name: "Canoe Coaster",
      weight: 75,
      location: "WaterWorld",
    },
    {
      name: "Tower of Doom",
      height: 63,
      weight: 100,
      location: "Skull Island: Reign of Montu",
    },
    {
      name: "Tilt-a-Whurl",
      height: 63,
      weight: 100,
      location: "North Park",
    },
    {
      name: "Sandstorm",
      height: 55,
      location: "Skull Island: Reign of Montu",
    },
    {
      name: "The Mist'r",
      height: 43,
      location: "Pirates of the Mountain",
    },
    {
      name: "Runaway Train",
      height: 55,
      weight: 75,
      location: "Escape Mountain",
    },
    {
      name: "Bobsled Swing",
      height: 43,
      weight: 50,
      location: "Child's Play",
    },
  ];

  if (selectedListType === "partial") {
    // Filter rides for which the guest meets the minimum requirements
    const partialRides = rideRestrictions.filter((ride) => {
      return heightInInches >= ride.height && weightInPounds >= ride.weight;
    });

    console.log("Partial Rides:", partialRides);

    if (partialRides.length > 0) {
      partialRides.forEach((ride) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Ride Name: ${ride.name}\nMinimum Requirements: ${ride.height} inches | ${ride.weight} pounds\nLocation: ${ride.location}`;
        ridesList.appendChild(listItem);
      });
    } else {
      const noRidesMessage = document.createElement("p");
      noRidesMessage.textContent =
        "You do not meet the minimum requirements for any rides in the partial list.";
      ridesList.appendChild(noRidesMessage);
    }
  } else {
    // Display all rides with their restrictions in the complete list
    if (rideRestrictions.length > 0) {
      rideRestrictions.forEach((ride) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Ride Name: ${ride.name}\nMinimum Requirements: ${ride.height} inches | ${ride.weight} pounds\nLocation: ${ride.location}`;
        ridesList.appendChild(listItem);
      });
    } else {
      const noRidesMessage = document.createElement("p");
      noRidesMessage.textContent = "There are no rides in the complete list.";
      ridesList.appendChild(noRidesMessage);
    }
  }

  const recommendationText =
    recommendations[Math.floor(Math.random() * recommendations.length)];
  document.getElementById(
    "recommendations"
  ).textContent = `Recommendation: ${recommendationText}`;
}