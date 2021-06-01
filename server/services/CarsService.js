import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CarsService {
    async deleteCar(id) {
        let car = await dbContext.Cars.findByIdAndDelete(id)
        return car
    }

    async updateCar(id, carData) {
        let car = await dbContext.Cars.findByIdAndUpdate(id, carData, { new: true, runValidators: true })
        return car
        // THE LONG WAY
        // let car = await dbContext.Cars.findById(id)
        // if(!car){
        //     throw new BadRequest("Invalid car id")
        // }
        // carData.id = id
        // await car.update(carData)
        // return car
    }
    async createCar(carData) {
        // Business Logic should you be able to do what you are doing
        let car = await dbContext.Cars.create(carData)
        return car
    }

    async getCars(){
        // REVIEW                            vv Query Object
        let cars = await dbContext.Cars.find({})
        return cars
    }

}


export const carsService = new CarsService()