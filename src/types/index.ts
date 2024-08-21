/* eslint-disable @typescript-eslint/no-explicit-any */


export interface GeneralResponse {
  success: boolean;
  message: string;
  code: number;
  data?: any;
  error?: any;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  code: number;
  data: User;
  token: string;
  error?: any;
}

export interface PrivilegeObject {
  ADMIN: 1;
  USER: 0;
  SUPER_ADMIN: 3;
  CREATE_ADMIN: 2;
}

export type SessionToken = string | null | undefined;

export type accountType = "Lecturer" | "" | "Student" | "Tutor";
export type transactionStatus = "Approved" | "Pending" | "Failed";
export type userStatus =
  | "Verified"
  | "Pending"
  | "Review"
  | "Suspended"
  | "Active";
export type userPrivileges = 0 | 1 | 2 | 3;
export type userEmailStatus = 0 | 1;

export interface User {
  id: number;
  first_name: string;
  surname: string;
  matric: string;
  institution: string;
  campus: string;
  department: string;
  level: string;
  phone: string;
  image: string;
  created_at: string;
  verified: userEmailStatus;
  verify_code: string;
  courses: string;
  privileges: userPrivileges;
  intent: string;
  title: string;
  coins: number;
  email: string;
  account_type: accountType;
  password?: string;
  status: userStatus;
  cgpa: number;
  followers?: number;
  following?: number;
  session_id: SessionToken;
  bio: string;
  token?: SessionToken;
  updated_at:string;
  verified_at?:string;
  totalViews?: number;
  totalComments?: number;
  totalFollowers?: number;
  bank?: string;
  account_number?: string;
}



export interface PublicUser {
  first_name: string;
  surname: string;
  matric: string;
  institution: string;
  bio: string;
  campus: string;
  department: string;
  level: string;
  image: string;
  status: string;
  followers?: number;
  following?: number;
  followers_count: number;
  lectures_count: number;
}


export interface TutorialOutfit {
  id: number;
  name: string;
  status: userStatus;
  logo: string;
  description: string;
  organization_id: string;
  date_created: string;
  owner: string;
  campus: string;
}

export interface Creators {
  id: number;
  admin: string;
  organization_id: string;
  date_created: string;
  creator: string;
  privileges: userPrivileges;
}

export interface Transaction {
  id: number;
  sender: string;
  receiver: string;
  amount: number;
  date: string;
  transaction_id: string;
  item: string;
  description_sender: string;
  description_receiver: string;
  status: transactionStatus;
  notification_owner: string;
  payment_method: string;
}

export interface Withdrawal {
  id: number;
  user: string;
  account_number: number;
  amount: number;
  date: string;
  account_name: string;
  bank: string;
  status: transactionStatus;
  date_updated: string;
}

export interface Assignment {
  id: number;
  course: string;
  date: string;
  user: string;
  file: string;
  campus: string;
  warnings: number;
  downloads: number;
  filestat: string;
  title: string;
}

export interface Lecture {
  id: number;
  course: string;
  date: string;
  user: string;
  topic: string;
  campus: string;
  lid: string;
  duration: string;
  status: transactionStatus;
  video: string;
  description: string;
  fullname?: string;
  view_count?: number;
  comment_count?: number;
  user_image?: string;
  thumbnail?: string;
}

export interface Vote {
  id: number;
  subject: string;
  type: string;
  user: string;
  subject_id: number;
  campus: string;
  department: string;
  level: string;
}

export interface Schedule {
  id: number;
  course: string;
  day: string;
  user: string;
  time_in: string;
  campus: string;
  wrong?: number;
  correct?: number;
  time_out: string;
  venue: string;
  department: string;
  level: string;
}

export interface Comments {
  id: number;
  user: string;
  reply_id: string;
  comment: string;
  date: string;
  user_image?: string;
  user_name?: string;
  lecture_id: string;
}

export interface LectureViews {
  id: number;
  user: string;
  date: string;
  lecture_id: string;
}

export interface Department {
  id: number;
  name: string;
  user: string;
}

export interface Campus {
  id: number;
  name: string;
  user: string;
  acro: string;
  logo: string;
}

export interface Course {
  id: number;
  code: string;
  user: string;
  title: string;
  department: string;
  level: string;
  campus: string;
}

export interface Following {
  id: number;
  follower: string;
  following: string;
  date: string;
}

export type NotificationAction =
  | "OPEN_CONTENT"
  | "NONE"
  | "OPEN_PROFILE"
  | "OPEN_TRANSACTION";

export interface Notification {
  id: number;
  message: string;
  user: string;
  is_read: boolean;
  created_at: string;
  action: NotificationAction;
  image: string;
  thumbnail?: string;
  title:string;
  foreign_key:any;
}

export type OTPChannel ="SMS_GENERIC_OTP"|"WA_UNOFFICIAL_OTP"|"HEADER_ENRICHMENT"|"MISSCALL_OTP"|"EMAIL_OTP"|"FAZPASS_OPTIMIZE"|"EMAIL CAMPAIGN"|"WA_UNOFFICIAL_CAMPAIGN"|"WA_GENERIC_OTP"|"SMS CAMPAIGN"|"SMS_OTP"|"WHATSAPP_OTP"|"WA_FAILOVER"
export type OTPStatus="USED"|"ACTIVE"|"NONE"

export interface OTP {
    id: string;
    otp: number;
    otp_length: 6;
    channel: OTPChannel;
    provider: string;
    purpose: string;
    created_at:string;
    user:string;
    status:OTPStatus
  }





  export interface Message {
    mid:string;
    id: number;
    text?: string;
    image?: string;
    video?: string;
    audio?: string;
    created_at: string;
    updated_at:string;
    sender:string;
    receiver:string;
  }



export interface MessageResponse extends GeneralResponse {
    data: Message[];
  }


export interface DashboardFollower {
  email: string;
  fullname: string;
  image: string;
  campus: string;
}

export interface DashboardViews {
  email: string;
  fullname: string;
  image: string;
  campus: string;
}


export interface DashboardComments extends Comments {
  lecture:{
  topic: string;
  course: string;
  campusLogo: string;
  thumbnail?: string;
}

}


  export interface Dashboard {
    followers: {
      totalFollowers: number;
      increased: boolean;
      percentage: string;
      data: DashboardFollower[]
    };
    views: {
      totalViews: number;
      increased: boolean;
      percentage: string;
      data: DashboardViews[]
    };
    comments: {
      totalComments: number;
      increased: boolean;
      percentage: string;
      data: DashboardComments[]
    };
    video: Lecture;
  }



export interface DashboardResponse extends GeneralResponse {
    data?: Dashboard;
  }







export interface OTPResponse extends GeneralResponse {
    data: OTP[];
  }

  

export interface NotificationResponse extends GeneralResponse {
  data: Notification[];
}

export interface AssignmentResponse extends GeneralResponse {
  data: Assignment[];
}

export interface CommentsResponse extends GeneralResponse {
  data: Comments[];
}

export interface LectureResponse extends GeneralResponse {
  data: Lecture[];
}

export interface ScheduleResponse extends GeneralResponse {
  data: Schedule[];
}

export interface WithdrawalResponse extends GeneralResponse {
  data: Withdrawal[];
}

export interface UserResponse extends GeneralResponse {
  data: User[];
}

export interface PublicUserResponse extends GeneralResponse {
  data?: PublicUser;
}

export interface TransactionResponse extends GeneralResponse {
  data: Transaction[];
}

export interface TutorialOutfitResponse extends GeneralResponse {
  data: TutorialOutfit[];
}

export interface CreatorsResponse extends GeneralResponse {
  data: Creators[];
}

export interface LectureViewsResponse extends GeneralResponse {
  data: LectureViews[];
}

export interface DepartmentResponse extends GeneralResponse {
  data: Department[];
}

export interface CampusResponse extends GeneralResponse {
  data: Campus[];
}

export interface CourseResponse extends GeneralResponse {
  data: Course[];
}

export interface VoteResponse extends GeneralResponse {
  data: Vote[];
}

export interface FollowingResponse extends GeneralResponse {
  data: Following[];
}

export interface PrivilegeResponse extends GeneralResponse {
  data: userPrivileges;
}
