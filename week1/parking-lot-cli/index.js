import readline from "readline";
import ParkingLot from "./models/ParkingLot.js";
import Vehicle from "./models/Vehicle.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">> "
})



let lot = null;

console.log("Welcome to Parking Lot CLI 🚗");

rl.prompt()
rl.on("line", (line) => {
    const [command, ...args] = line.trim().split(" ");

    switch (command) {
        case 'create':
            lot = new ParkingLot(Number(args[0]))
            console.log(`Created parking lot with ${args[0]} slots`);
            break
        case 'park':
            if (!lot) return console.log("Lot not created yet");
            const vehicle = new Vehicle(args[0], args[1]);
            const slotNumber = lot.parkVehicle(vehicle);
            console.log(
                slotNumber
                    ? `Allocated slot number: ${slotNumber}`
                    : "Sorry, parking lot is full"
            );
            break
        case 'leave':
            if (!lot) return console.log("Lot not created yet");
            const left = lot.leaveVehicle(Number(args[0]))
            left
                ? console.log(
                    `Vehicle ${left.registrationNumber} left slot ${args[0]}`
                )
                : console.log("Slot already empty");
            break
        case 'status':
            if (!lot) return console.log("Lot not created yet");
            console.log("Slot | Vehicle No. | Type");
            lot.status().forEach((slot) =>
                console.log(
                    `${slot.slotNumber}    | ${slot.vehicle.registrationNumber} | ${slot.vehicle.type}`
                )
            );
            break
        case 'exit':
            rl.close()
            break
        default:
            console.log("Unknown command");

    }
    rl.prompt()
})