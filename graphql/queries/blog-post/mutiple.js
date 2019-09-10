import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: new GraphQLList(blogPostType),
  args: {
    _id: {
      name: '_id',
      type: new GraphQLList(GraphQLID)
    }
  },
  resolve (root, params, ctx, options) {
      console.log(params, "----")
    const projection = getProjection(options.fieldASTs[0]);

    return BlogPostModel
      .find(params)
      .select(projection)
      .exec();
  }
};
