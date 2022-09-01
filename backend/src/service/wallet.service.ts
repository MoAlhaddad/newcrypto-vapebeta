/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet, WalletDocument } from '../model/wallet.schema';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';
import { Request, Response } from 'express';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(Wallet.name) private walletModel: Model<WalletDocument>,
  ) {}
  async getWallet(userId): Promise<any> {
    if (userId.id) {
      return this.walletModel
        .findOne({ ownedBy: userId.id })
        .populate('createdBy')
        .exec();
    }
    return this.walletModel.find().populate('createdBy').exec();
  }
}
