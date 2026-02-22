import { faker } from "@faker-js/faker";

export function generateFakeData(path: string) {
  if (path.includes("user")) {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };
  }

  return { id: faker.string.uuid(), value: faker.lorem.words(3) };
}
