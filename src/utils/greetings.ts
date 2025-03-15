export function getTimeBasedGreeting(name = "") {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return name ? `${greeting}, ${name}!` : greeting;
}

export function getContextualGreeting(name = "") {
  const currentHour = new Date().getHours();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getDay()];

  // Special day greetings
  const specialGreetings: Record<string, string> = {
    Monday: "Hope you're having a great start to the week",
    Friday: "Happy Friday! Enjoy your day",
    Saturday: "Weekend vibes!",
    Sunday: "Enjoy your Sunday!",
  };

  // Combine time-based and day-specific greetings
  const timeGreeting = getTimeBasedGreeting();
  const dayGreeting = specialGreetings[currentDay] || "";

  const fullGreeting = dayGreeting
    ? `${timeGreeting}, ${dayGreeting}`
    : timeGreeting;

  return name ? `${fullGreeting}, ${name}!` : fullGreeting;
}

// Examples
console.log(getTimeBasedGreeting("John")); // "Good Morning, John!"
console.log(getContextualGreeting("Sarah")); // More context-aware greeting
