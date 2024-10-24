import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCarDto {
  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  year?: number;

  @Field({nullable: true})
  color?: string;

  @Field({nullable: true})
  price?: number
}
