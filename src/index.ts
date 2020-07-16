import { App, NextFunction, Request, Response } from '@tinyhttp/app'
import fs from 'fs'
const { readFile } = fs.promises
import logger from '@tinyhttp/logger'
import { cors } from '@tinyhttp/cors'
import bodyParser from 'body-parser'

const app = new App()
app.use(cors({}))
app.use(logger())
// app.use(jwt({ secret: config.secret!, algorithm: "HS256" }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', async (_, res, next) => {
	res.send("hello world!")
})
app.get('/profile', async (req: Request, res: Response, next?: NextFunction) => {
	res.status(200).send(await getUser())
})
app.post('/login', (req, res, next) => res.send('hello login')) // app.post("/register", register); app.use((req, res) => { res.status(404).send(` <h1>Not Found</h1> <p>${req.url} was not found on the server.</p> `); }); app.listen(8080, () => console.log(`Listening on :8080`)); }) .catch(console.error);

app.listen(8080, () => console.log(`Listening on :8080`))

export function getUser() {
	return Promise.resolve({ user: { name: 'Joe', email: 'joe-mama@gmail.com' } })
}
