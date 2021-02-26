export interface User {
    id?: number;
    uid: string;
    displayName: string;
    firstName?: string;
    lastName?: string;
    email: string;
    riskProfile?: number;
    accessLevel?: number;
    role?: number;
}