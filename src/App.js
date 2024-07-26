import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Fineart from './pages/Fineart';
import Furnitures from './pages/Furnitures';
import ContactUs from './pages/contactus';
import Aboutus from './pages/aboutus';
import Footer from './component/footer';
import DetailsA from './Antiques/details1';
import DetailsB from './Antiques/details2';
import DetailsC from './Antiques/details3';
import DetailsD from './Antiques/details4';
import DetailsE from './Antiques/details5';
import DetailsF from './Antiques/details6';
import DetailsG from './Antiques/details7';
import DetailsH from './Antiques/details8';
import DetailsI from './Antiques/details9';
import DetailsJ from './Antiques/details10';
import DetailsK from './Antiques/details11';
import DetailsL from './Antiques/details12';
import DetailsM from './Antiques/details13';
import FineA from './Fineart/fine1';
import FineB from './Fineart/fine2';
import FineC from './Fineart/fine3';
import FineD from './Fineart/fine4';
import FineE from './Fineart/fine5';
import FineF from './Fineart/fine6';
import FineG from './Fineart/fine7';
import FineH from './Fineart/fine8';
import FineI from './Fineart/fine9';
import FurA from './Furniture/Fur1';
import FurB from './Furniture/Fur2';
import FurC from './Furniture/Fur3';
import FurD from './Furniture/Fur4';
import FurE from './Furniture/Fur5';
import FurF from './Furniture/Fur6';
import FurG from './Furniture/Fur7';
import FurH from './Furniture/Fur8';
import FurI from './Furniture/Fur9';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './Blog/Blog';
import BlogHome from './pages/BlogHome';
import BlogRome from './Blog/BlogRome';
import BlogGogh from './Blog/BlogGogh';
import ArticlesHome from './pages/ArticlesHome';
import ArticleArt from './Articles/ArticleArt';
import ArticleRich from './Articles/ArticleRich';
import ArticleCartier from './Articles/ArticleCartier';
import FurK from './Furniture/Fur10';
import FurL from './Furniture/Fur11';
import FurM from './Furniture/Fur12';
import FineK from './Fineart/fine10';
import FineL from './Fineart/fine11';
import Antiques from './pages/Antiques';
import Search from './pages/Search';

function App() {
  const url = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <nav>
        <img src={url + "/images/logo.jpg"} alt='logo' className="logo" />
        <h1>BidSpirit Online MarketPlace</h1>
        <div>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/antiques" >Antique</Link></li>
            <li><Link to="/furnitures">Furnitures</Link></li>
            <li><Link to="/fineart">Fineart</Link></li>
            <li><Link to="/aboutus">AboutUs</Link></li>
            <li><Link to="/contactus">ContactUs</Link></li>
          </ul>

          <div className="signup">
            <button className='btn btn-outline-success'><Link to="/login">Login</Link></button>
            <button className='btn btn-outline-success'><Link to="/register">Register</Link></button>
          </div>
        </div>
      </nav>

      <div class="dropdown">
        <button class="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">The Auction</button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><Link to="/" class="dropdown-item">Home</Link></li>
          <li><Link to="/antiques" class="dropdown-item" >Antiques</Link></li>
          <li><Link to="/furnitures" class="dropdown-item" >Furnitures</Link></li>
          <li><Link to="/fineart" class="dropdown-item" >FineArt</Link></li>
          <li><Link to="/aboutus" class="dropdown-item">Aboutus</Link></li>
          <li><Link to="/contactus" class="dropdown-item" >Contactus</Link></li>
        </ul>

        <Search />

      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/antiques' element={<Antiques />} />
        <Route path='/fineart' element={<Fineart />} />
        <Route path='/furnitures' element={<Furnitures />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details1' element={<DetailsA />} />
        <Route path='/details2' element={<DetailsB />} />
        <Route path='/details3' element={<DetailsC />} />
        <Route path='/details4' element={<DetailsD />} />
        <Route path='/details5' element={<DetailsE />} />
        <Route path='/details6' element={<DetailsF />} />
        <Route path='/details7' element={<DetailsG />} />
        <Route path='/details8' element={<DetailsH />} />
        <Route path='/details9' element={<DetailsI />} />
        <Route path='/details10' element={<DetailsJ />} />
        <Route path='/details11' element={<DetailsK />} />
        <Route path='/details12' element={<DetailsL />} />
        <Route path='/details13' element={<DetailsM />} />
        <Route path='/fur1' element={<FurA />} />
        <Route path='/fur2' element={<FurB />} />
        <Route path='/fur3' element={<FurC />} />
        <Route path='/fur4' element={<FurD />} />
        <Route path='/fur5' element={<FurE />} />
        <Route path='/fur6' element={<FurF />} />
        <Route path='/fur7' element={<FurG />} />
        <Route path='/fur8' element={<FurH />} />
        <Route path='/fur9' element={<FurI />} />
        <Route path='/fur10' element={<FurK />} />
        <Route path='/fur11' element={<FurL />} />
        <Route path='/fur12' element={<FurM />} />
        <Route path='/fine1' element={<FineA />} />
        <Route path='/fine2' element={<FineB />} />
        <Route path='/fine3' element={<FineC />} />
        <Route path='/fine4' element={<FineD />} />
        <Route path='/fine5' element={<FineE />} />
        <Route path='/fine6' element={<FineF />} />
        <Route path='/fine7' element={<FineG />} />
        <Route path='/fine8' element={<FineH />} />
        <Route path='/fine9' element={<FineI />} />
        <Route path='/fine10' element={<FineK />} />
        <Route path='/fine11' element={<FineL />} />
        <Route path='/bloghome' element={<BlogHome />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogrome' element={<BlogRome />} />
        <Route path='/bloggogh' element={<BlogGogh />} />
        <Route path='/articleshome' element={<ArticlesHome />} />
        <Route path='/articleart' element={<ArticleArt />} />
        <Route path='/articlerich' element={<ArticleRich />} />
        <Route path='/articlecartier' element={<ArticleCartier />} />
        <Route path="*" element={<Home />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;


