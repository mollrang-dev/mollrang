import {rest} from 'msw'

const url = 'http://localhost:3033/api'

export const handlers = [
  // API 호출
  rest.post(`${url}/search`, (req, res, ctx) => {
    return res(ctx.json([{keyword: '복음밥'}]))
  }),
]
