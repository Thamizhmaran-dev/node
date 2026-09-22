import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { S3Service } from './s3/s3.service';

@Module({
  imports: [UsersModule],
  providers: [S3Service],
})
export class AppModule {}
