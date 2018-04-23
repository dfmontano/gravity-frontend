import {Deserializable} from './deserializable.model';

export class User implements Deserializable<User> {

  cedula: number;
  nombres: string;
  apellidos: string;
  email: string;
  password: string;

  deserialize(input: any): User {

    Object.assign(this, input);
    return this;

  }

}
