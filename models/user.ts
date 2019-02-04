export class User {
    constructor(public Name: string,
                public Email: string,
                public StartDate: Date,
                public Active?: boolean) {
        
    }
}