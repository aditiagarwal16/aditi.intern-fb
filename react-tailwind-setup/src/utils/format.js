/* eslint-disable no-redeclare */
// before

export function formatUserName(firstName, lastName) {
  if (!firstName || !lastName) return 'Unknown User';

  const first = firstName.trim();
  const last = lastName.trim();

  // duplicate formatting logic
  const formattedFirst =
    first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
  const formattedLast =
    last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();

  return `${formattedFirst} ${formattedLast}`;
}

export function formatCityName(city) {
  if (!city) return 'Unknown City';

  const c = city.trim();

  // SAME duplicated formatting logic
  const formattedCity = c.charAt(0).toUpperCase() + c.slice(1).toLowerCase();

  return formattedCity;
}

// What is duplicated?

// The capitalization logic:

value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

// This appears in two different functions, which breaks DRY principles.

// After

// function capitalize(value) {
//   return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
// }

// export function formatUserName(firstName, lastName) {
//   if (!firstName || !lastName) return 'Unknown User';

//   const first = capitalize(firstName.trim());
//   const last = capitalize(lastName.trim());

//   return `${first} ${last}`;
// }

// export function formatCityName(city) {
//   if (!city) return 'Unknown City';

//   return capitalize(city.trim());
// }

// Refactoring benefits:

// Removed repeated logic into a single helper → capitalize()

// Code is cleaner and easier to change

// Lower chance of bugs when updating formatting rules later
