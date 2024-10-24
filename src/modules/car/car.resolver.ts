import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Car } from "./models/car.model";
import { CarService } from "./car.service";
import { ParseIntPipe } from "@nestjs/common";
import { CreateCarDto } from "./dtos";

import { UpdateCarDto } from "./dtos/update-car.dto";


@Resolver(()=>Car)
export class CarResolver{
    constructor(private service: CarService){}

    @Query(()=>[Car])
    getCarlist(){
        return this.service.getCarlist()
    }

    @Query(()=>Car)
    getOneCar(@Args('id',{type: ()=>Int}, ParseIntPipe,) id: number){
        return this.service.getOneCar(id)
    }

    @Mutation(()=>Car)
    createCar(@Args('createCarDto',{type: ()=> CreateCarDto}) payload: CreateCarDto){
        return this.service.createCar(payload)
    
    }

    @Mutation(()=>Car)
    deleteCar(@Args('id',{type: ()=>Int}) id: number){
        return this.service.deleteCar(id)
    }

    @Mutation(()=>Car)
    updateCar(
        @Args('id',{type: ()=>Int}) id: number,
        @Args('updateCarDto',{type: ()=> UpdateCarDto}) payload: UpdateCarDto
    ){
        return this.service.updateCar({...payload,id})
    }
    
}