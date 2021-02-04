import { v4 as uuid } from 'uuid';

class Users {
    id: string;
    user: string;
    password: string;

    constructor({ user, password }: Omit<Users, 'id'>) {
        this.id = uuid();
        this.user = user;
        this.password = password;
    }
}

export default Users;

