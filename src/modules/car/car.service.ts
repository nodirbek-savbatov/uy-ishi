import { Injectable } from '@nestjs/common';
import { Car } from './models';
import { PrismaService } from '../prisma';


@Injectable()
export class CarService {
  cars: Car[] = [
    { id: 1, brand: 'BMW', price: 200000, year: 2024, color: 'black' },
  ];
  constructor(private prisma: PrismaService) {}

  getCarlist() {
    return this.prisma.car.findMany();
  }

  getOneCar(id: number) {
    return this.cars.find((c) => c.id == id);
  }

  async createCar(payload: {brand: string,price: number,color: string,year: number}){
    return await this.prisma.car.create({
      data: {
        brand: payload.brand,
        price: payload.price,
        color: payload.color,
        year: payload.year,
      },
    })


  }

  deleteCar(id: number) {
    return this.prisma.car.delete({where: {id}});
  }


  async updateCar(payload: {brand?: string,price?: number,color?: string,year?: number, id:number}){
    return await this.prisma.car.update({
      where: {id: payload.id},
      data: {
        brand: payload.brand,
        year: payload.year,
        color: payload.color,
        price: payload.price
      }
    })
  }
}
