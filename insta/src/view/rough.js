
            // api/posts/
            exports.postPosts = function(req,res){
                var post = new Post({
                    title: req.body.title,
                    content: req.body.content,
                    user: req.user._id
                });
                post.save(function(err){
                    if(err){res.send(err);}
                    res.json({status:'done'});
                });
            };
            
            
            // api/posts/:postId/comments
            exports.postComment = function(req,res){
                var comment = new Comment({
                    content: req.body.content,
                    post: req.params.postId,
                    user: req.user._id,
                });
                comment.save(function(err){
                    if(err){res.send(err);}
                    res.json({status:'done'});
                });
            };
        //     Story.
        // findOne({ title: 'Casino Royale' }).
        // populate('author').
        // exec(function (err, story) {
        //     if (err) return handleError(err);
        //     console.log('The author is %s', story.author.name);
        //     // prints "The author is Ian Fleming"
        // });