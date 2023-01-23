import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import { LoginUserDto } from '../users/dto/login-user.dto'
import { JwtService } from '@nestjs/jwt'
import { hash, compare } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(payload: LoginUserDto): Promise<any> {
    let { username, password } = payload
    let persisted = await this.usersService.findOne(username)
    if (persisted) {
      const match = await compare(password, persisted.password) 
      if (match) {
        return { username, id: persisted.id }
      }
    }
    return null
  }

  async login(payload: LoginUserDto) {
    const user = await this.validateUser(payload)
    if (!user) throw new HttpException('No encontramos un usuario con esa combincación', HttpStatus.UNAUTHORIZED)
    if (user) {
      let payload = { username: user.username, id: user.id }
      return {
        access_token: this.jwtService.sign(payload),
      }
    }
  }

}
