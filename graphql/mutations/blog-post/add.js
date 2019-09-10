import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import blogPostInputType from '../../types/blog-post-input';
import blogPostType from '../../types/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: blogPostType, //GraphQLBoolean 结果返回 true/false object must add projection
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(blogPostInputType)
    }
  },
  async resolve (root, params, options) {
    console.log(params, "----")
    const blogPostModel = new BlogPostModel(params.data);
    const newBlogPost = await blogPostModel.save();
    if (!newBlogPost) {
      throw new Error('Error adding new blog post');
    }
    return newBlogPost;
  }
};
