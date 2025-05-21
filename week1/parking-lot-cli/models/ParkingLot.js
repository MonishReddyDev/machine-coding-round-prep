import Slot from "./Slot.js";


class ParkingLot {
    constructor(capacity) {
        this.slots = Array.from({ length: capacity }, (_, i) => new Slot(i + 1));

    }

    getFirstFreeSlot() {
        return this.slots.find((slot) => !slot.occupied)
    }

    parkVehicle(vehicle) {
        const slot = this.getFirstFreeSlot()
        if (!slot) return null
        slot.park(vehicle)
        return slot.slotNumber
    }

    leaveVehicle(slotNumber) {
        const slot = this.slots[slotNumber - 1]
        if (!slot.occupied) return null
        return slot.leave()
    }

    status() {
        return this.slots.filter((slot) => slot.occupied);
    }
}


export default ParkingLot