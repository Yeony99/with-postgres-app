import sql from "./db";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}

export async function list() {
  return await sql<User[]>`
    SELECT * FROM "user" ORDER BY id
    `;
}

export async function searchValidEmail(email:string) {
    return await sql<User[]>`
    SELECT * FROM "user" WHERE email=${email}
    `
}

export async function create(user: User) {
    console.log(user)
    // INSERT INTO "user" (${Object.keys(user).join()}) VALUES (${Object.values(user).join()})
    
    return await sql<User[]>`
    INSERT INTO "user" (name, email, password, phone) VALUES (${user.name}, ${user.email}, ${user.password}, ${user.phone})
    `
}