import React from "react"

import Byline from "../byline/byline"
import ImageCarousel from "../image-carousel/image-carousel"
import Controls from "../controls/controls"
import Likes from "../likes/likes"
import PostBody from "../post-body/post-body"
import CommentList from "../comment-list/comment-list"

import "./post.scss"

const Post = ({ post }) => (
  <div className={"post"}>
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
