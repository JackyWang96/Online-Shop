import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Test from "./routes/test/test";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='test' element={<Test/>}/>
            </Route>
        </Routes>
    );
};

export default App;






  // return (
  //
  //
  //
  //     //className for edit format in the css file
  //     // <div className={'categories-container'}>
  //     //     {/*arrow function 右边是参数就（），是整个方法体就{}*/}
  //     //     {categories.map(({title}) =>(
  //     //         <div className={'category-container'}>
  //     //             <div className={'category-body-container'}>
  //     //                 {/*在React组件中使用变量时，必须使用花括号{}将变量括起来，以将变量的值嵌入到JSX中。*/}
  //     //                 <h2>{title}</h2>
  //     //                 <p>SHop Now</p>
  //     //             </div>
  //     //         </div>
  //     //     ))
  //     //     }
  //     // </div>
  // )


