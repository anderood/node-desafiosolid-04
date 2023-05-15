import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User already Exists!");
    }

    const changedUser = this.usersRepository.turnAdmin(user);

    if (!user.admin) {
      throw new Error("User already Exists!");
    }

    return changedUser;
  }
}

export { TurnUserAdminUseCase };
