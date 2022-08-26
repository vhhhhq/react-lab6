import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import { useState } from 'react';
import MenuComponent from './components/MenuComponent/MenuComponent';
import Products from './containers/Products/Products';
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      
    >
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: 'pink',
        }}
      >
        <MenuComponent/>
      </Sider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
