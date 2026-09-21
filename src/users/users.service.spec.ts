import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('should return users', () => {
    const users = service.findAll();

    expect(users).toHaveLength(1);
    expect(users[0].email).toBe('john@example.com');
  });

  it('should create a user', () => {
    const user = service.create({
      name: 'Thamizh',
      email: 'thamizh@example.com',
    });

    expect(user.id).toBe(2);
    expect(user.name).toBe('Thamizh');
  });
});
