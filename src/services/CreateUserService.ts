import Users from "../models/Users";
import UsersRepository from "../repositories/UsersRepository";

interface RequestDTO {
  user: string;
  password: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  //   De novo, to assumundo que o .user é o nome.
  public execute({ user, password }: RequestDTO): Users {
    //   Vai checar no repository se existe um usuário com o nome que vc tá informando.
    // O método findUserByName tá implementado lá dentro.
    const userAlreadyExists = this.usersRepository.findUserByName(user);

    if (userAlreadyExists) {
      throw new Error("User with this name already exists");
    }

    const createUser = this.usersRepository.create({
      user,
      password,
    });
    return createUser;
  }
}

export default CreateUserService;
