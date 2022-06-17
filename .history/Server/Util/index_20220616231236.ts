import  express  from "express";

export function userDisplayName(req: express.Request): String
{
    if (req.user)
    {
        let user = req.user as userDocument;
        return user.DisplayName.toString();
    }
}