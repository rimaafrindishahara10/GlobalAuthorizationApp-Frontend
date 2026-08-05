export default interface User {
    id: string;
    name?: string;
    email: string;
    enable: boolean;
    imageUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    provider?: string;
}