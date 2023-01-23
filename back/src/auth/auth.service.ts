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
      let match = await compare(password, persisted.password) 
      if (match) {
        return { username, id: persisted.id }
      }
      return null
    }
    return null
  }

  async login(payload: LoginUserDto) {
    let user = await this.validateUser(payload)
    if (!user) throw new HttpException('No encontramos un usuario con esa combinación', HttpStatus.UNAUTHORIZED)
    if (user) {
      return {
        access_token: this.jwtService.sign(user),
      }
    }
  }

}
