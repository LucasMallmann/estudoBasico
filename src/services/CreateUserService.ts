import Users from '../models/Users';
import UsersRepository from '../repositories/UsersRepository';

interface RequestDTO {
    user: string;
    password: string;
}

class CreateUserService {
    private usersRepository: UsersRepository;
    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }
    public execute({ user, password }: RequestDTO): Users {
        const createUser = this.usersRepository.create({
            user,
            password
        });
        return createUser;
    }    
}

export default CreateUserService;