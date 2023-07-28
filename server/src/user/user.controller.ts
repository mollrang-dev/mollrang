import { Controller, Post, Body, Patch, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiHeaders, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // /user/sign-in | POST | 로그인 | 미정
  // /user/sign-up | POST | 회원가입 | 미정

  // TODO: FE 와 Github OAUTH 연동 과정 논의 필요
  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * POST /user/sign-in/sns
   * @param body
   * @description OAUTH 로그인 ( For GitHub )
   */
  @Post('sign-in/sns')
  @ApiOperation({ summary: 'SNS 유저 로그인' })
  signInSns(@Body() body) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * POST /user/sign-up/sns
   * @param body
   * @description OAUTH 회원가입 ( For GitHub )
   */
  @Post('sign-up/sns')
  @ApiOperation({ summary: 'SNS 유저 회원가입' })
  signUpSns(@Body() body) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  // TODO: FE 와 논의 이후 Input type 정의 필요
  /**
   * POST /user/withdrawal
   * @param body
   * @description 회원탈퇴
   */
  @ApiOperation({ summary: 'SNS 유저 회원탈퇴' })
  @Post('withdrawal/sns')
  withdrawal(@Body() body) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * POST /user/verify/nickname
   * @param body
   * @description 닉네임 중복 검사
   */
  @ApiOperation({ summary: '닉네임 중복 검사' })
  @Post('verify/nickname')
  verifyNickname(@Body() body) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * POST /user/verify/token
   * @param body
   * @description 유저 토큰 검증
   */
  @ApiOperation({ summary: '유저 토큰 검증' })
  @ApiHeaders([
    {
      name: 'Authorization',
      description: 'Bearer {token}',
    },
  ])
  @Post('verify/token')
  verifyToken(@Body() body) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * PATCH /user
   * @param body
   * @description 유저 정보 수정
   */
  @ApiOperation({ summary: '유저 정보 수정' })
  @ApiHeaders([
    {
      name: 'Authorization',
      description: 'Bearer {token}',
    },
  ])
  @Patch()
  updateUserInfo(@Body() body) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * GET /user
   * @description 유저 정보 조회
   */
  @ApiOperation({ summary: '유저 정보 조회' })
  @ApiHeaders([
    {
      name: 'Authorization',
      description: 'Bearer {token}',
    },
  ])
  @Get()
  getUserInfo() {
    return {
      result: true,
    };
  }
}
