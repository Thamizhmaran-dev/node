import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private readonly s3Client = new S3Client({
    region: 'ap-south-1',
  });

  async uploadFile(
    file: Express.Multer.File,
    key: string,
  ) {
    const command = new PutObjectCommand({
      Bucket: 'nestjs-crud-demo-thamizh-2026',
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await this.s3Client.send(command);

    return {
      message: 'File uploaded successfully',
      key,
    };
  }
}