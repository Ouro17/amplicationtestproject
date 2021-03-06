/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RpnCreateNestedManyWithoutProductsInput } from "./RpnCreateNestedManyWithoutProductsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: false,
    type: () => RpnCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => RpnCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => RpnCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  rpns?: RpnCreateNestedManyWithoutProductsInput;
}
export { ProductCreateInput };
