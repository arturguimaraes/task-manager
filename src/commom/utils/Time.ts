export function timeToSeconds(time: string) {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");
  const hoursInSeconds = Number(hours) * 3600;
  const minutesInSeconds = Number(minutes) * 60;
  const totalSeconds = hoursInSeconds + minutesInSeconds + Number(seconds);
  return totalSeconds;
}

export function secondsToMinutesAndSeconds(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const [minuteFirstChar, minuteSecondChar] = String(minutes).padStart(2, '0');
  const seconds = totalSeconds % 60;
  const [secondFirstChar, secondSecondChar] = String(seconds).padStart(2, '0');
  return [minuteFirstChar, minuteSecondChar, secondFirstChar, secondSecondChar]
}
