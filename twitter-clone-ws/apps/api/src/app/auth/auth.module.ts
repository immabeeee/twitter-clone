import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '../shared/logger/logger.module';
import { AuthController } from './controller/auth.controller';
import { UserEntity } from './model/user.entity';
import { AuthService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './guard/jwt.strategy';
import { JwtGuard } from './guard/jwt.guard';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '3600s' }
      })
    }),
    TypeOrmModule.forFeature([UserEntity]),
    LoggerModule
  ],
  providers: [AuthService, JwtStrategy, JwtGuard],
  controllers: [AuthController]
})
export class AuthModule {}
