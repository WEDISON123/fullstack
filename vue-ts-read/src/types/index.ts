export * from './gpt';

export interface FormData {
    name: string;
    password: string;
};

export interface UserData {
    name: string;
    password: string;
    __v: number;
    _id: string;
};