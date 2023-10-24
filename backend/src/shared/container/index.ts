import { container } from "tsyringe";

import "@shared/container/providers";
import { IUsersRepository } from "@modules/auth/repositories/IUsersRepository";
import { UsersRepository } from "@modules/auth/infra/prisma/repositories/UsersRepository";
import { IUsersTokensRepository } from "@modules/auth/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/auth/infra/prisma/repositories/UsersTokensRepository";
import { ICategoriesRepository } from "@modules/category/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/category/infra/prisma/repositories/CategoriesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);