import { App, NextFunction, Request, Response } from '@tinyhttp/app';
import fs from 'fs';
const { readFile } = fs.promises;
import { logger } from '@tinyhttp/logger';
import { cors } from '@tinyhttp/cors';
import bodyParser from 'body-parser';
import { testRoute } from './middleware';

const app = new App();
app.use(cors({}));
app.use(logger());
// app.use(jwt({ secret: config.secret!, algorithm: "HS256" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (_, res, next) => {
	res.json({ result: 'hello world!' });
});

app.get('/test', testRoute, async (req, res) => {
	const user = await getUser();
	res.json({ result: 'It works!', user });
});

app.listen(8080, () => console.log(`Listening on :8080`));

export async function getUser() {
	return {
		user: { name: 'Joe', email: 'joe-mama@gmail.com' },
	};
}
