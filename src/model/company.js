class TargetModel {
  _id = '';
  CODE = '';
  name = '';
  hotline = '';
  thumbnail = '';
  description = '';
  money = 0;
  createdById = '';
  createdAt = '';
  updatedAt = '';
  thumbnailUri = '';
  id = '';

  constructor(value) {
    Object.assign(this, value);
  }
}

export class CompanyModel {
  _id = '';
  targetId = '';
  targetOnModel = '';
  userId = '';
  isAdmin = null;
  isSeller = null;
  isDesign = null;
  createdById = '';
  createdAt = '';
  updatedAt = '';
  updatedById = '';
  target = new TargetModel(); // Khởi tạo đối tượng của TargetModel
  id = '';

  constructor(value) {
    Object.assign(this, value);
    if (value?.target) {
      this.target = new TargetModel(value?.target); // Chuyển đổi đối tượng `target` thành TargetModel
    }
  }
}
