import { Dayjs } from "dayjs"; //to use?
import { Role } from "./role";
import { Listing } from "./listing";
export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
    role: Role;
    isActive: boolean;
    listings: Listing[]
    bookmarkedListings: Listing[]
  }


export function isAdmin(user: User): boolean {
      let isAdmin =  user.role === Role.Admin ?  true :  false;
      return isAdmin;
}




