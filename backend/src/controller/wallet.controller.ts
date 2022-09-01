import {
  Body,
  Controller,
  Get,
  Req,
  Res,
  HttpStatus,
  Param,
  HttpException,
} from '@nestjs/common';
import { WalletService } from '../service/wallet.service';

@Controller()
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get('/get-wallets/:id')
  async getWallets(@Res() response, @Body() getWalletBody) {
    if (!getWalletBody)
      throw new HttpException("Cen't get wallet", HttpStatus.BAD_REQUEST);
    const wallet = await this.walletService.getWallet(getWalletBody);
    return response.status(HttpStatus.OK).json({
      wallet,
    });
  }
}
