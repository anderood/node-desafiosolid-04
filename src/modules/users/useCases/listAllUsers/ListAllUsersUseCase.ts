import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findUser = this.usersRepository.findById(user_id);

    if (findUser.admin) {
      const users = this.usersRepository.list();
      return users;
    }
    throw new Error("Message ErRor");
  }
}

export { ListAllUsersUseCase };
