interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

// key = 'job';

type User = {
    _id: number,
    name: string,
    email: string,
    cratedAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let user1: UserKeysNoMeta = 'name';
// user1 = '_id';