import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from './../../repositories/Implementations/PostgresUsersRepository';
import { MailtrapMailProvider } from './../../providers/Implementations/MailtrapMailProvider';
import { CreateUserController } from './CreateUserController';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
)

export {createUserUseCase, createUserController}