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