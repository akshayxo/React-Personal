import conf from "../../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create( ID.unique() , email, password,name);
            if(userAccount){
                // call login method
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            console.log("Appwrite Service Error :: createAccount",error);
        }
    }
    async login({email,password}){
        try {
            const session = await this.account.createEmailPasswordSession(email,password);
            if(session){
                return session;
            }
            else{
                return null;
            }
        } catch (error) {
            console.log("Appwrite Service Error :: Login",error);
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service Error :: getCurrentUser",error);
        }
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service Error :: logout",error);
        }
    }

}

const authservice = new AuthService();
export default authservice;


