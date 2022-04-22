export enum UserStatus {
  INITIAL = 'INITIAL',
  ACTIVE = 'ACTIVE',
  ON_HOLD = 'ON-HOLD',
  SUSPEND = 'SUSPEND',
  INACTIVE = 'IN-ACTIVE',
}

export enum UserRoles {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN',
  EXPERT = 'EXPERT',
  SALE = 'SALE',
}

export interface SignUpBody {
  email: string;
  password: string;
  gCaptcha: string;
  roles?: string;
}

export type SignInBody = Omit<SignUpBody, 'roles'>;

export enum TokenType {
  ACCESS = 'Access',
  REFRESH = 'Refresh',
}

export interface UsersAttributes {
  id: number;
  password: string;
  roles: UserRoles | string;
  status: UserStatus | string;
  email: string;
  createdAt: Date;
  recentLoginTime: Date;
}
