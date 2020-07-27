import { App, NextFunction, Request, Response } from '@tinyhttp/app'

export async function testRoute(req: Request, res: Response, next?: NextFunction) {
    console.log(`Req url: ${JSON.stringify(req.url)}`);
    next!();
}