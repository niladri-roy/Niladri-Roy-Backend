const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');


router.post('/create', blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogsById);
router.post('/update/:id', blogController.updateBlogById);
router.delete('/:id', blogController.deleteBlogById);

console.log("Blog Routes -> Working Good");
module.exports = router;