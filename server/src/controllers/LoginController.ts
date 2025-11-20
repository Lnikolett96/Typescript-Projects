import { Request, Response } from "express";
import { get, controller, bodyValidator, post } from './decorators' 


@controller('/auth')
class LoginController {

    @get('/login')
    getLogin (req: Request, res: Response): void {
      res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" />
            </div>
            <button>Submit</button>
            
        </form>
        `);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response){
        const { email, password } = req.body;
        if (email && password && email === 'pc12@gmail.com' && password === 'sasd') {
            req.session = { loggedIn: true }
            res.redirect('/')
        }else {
            res.send('Invalid Email or Password')
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response){
        if (req.session && req.session.loggedIn) {
            req.session = undefined
            res.redirect('/')
        }
    }
    
    
}