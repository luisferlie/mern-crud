import User from '../models/user.model.js'
import bcript from 'bcrypt';
import jwt from 'jsonwebtoken';
export const login = (req, res) => { res.send('login') }
export const register = async (req, res) => {

    const { email, password, username } = req.body;
    const passwordHash = await bcript.hash(password, 10)
    const newUser = new User({ email, password: passwordHash, username });
    const newSaved = await newUser.save();

    jwt.sign({ id: newSaved._id }, 'secretkey', { expiresIn: '1d' }, (err, token) => {
        if (err) {
            console.log(err);
        }
        res.cookie('token', token)
        res.json({ message: 'user created' })
    })

    console.log({
        id: newSaved._id,
        email: newSaved.email,
        username: newSaved.username,
        createdAt: newSaved.createdAt
    });

} 
