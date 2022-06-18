import  express  from "express";

// function to returnt the displayName of the logged in user
export function UserDisplayName(req: express.Request): string
{
    if (req.user)
    {
        let user = req.user as userDocument;
        return user.DisplayName.toString();
    }
    return '';
}

// middleware function for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    if (!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}