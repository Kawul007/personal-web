import './App.css';
import Pic from "../src/images/test.jpg"
function App() {
  return (
    <div className="App">
      <h2>这次要成功啊！！！！！！！！！！！</h2>
      <img src={Pic} alt="图片无法显示" style={{width:500,height:500}}></img>
    </div>
  );
}

export default App;
