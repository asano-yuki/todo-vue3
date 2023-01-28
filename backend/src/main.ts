import express from 'express'

const app = express()
const port = 3001

app.get('/', (_, res) => {
  res.send('Hello World!')
})

// 開発時はviteサーバーが起動するため本番環境のみ適用
if (process.env.NODE_ENV === 'production') {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })  
}

export const viteNodeApp = app