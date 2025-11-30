import { Client, ID, Databases, Storage, Query } from 'appwrite';
import config from './../config/config';

export class DatabaseService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client.setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return this.databases.createDocument(
                config.appwriteDatabaseId, config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite database service create post error", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite database service update post error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite database service delete post error", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite database service get post error", error);
            return false
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite database service get all posts error", error);
            return false
        }
    }

    // File Upload Service
    async uploadFile(file) {
        try {
            return await this.storage.uploadFile(config.appwriteBucketId, ID.unique, file)
        } catch (error) {
            console.log("Appwrite database service upload file error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(config.appwriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite database service delete file error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(config.appwriteBucketId, fileId)
        } catch (error) {
            console.log("Appwrite database service file preview error", error);
            return false
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService