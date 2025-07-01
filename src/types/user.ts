export interface Product {
    _id: string;
    displayname: string;
    password: string;

}

export interface LoginInfor {
    email: string;
    password: string;
}
export interface SigninInfor {
    email: string;
    password: string;
    displayName: string;
}