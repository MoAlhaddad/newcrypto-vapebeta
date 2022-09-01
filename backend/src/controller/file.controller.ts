import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
  UploadedFiles,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { User } from '../model/user.schema';
import { UserService } from 'src/service/user.service';
//File fields interceptor extract files from a request.
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { response } from 'express';
import { request } from 'http';

@Controller('/api/v1/files')
export class FileController {
  constructor(private readonly userService: UserService) {}
  //Use UseInterceptors to bind the FileFieldsInterceptor decorator to request.
  //FileFieldsInterceptor takes by default 1 file, create requestBody and hold form data values.
  @Post()
  async uploadId(@Res() response) {
    // const requestBody = { createdBy: , video: files.video[0].filename, coverImage: files.cover[0].filename }
    // const newId = await this.userService.uploadId(requestBody);
    return response.status(HttpStatus.CREATED).json({});
  }
}
