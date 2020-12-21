import { Post } from '../models/post.js'
export const renderizarBlog = (req, res) => {
    Post.find((err, posts) =>{
        res.render("blog.ejs", {path:"Blog",  posts : posts});
    })
}

export const newPost = (req, res) => {
    const  postRecibido = new Post({ title: req.body.title, body: req.body.body })
    postRecibido.save((err) => {
       res.redirect('/blog');
    })
}

export const detalle = (req, res) => {
    Post.findById(req.params.id, (err, post) =>{
        res.render('post-detalle.ejs', {path: "Post Detalle", post: post})
    })
}

export const renderizarNewPost = (req,res) => {
    res.render('new-post.ejs', {path:"New Post"});
}

export default { renderizarBlog, newPost, renderizarNewPost, detalle }