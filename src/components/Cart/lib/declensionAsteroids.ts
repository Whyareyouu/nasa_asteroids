export function declensionAsteroids(count: number): string {
  if (count === 1) {
    return `${count} астероид`;
  } else if (count >= 2 && count <= 4) {
    return `${count} астероида`;
  } else {
    return `${count} астероидов`;
  }
}
