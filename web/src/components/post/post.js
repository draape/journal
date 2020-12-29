import React from "react"

import Byline from "components/byline"
import ImageCarousel from "components/image-carousel"
import Controls from "components/controls"
import Likes from "components/likes"
import PostBody from "components/post-body"
import CommentList from "components/comment-list"

const Post = ({ post }) => (
  <div className="post">
    <Byline
      author={post.author}
      taggedPersons={post.taggedPersons}
      publishedDate={post.published}
    />
    <ImageCarousel images={post.images} />
    <Controls
      isLiked={post.likes.length > 0}
      hasComments={post.comments && post.comments.length > 0}
    />
    <Likes persons={post.likes} />
    <PostBody text={post.text} />
    <CommentList comments={post.comments} />
  </div>
)

export default Post
