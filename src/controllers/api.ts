import { Response, Request } from 'express';

export const api = (req: Request, res: Response) => {
    res.send('This is an API');
};
