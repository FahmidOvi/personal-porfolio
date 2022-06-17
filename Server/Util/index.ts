import  express  from "express";

export function userDisplayName(req: express.Request): string
{
    if (req.user)
    {
        let user = req.user as userDocument;
        return user.DisplayName.toString();
    }
    return '';
}

export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction)
{
    if (!req.isAuthenticated)
    {
        return res.redirect('/login');
    }
    next();
}