import { Response, Request } from 'express';

export const api = (req: Request, res: Response) => {
    res.json('This is an API');
};
