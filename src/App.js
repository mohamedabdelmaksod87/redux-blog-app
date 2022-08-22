import PostsList from "./features/posts/PostsList";
import AddFormPost from "./features/posts/AddFormPost";

function App() {
  return (
    <main className="App">
      <h2>Hello from Circle CI</h2>
      <AddFormPost />
      <PostsList />
    </main>
  );
}

export default App;
