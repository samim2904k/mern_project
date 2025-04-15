import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./Component/Footer";
import Fruits from "./Component/Fruits";
import Properties from "./Component/Properties";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from './Component/About'
import Education from "./Component/Education";
import Skills from "./Component/Skills";
import Navbar from "./Component/Navbar";
import UserList from "./Component/UserList";
import HandleState from "./Component/HandleState";
import HandleFormState from "./Component/HandleFormState";
import UCcomponent from "./Component/UCcomponent";
// import UseEffect from "./Component/useEffect";
import ArrayUseEffect from "./Component/ArrayUseEffect";
import UseContext from "./Component/UseContext";
import UseCallBack from "./Component/UseCallBack";
import UseMemo from "./Component/UseMemo";
import UseNavigate from "./Component/UseNavigate";
import Forms from "./Component/Forms";
// import ApiConnectivity from "./Component/ApiConnectivity";
import { lazy, Suspense } from "react";
import ZustandLib from "./Component/ZustandLib";
import CountButton from "./Component/CountButton";

const ApiConnectivity = lazy(()=>import('./Component/ApiConnectivity'))

function App() {
  let fruits = ["banana","apple","pineapple","grapes"];
  let users = [
    {
        "name": "Alice Johnson",
        "image": "https://randomuser.me/api/portraits/women/1.jpg",
        "email": "alice.johnson@example.com",
        "age": "25",
        "roll": "101"
    },
    {
        "name": "Bob Smith",
        "image": "https://randomuser.me/api/portraits/men/2.jpg",
        "email": "bob.smith@example.com",
        "age": "30",
        "roll": "102"
    },
    {
        "name": "Charlie Brown",
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "email": "charlie.brown@example.com",
        "age": "22",
        "roll": "103"
    },
    {
        "name": "Diana Prince",
        "image": "https://randomuser.me/api/portraits/women/4.jpg",
        "email": "diana.prince@example.com",
        "age": "28",
        "roll": "104"
    },
    {
        "name": "Ethan Hunt",
        "image": "https://randomuser.me/api/portraits/men/5.jpg",
        "email": "ethan.hunt@example.com",
        "age": "35",
        "roll": "105"
    },
    {
        "name": "Fiona Gallagher",
        "image": "https://randomuser.me/api/portraits/women/6.jpg",
        "email": "fiona.gallagher@example.com",
        "age": "27",
        "roll": "106"
    },
    {
        "name": "George Costanza",
        "image": "https://randomuser.me/api/portraits/men/7.jpg",
        "email": "george.costanza@example.com",
        "age": "29",
        "roll": "107"
    },
    {
        "name": "Hannah Montana",
        "image": "https://randomuser.me/api/portraits/women/8.jpg",
        "email": "hannah.montana@example.com",
        "age": "24",
        "roll": "108"
    },
    {
        "name": "Ian Malcolm",
        "image": "https://randomuser.me/api/portraits/men/9.jpg",
        "email": "ian.malcolm@example.com",
        "age": "31",
        "roll": "109"
    },
    {
        "name": "Jessica Jones",
        "image": "https://randomuser.me/api/portraits/women/10.jpg",
        "email": "jessica.jones@example.com",
        "age": "26",
        "roll": "110"
    }
]

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={< Education />}/>
          <Route path="/skills" element={< Skills />}/>
          <Route path="/properties" element={< Properties name={"Samim"} age={"21"}/>}/> */}
          <Route path="/fruits" element={< Fruits fruits={fruits} />}/>
          <Route path="/users" element={< UserList users={users} />}/>
          <Route path="/handlestate" element={< HandleState />}/>
          <Route path="/handleform" element={< HandleFormState />}/>
          <Route path="/uccomponent" element={< UCcomponent/>}/>
          <Route path="/useeffect" element={< UseEffect />}/>
          <Route path="/arrayuseeffect" element={< ArrayUseEffect />}/>
          <Route path="/usecontext" element={< UseContext />}/>
          <Route path="/usecallback" element={< UseCallBack />}/>
          <Route path="/usememo" element={< UseMemo />}/>
          <Route path="/usenavigate" element={< UseNavigate />}/>
          <Route path="/forms" element={< Forms />}/>
          <Route path="/apiconnectivity" element={< ApiConnectivity />}/>
          <Route path="/countbutton" element={< CountButton />}/>
        </Routes>
        </Suspense>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
export default App;
