import React from "react"

import Byline from "components/byline/byline"
import ImageCarousel from "components/image-carousel/image-carousel"
import Controls from "components/controls/controls"
import PostBody from "components/post-body/post-body"

interface PostProps {
  post: {
    images: any[]
    taggedPersons: { name: string }[]
    published: Date
    text: any[]
  }
}

const Post: React.FC<PostProps> = ({ post }) => (
  <div className="post">
    {post.images && post.images.length > 0 && (
      <div className="post__image">
        <ImageCarousel images={post.images} />
        <Controls
          imageUrl={
            post.images?.length > 0 ? post.images[0].asset.url : undefined
          }
        />
      </div>
    )}
    <div className="post__text">
      <Byline
        taggedPersons={post.taggedPersons}
        publishedDate={post.published}
      />
      {post.text && <PostBody text={post.text} />}
    </div>
  </div>
)

export default Post
