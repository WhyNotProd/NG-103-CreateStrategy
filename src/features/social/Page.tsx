import React, { useState } from 'react';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { Profile } from '@styled-icons/icomoon/Profile';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded';
import { useDispatch, useSelector } from 'react-redux';
import { HeartCircle } from '@styled-icons/boxicons-regular/HeartCircle';
import { ShareAlt } from '@styled-icons/boxicons-regular/ShareAlt';
import { Trash } from '@styled-icons/boxicons-regular/Trash';
import {
  Button,
  Card,
  FlexBox,
  H1,
  H3,
  GridList, Paper, GridLi, IconButton, VARIANT,
} from '../../app/GlobalStyles';
import {
  addPost, likePost, likePostR, unlikePostR, postsSelector, unlikePost,
} from './socialPostsSlice';
import { ISocialPost } from '../../interfaces/socialPost.interface';
import PostForm from './components/PostForm';

export interface CreatePayload {
  userID: number,
  shareMessage: string,
  shareActionViewModel: object[]
}

const Page = (): any => {
  const { posts, loading } = useSelector(postsSelector);
  const [userName] = useState<string>('Vikhyat Puri');
  const [toggle, setToggle] = useState<boolean>(false);
  if (loading === true) {
    return <></>;
  }
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createPost = (): void => {
    const payload: CreatePayload = {
      userID: 0,
      shareMessage: 'string',
      shareActionViewModel: [
        {
          shareAction: 'string',
          shareValue: 'string',
          symbol: 'string',
        },
      ],
    };
    dispatch(addPost(payload));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const likePostP = (postId: number, index: string) => {
    dispatch(likePost(1));
    dispatch(likePostR());
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const deleteLikeP = (postId: number, index: string) => {
    dispatch(unlikePost(1));
    dispatch(unlikePostR());
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const deletePost = (postId: number, index: string) => 'delete post';
  const toggleForm = (): void => {
    setToggle(!toggle);
  };
  return (
    <FlexBox>
      {toggle && <PostForm setToggle={setToggle} />}
      <div>
        <div>
          <img src="assets/social/img_1.png" alt="img1" />
        </div>
      </div>
      <div>
        <H1 variant={VARIANT.COMMON}>Share</H1>
        <FlexBox>
          <div>
            <H3 variant={VARIANT.PRIMARY}>
              An investment in knowledge
              <br />
              always pays the best interest
            </H3>
          </div>
          <div>
            <Button variant={VARIANT.COMMON} onClick={toggleForm}>
              <Plus size={20} />
              {' '}
              Share your idea
            </Button>
          </div>
        </FlexBox>
        {posts.length > 0 && (
          <div>
            {/* @ts-ignore */}
            {posts[0].map((post, index): ISocialPost => (
              <Card key={post.id}>
                <div>
                  <div>
                    <Profile size={20} />
                  </div>
                  <div>
                    {post.userFirstName}
                    {' '}
                    {post.userLastName}
                  </div>
                  <div>
                    <DotsVerticalRounded size={20} />
                  </div>
                </div>
                <div>{post.userShareDescription}</div>
                <GridList>
                  {post.shareAction.map((postAction) => (
                    <GridLi>
                      <Paper>
                        <div>{postAction.shareAction}</div>
                        <div>{postAction.symbol}</div>
                        <div>
                          {postAction.shareValue}
                        </div>
                      </Paper>
                    </GridLi>
                  ))}
                </GridList>
                <div>
                  {post.userLike.length > 0 && (
                    <div>
                      {post.userLike.length}
                      {post.userLike.length === 1 ? ' like' : ' likes'}
                    </div>
                  )}
                </div>
                <div>
                  {post.userLike.indexOf(userName) === -1 && (
                    <IconButton onClick={() => likePostP(post.id, index)}>
                      <Heart
                        aria-label="like post"
                        size={25}
                      />
                    </IconButton>
                  )}
                  {post.userLike.indexOf(userName) !== -1 && (
                    <IconButton onClick={() => deleteLikeP(post.id, index)}>
                      <HeartCircle
                        aria-label="unlike"
                        size={25}
                      />
                    </IconButton>
                  )}
                  <IconButton>
                    <ShareAlt aria-label="share" size={20} />
                  </IconButton>
                  {post.postedByUserID === 1 && (
                    <IconButton onClick={() => deletePost(post.id, index)}>
                      <Trash size={25} />
                    </IconButton>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      <div>
        <img src="assets/social/img_2.png" alt="img1" />
      </div>
    </FlexBox>
  );
};
export default Page;
