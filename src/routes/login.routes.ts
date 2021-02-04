import { Router } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const loginRouter = Router();

const usersRepository = new UsersRepository();

loginRouter.get('/', (request, response) => {
    const users = usersRepository.all();
    return response.json(users);
});


loginRouter.post('/', (request, response) => {
    try {
        const { user, password } = request.body;
        
        const createUser = new CreateUserService(usersRepository);

        const login = createUser.execute({user, password});
        return response.json(login);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
})

export default loginRouter;