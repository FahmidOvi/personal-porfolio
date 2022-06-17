import  express  from "express";

export function UserDisplayName(req: express.Request): string
{
    if (req.user)
    {
        let user = req.user as userDocument;
        return user.DisplayName.toString();
    }
    return '';
}

export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}