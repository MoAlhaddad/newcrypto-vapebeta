import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
export type PaymentTypeSchema = PaymentType & Document;
@Schema()
export class PaymentType {
  @Prop()
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const PaymentTypeSchema = SchemaFactory.createForClass(PaymentType);
