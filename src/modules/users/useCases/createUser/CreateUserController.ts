import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;

      const userCreated = this.createUserUseCase.execute({ name, email });

      return response.status(201).json({
        "admin": userCreated.admin,
        "email": userCreated.email,
        "name": userCreated.name,
      });
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}

export { CreateUserController };
