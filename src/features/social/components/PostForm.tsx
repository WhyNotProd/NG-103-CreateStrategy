import React, { useState } from 'react';
import { Button, Drawer, DrawerContent } from '../../../app/GlobalStyles';

// eslint-disable-next-line react/prop-types
const PostForm = ({ setToggle }): any => {
  const [message, setMessage] = useState<string>('');

  return (
    <>
      <Drawer onClick={setToggle}>
        <DrawerContent>
          <form action="">
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button>Post</Button>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default PostForm;
