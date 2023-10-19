import { container } from "tsyringe";

import "@shared/container/providers";
import { IUsersRepository } from "@modules/auth/repositories/IUsersRepository";
import { UsersRepository } from "@modules/auth/infra/typeorm/repositories/UsersRepository";
import { IUsersTokensRepository } from "@modules/auth/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/auth/infra/typeorm/repositories/UsersTokensRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);