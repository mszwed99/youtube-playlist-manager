import { Body, Controller, Post, Req, UseGuards, ValidationPipe, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('signup')
    signUp(
        @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
    ): Promise<any> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('signin')
    signIn(
        @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
    ): Promise<{ accessToken: string }>{
        return this.authService.signIn(authCredentialsDto);
    }

    @UseGuards(AuthGuard())
    @Get('info')
    getInfo(
        @GetUser() user: User,
    ) {
        return this.authService.userInfo(user);
    }

}
