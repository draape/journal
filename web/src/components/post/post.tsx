import React from "react"
import cn from "classnames"

import Byline from "components/byline/byline"
import ImageCarousel from "components/image-carousel/image-carousel"
import PostBody from "components/post-body/post-body"

export interface PostProps {
  images: any[]
  taggedPersons: { name: string }[]
  published: Date
  text: any[]
}

const Post: React.FC<PostProps> = ({
  images,
  taggedPersons,
  published,
  text,
}) => (
  <div
    className={cn("post", {
      "post--with-image": images && images.length > 0,
    })}
  >
    {images && images.length > 0 && (
      <div className="post__image">
        <ImageCarousel images={images} />
      </div>
    )}
    <div className="post__text">
      <Byline taggedPersons={taggedPersons} publishedDate={published} />
      {text && <PostBody text={text} />}
    </div>
  </div>
)

export default Post
