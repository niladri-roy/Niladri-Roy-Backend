const Blog = require('../models/blogModel');

//Get all Blogs
const getAllBlogs = async(req, res, next) => {
    try{
        const blogs = await Blog.find();
        res.status(200).json({
            status: 'success',
            blogs
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

//Get a single blog by ID
const getBlogsById = async(req, res, next) => {
    try{
        const blog = await Blog.findById(req.params.id);
        if(!blog){
            return (
                res.status(404).json({
                    error: 'No blog found with that ID'
                })
            )
        }

        res.status(200).json({
            status: 'success',
            blog
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

//Create a new Blog
const createBlog = async(req, res, next) => {
    try{
        const newBlog = await Blog.create(req.body);
        res.status(201).json({
            status: 'success',
            blog: newBlog
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

//Update a blog by ID
const updateBlogById = async(req, res, next) => {
    try{
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!blog) {
            return (
                res.status(404).json({
                    error: 'No blog found with that ID'
                })
            )
        }

        res.status(200).json({
            status: 'success',
            blog
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
} 

//Delete a blog by ID
const deleteBlogById = async(req, res, next) => {
    try{
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if(!blog){
            return (
                res.status(404).json({
                    error: 'No blog found with that ID'
                })
            )
        }

        res.status(204).json({
            status: 'success',
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

console.log("Blog Controller -> Working Good");
module.exports = {
    getAllBlogs,
    createBlog,
    getBlogsById,
    updateBlogById,
    deleteBlogById
}