import React from "react"

import Byline from "components/byline"
import ImageCarousel from "components/image-carousel"
import Controls from "components/controls"
import PostBody from "components/post-body"

const Post = ({ post }) => {
  return (
    <div className="post">
      {/* <ImageCarousel images={post.images} /> */}
      <Byline
        taggedPersons={post.taggedPersons}
        publishedDate={post.published}
      />
      <Controls
        imageUrl={
          post.images?.length > 0 ? post.images[0].image.asset.url : undefined
        }
      />
      {post.text && <PostBody text={post.text} />}
    </div>
  )
}

export default Post
