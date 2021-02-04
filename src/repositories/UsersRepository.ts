import Users from '../models/Users';

interface CreateUsersDTO {
    user: string;
    password: string;
}

class UsersRepository {
    private logs: Users[];

    constructor() {
        this.logs = [];
    }

    public all(): Users[] {
        return this.logs;
    }

    public create({user, password}: CreateUsersDTO): Users {
        const login = new Users({ user, password });
        this.logs.push(login);
        return login;
    }
}

export default UsersRepository;