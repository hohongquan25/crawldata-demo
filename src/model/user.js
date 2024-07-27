export class UserModel {
  _id = '';
  phone = '';
  email = '';
  fullName = '';
  isAdmin = null;
  createdAt = '';
  updatedAt = '';
  avatarUri = '';
  id = '';

  constructor(value) {
    Object.assign(this, value);
  }
}
