export function formatOrbits(value: string): string {
  let form = "";
  const number = +value;

  if (number === 1) {
    form = "лунная орбита";
  } else if (number >= 2 && number <= 4) {
    form = "лунные орбиты";
  } else {
    form = "лунных орбит";
  }

  return `${number} ${form}`;
}
