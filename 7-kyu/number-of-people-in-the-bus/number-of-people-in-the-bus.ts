export function number(busStops: [number, number][]): number {
 return busStops.reduce((passengers, stop) => {
   return passengers + stop[0] - stop[1];
 }, 0);
}