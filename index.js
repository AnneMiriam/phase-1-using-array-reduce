const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const initialBatteryValue = 0
const totalBatteries = batteryBatches.reduce((accum, currentValue) => accum + currentValue, initialBatteryValue);

console.log(totalBatteries)
    