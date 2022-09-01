/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { WalletType } from './walletType.schema';
import { PaymentType } from './paymentType.schema';

export type WalletDocument = Wallet & Document;

@Schema()
export class Wallet {
  @Prop()
  name: string;
  @Prop()
  cryptoAddress: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentType' })
  paymentType: PaymentType;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'WalletType' })
  walletType: WalletType;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  ownedBy: User;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
