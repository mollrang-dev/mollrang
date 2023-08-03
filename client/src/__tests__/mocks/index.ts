if (typeof window === 'undefined') {
  const server = import('./server')
  server.then((s) => s.SERVER.listen())
} else {
  const worker = import('./browser')
  worker.then((w) => w.WORKER.start())
}

export {}
