import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
  GraphQLString
} from 'graphql';

import blogPostInputType from '../../types/blog-post-input';
import blogPostType from '../../types/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: GraphQLBoolean, //GraphQLBoolean 结果返回 true/false object must add projection
  args: {
      _id: {
          // name: "_id",
         type: new GraphQLNonNull(GraphQLID)
      },
      title: {
          // name: "title",
          type: GraphQLString
      },
      description: {
          // name: "description",
          type: GraphQLString
      }
  },
  async resolve (root, params, options) {
      console.log(params, "----")
      BlogPostModel.update({_id: params._id}, {$set: {title: params.title, description: params.description}}).exec();
      return true;
  }
};
