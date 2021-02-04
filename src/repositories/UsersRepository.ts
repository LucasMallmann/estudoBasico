// MUDEI O NOME AQUI, MAS MUDA NA CLASSE TB
import User from "../models/Users";

interface CreateUsersDTO {
  user: string;
  password: string;
}

class UsersRepository {
  private logs: User[];

  constructor() {
    this.logs = [];
  }

  public all(): User[] {
    return this.logs;
  }

  public create({ user, password }: CreateUsersDTO): User {
    const login = new User({ user, password });
    this.logs.push(login);
    return login;
  }

  async findUserByName(name: string): Promise<User | undefined> {
    //   Aqui eu vou assumir qye o .user é o nome. Se for, tirar o user e colocar o .name que é melhor.
    // Mudar no model tb
    // Aqui tá um await simulando que fosse uma consulta em banco de dados
    const foundUser = await this.logs.find((user) => user.user === name);

    return foundUser;
  }
}

export default UsersRepository;
