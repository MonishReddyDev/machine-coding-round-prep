class Slot {
    constructor(slotNumber) {
        this.slotNumber = slotNumber
        this.occupied = false
        this.vehicle = null
    }

    park(vehicle) {
        this.vehicle = vehicle
        this.occupied = true
    }

    leave() {
        const leftVehicel = this.vehicle
        this.vehicle = null
        this.occupied = false
        return leftVehicel
    }
}


export default Slot