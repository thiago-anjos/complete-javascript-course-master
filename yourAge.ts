const whatIsYourAge = (yearBirth: number): number => {
  const currentYear: number = getCurrentYear();
  return currentYear - yearBirth;
};

const getCurrentYear = (): number => new Date().getFullYear();

const age = whatIsYourAge(1990);

console.log(age);
