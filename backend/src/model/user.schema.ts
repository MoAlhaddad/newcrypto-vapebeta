/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = User & Document;

//Define schema, properties for your User table.
@Schema()
export class User {
  @Prop({ required: true })
  fullname: string;
  @Prop({ required: true, unique: true, lowercase: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: false })
  identificationCardPublicKey: string;
  @Prop({ required: false })
  identificationCardPrivateKey: string;
  @Prop({ required: false })
  identificationCard: string;
  @Prop({ default: Date.now() })
  createdDate: Date;
}

//Schema Factory will generate the schema
export const UserSchema = SchemaFactory.createForClass(User);
