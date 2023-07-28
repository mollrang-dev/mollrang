import { Controller, Get, Post, Param } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('quizzes')
@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * GET /quizzes
   * query: size
   * 퀴즈 리스트 조회 ( size 개수 만큼 List 반환 )
   */
  @ApiOperation({ summary: '퀴즈 리스트 조회' })
  @ApiQuery({
    name: 'size',
    type: Number,
    description: '퀴즈 리스트 개수',
  })
  @Get()
  findAll() {
    return this.quizzesService.findAll();
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  // TODO: middleware 를 통해 userId를 가져올 것, Guard 로직 추가가 필요함
  /**
   * GET /quizzes/correct/:userId
   * @param userId
   * @description 유저가 맞춘 퀴즈 리스트 조회
   */
  @ApiOperation({ summary: '유저가 맞춘 퀴즈 리스트 조회' })
  @ApiQuery({
    name: 'currentPage',
    type: Number,
    description: '페이지 번호',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: '페이지당 퀴즈 개수',
  })
  @ApiParam({
    name: 'userId',
    type: String,
  })
  @Get('correct/:userId')
  findCorrectQuizList(@Param('userId') userId: string) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  // TODO: middleware 를 통해 userId를 가져올 것, Guard 로직 추가가 필요함
  /**
   * GET /quizzes/incorrect/:userId
   * @param userId
   * @description 유저가 틀린 퀴즈 리스트 조회
   */
  @ApiOperation({ summary: '유저가 틀린 퀴즈 리스트 조회' })
  @ApiQuery({
    name: 'currentPage',
    type: Number,
    description: '페이지 번호',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: '페이지당 퀴즈 개수',
  })
  @ApiParam({
    name: 'userId',
    type: String,
  })
  @Get('incorrect/:userId')
  findIncorrectQuizList(@Param('userId') userId: string) {
    return {
      result: true,
    };
  }

  // TODO: INPUT DTO, RESPONSE DTO 정의
  /**
   * GET /quizzes/:id
   * @param id
   * @description 퀴즈 단일 조회
   */
  @ApiOperation({ summary: '퀴즈 단일 조회' })
  @ApiParam({
    name: 'quizId',
    type: String,
    description: '퀴즈 아이디',
  })
  @Get(':quizId')
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(+id);
  }

  // TODO: middleware 를 통해 userId를 가져올 것, Guard 로직 추가가 필요함
  /**
   * POST /quizzes/:quizId/favorite
   * @param quizId
   * @description 퀴즈 즐겨찾기 추가
   */
  @ApiOperation({ summary: '퀴즈 즐겨찾기 추가' })
  @ApiParam({
    name: 'quizId',
    type: String,
    description: '퀴즈 아이디',
  })
  @Post(':quizId/favorite')
  createFavorite(@Param('quizId') quizId: string) {
    return {
      result: true,
    };
  }

  // TODO: middleware 를 통해 userId를 가져올 것, Guard 로직 추가가 필요함
  // TODO: 추후 Controller 분리 고민 필요
  /**
   * POST /quizzes/:quizId/answer
   * @param quizId
   * @description 유저의 정답 제출
   */
  @ApiTags('quizzes-answer')
  @ApiOperation({ summary: '유저의 정답 제출' })
  @ApiParam({
    name: 'quizId',
    type: String,
    description: '퀴즈 아이디',
  })
  @Post(':quizId/answer')
  createAnswer(@Param('quizId') quizId: string) {
    return {
      result: true,
    };
  }
}
