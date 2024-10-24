import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()

export class Car {
    @Field(()=> ID)
    id: number;

    @Field(()=>String)
    brand: string;

    @Field(()=>Int)
    year: number;

    @Field(()=> Int)
    price: number

    @Field(()=>String)
    color: string
}