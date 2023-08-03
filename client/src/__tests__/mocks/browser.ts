import {setupWorker} from 'msw'
import {handlers} from './handler'

export const WORKER = setupWorker(...handlers)
