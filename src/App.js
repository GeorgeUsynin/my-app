import React from "react";
import Post from "./components/Post";
import Portal from "./components/Portal";
import NewPostModal from "./components/NewPostModal";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import "./App.css";

function App() {
  const [is_open, setIsOpen] = React.useState(false);

  const { posts } = React.useContext(Context);

  const mapped_posts = posts.map(({ id, title, description }) => {
    return <Post key={id} title={title} description={description} />;
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <button onClick={openModal}>Add new post</button>
      </div>
      <div className="App">{mapped_posts}</div>
      <Portal>
        <NewPostModal is_open={is_open} />
      </Portal>
    </div>
  );
}

export default observer(App);
