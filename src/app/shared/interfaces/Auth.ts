export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    token?: string;
    msg?: string;
}

export interface User {
    uid: string;
    name: string;
}