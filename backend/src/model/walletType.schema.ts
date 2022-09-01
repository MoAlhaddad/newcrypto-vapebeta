import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';

export type WalletTypeDocument = WalletType & Document;

@Schema()
export class WalletType {
  @Prop()
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const WalletTypeSchema = SchemaFactory.createForClass(WalletType);
