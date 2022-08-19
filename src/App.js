import './App.css';
import Pic from "../src/images/img-2.jpg";
function App() {
  return (
    <div className="App">
      <h1>今天要完成</h1>
      <h2>这次要成功啊！！！！！！！！！！！</h2>
      <img src={Pic} style={{width:500,height:500}}></img>
    </div>
  );
}

export default App;
