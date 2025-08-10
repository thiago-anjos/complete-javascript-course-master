const tempsArray = [17, 21, 23];

function printForecast(array: number[]): string {
  const unionString: string[] = [];
  array.map((item, index) =>
    unionString.push(`... ${item}°C in ${index + 1} days`)
  );
  return unionString.join(' ');
}

console.log(printForecast(tempsArray));
