import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateCarDto {
    @Field()
    brand: string

    @Field()
    price: number

    @Field()
    color: string

    @Field()
    year: number
}