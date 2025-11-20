import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";


function requireAuth (req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403)
    res.send('Not Permitted')
}

@controller('')
class RootController {

    @get('/')
    getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div> 
                <h2>You Are Logged In</h2>
                <a href="/auth/logout">logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <h2>You Are Not Logged In</h2>
                <a href="/auth/login">login</a>
            </div>    
        `)}
    }

    @get('/protected')
    @use(requireAuth)
    getProtectedRoot(req: Request, res: Response) {
    res.send(`
        <div>
            <h1>Welcome to the Protected route(or Jungle)!</h1>
        </div>    
    `)
    }

}