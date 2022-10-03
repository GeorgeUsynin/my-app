// import { makeAutoObservable } from "mobx";
import { makeObservable, observable, action } from "mobx";
class Todo {
  posts = [
    {
      id: 1,
      title: "About me",
      description:
        "When you create a professional profile, blog or website, it's important to help customers or potential employers form a personal connection to you through an about me section.",
    },
    {
      id: 2,
      title: "Hello",
      description:
        "Well-crafted about me statements can help readers, such as customers or employers, form a connection with you. This might help increase website traffic and interest in your company or employability.",
    },
  ];

  constructor() {
    makeObservable(this, {
      posts: observable,
      addPost: action.bound,
    });
  }

  addPost(post) {
    this.posts.push(post);
  }

  // If we use makeAutoObservable, and then call addPost somewhere in the component, we will loose "this" context,
  // that's why we need to use arrow functions not to loose the context

  //   constructor() {
  //     makeAutoObservable(this)
  //   }

  //   addPost = (post) => {
  //     this.posts.push(post);
  //   };
}

export default Todo;
