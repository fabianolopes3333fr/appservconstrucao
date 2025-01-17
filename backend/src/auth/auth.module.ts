import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: 'YOUR_SECRET_KEY', // Use uma variável de ambiente para isso em produção
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
})
export class AuthModule { }