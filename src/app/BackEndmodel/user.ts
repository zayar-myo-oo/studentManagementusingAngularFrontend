export class User {
    id!: number
    name!: string
    email!: string
    password!: string
    role!: string

   public constructor(id: any,name: any,email:any,password:any,role:any) {
      this.id=id;
      this.name=name;
      this.password=password;
      this.role=role;
      this.email=email;
    }
 
  }
  