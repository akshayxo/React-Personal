import conf from '../../config/conf.js'
import { Client,Databases,Storage, Query,ID } from "appwrite";

export class Services{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    async createPost({title,slug,featuredImage,status,content,userId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    status,
                    content,
                    userId 
                })
        } catch (error) {
            console.log("Appwrite Service Error :: createPost",error);   
        }
    }

    async updatePost(slug,{title,featuredImage,status,content}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    status,
                    content,
                })
        } catch (error) {
            console.log("Appwrite Service Error :: updatePost",error);
            
        }
    }

    async deletePost(slug){
        try {
              await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service Error :: deletePost",error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service Error :: getPost",error);
        }
    }
    async getPosts(queries =[Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service Error :: getPosts",error);
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.apwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service Error :: uploadFile",error);
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.apwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Service Error :: deleteFile",error);
            return false
        }
    }
    async getPreview(fileId){
            return await this.bucket.getFilePreview(
                conf.apwriteBucketId,
                fileId
            )
    }

} 
const service = new Services();
export default service;