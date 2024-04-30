// STRUCTURE:
// index Html: is the single page since our applicatio is a single page application
// The src folder is our react application and the entry point is the main.jsx file.
    
// COMPONENTS are functions. You can use a regular function or even an arrow function. 
// AUTO-GENERATE a component. Syntax: rafce + enter-Arrow function(React Arrow Function Component and Export) OR rfc + enter :Regular function
// NOTE:  An entire page should not be made of a single Component, rather, break down comp into smaller reusable components. A comp can have a js or jsx extension or even typescript.
// To do this, create a new folder in the src file named components and inside this comp, create all your com files named accordingly. E.g navbar.jsx or navbar.js.(rafce enter) Within this Navbar.jsx, write out your codes within your return statement. 
// Now, to use this comp, import it into the main comp App.jsx file(import Navbar from './components/Navbar'). Then put the <Navbar /> anywhere we want within the App.jsx return st, pref the top right after the fragment.

//To IMPORT an IMAGE, create the image folder. Move the image into the created folder. Import image into desired component(import logo from '../images/logo.png'). Use image within comp:(<a className="fl" href="/index.html"> <img className="hu" src={logo} alt=""/>)

//JSX: Jsx expressions must have one parent element. You can only return a single element in a jsx, however, you can have multiple elements within. Wrap every other elements in a single div element.

const intro = () => {
    const name = 'Essie';  //Can create a variable and access it anywhere within the jsx by simply surrounding it with parenthesis. Can as well perform js expressions and calculations.
    const x = 1000;
    const y = 2000;
    const names = ['Essie', 'Raya', 'Rosie', 'Amelia', 'Jamal', 'Charlotte', 'Adeline'];  //Create a name list. NOTE: Each child in a list should have a unique "key" prop. If you have an array, you can loop through it and create a list using the map method. 
    const loggedIn = false;
    const styles ={
      color: 'blue',
      fontSize: '15px'
    }
    return (
        // <></> Rem t alw use this fragment when necessary because the jsx file must return a single element.
        // Use Ctrl+Shift L to highlight ALL 
      <div>
        <div className="text-4xl">Welcome</div>
        <p style={{color: 'red', fontSize: '25px'}}>Hello {name}</p>  
        {/* For styling, you can have an inline styling within your jsx using double curly braces. Rem, className not class. You can as well put the style in a variable using it with single{}.  */}
        <p>Do you know that sum of {x} milliseconds {y} makes {x + y}ms</p>
        <p>Let us create some names using react jsx</p>
        <ul style={styles}>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        {loggedIn ? <h2>Hello {name}</h2> : <h2>Hello Guest</h2>}
        {/* {loggedIn ? <h2>Hello {name}</h2> : ''}
        {loggedIn && <h2>Hello User</h2>} */}
      </div>
    );
  };
  
  export default intro;


//PROPS. We can pass in props to components which are basically attributes. Within App.jsx...
//E.g <Hero title='Become a React Developer' subtitle='Learn React with me' />
//          Now, within Hero.jsx pass in props like this.
//            const Hero = (props) => {
//             return (
//                 <div>
//                     <h1>{props.title}</h1>
//                     <p>{props.subtitle}</p>
//                 </div>)}
//             export default Hero;

//DESTRUCTURING Props.
// const Hero = ({title, subtitle}) => {
//     return(
//             <div>
//                 <h1>{title}</h1>
//                 <p>{subtitle}</p>
//             </div>);};
//              export default Hero;

//Setting DEFAULT Props: const Hero = ({title = 'Become a Developer', subtitle= 'Here'}) => {... Note: Whatever we pass in at the initial level will override the default prop.
//Create a wrapper component as in the case of (card.jsx)..and use it as many times as needed.


//STATE: There are two types of State: Component State and App level or Global State.
//Component State. To add state, need to use the useState Hook.

//Importing and Using React Icons.... On terminal, run 'npm i react-icons' Enter. Now, in the desired comp, (import { FaMapMarker} from 'react-icons/fa') and use (<FaMapMarker />) within the jsx return st. So basically, the icon itself is now a component.

//ADDING ADDITIONAL PAGES IN YOUR PROJECT: Note, that can't be achieved with just react. Being a library, react doesn't have a way to add seperate pages. Hence, we will use the React Router which is a seperarte package, so we need to install it.
//React Router Setup... On Terminal, run 'npm i react-router-dom' Enter. So, we'l put all the Routing stuff in the main App file, which is App.jsx.
//How to Create Routes so you can have multiple pages.. 
//Above the App.jsx, import the ffg at the top:
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePagee from './Pages/HomePagee';
import MainLayoutt from './layouts/MainLayoutt';
//Now, the way this will work is: above the return st in the main app comp the App.jsx, craete a variable called router, set that to createBrowserRouter; this will create our router. Inside the (), use createRoutesFromElements and inside thta, is where we'l use the route component.
//For this to work, must implement the provider. So, return the RouterProvider within the App.jsx return st and make it take in the router varable.
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route index element={<Homepagee/>} />)
  );
  const App = () => {
    return <RouterProvider router={router}/>;
  }; //   export default App

//PAGES: Create a seperate folder called 'Pages' for the pages.Within, create a HomePage.jsx file.  Although they are still componnets, but should not put them in the same folder as the regular UI component. Now, import Homepage within App.jsx and render it within the routeprovider.
//Now, import all needed components, use within the return st into the Hompage and it'll be displayed on the screen.

//LAYOUT: This is mostly used for Navbars and Footers i.e elements we always want to show on all pages. So, create a layout folder in the src folder. Note: you can have multiple layouts. To use layout, import it(MainLayout.jsx) into App.jsx (Line 84)
//Now, create a Rarent Route to the rest of our routes i.e other routes where we want the navbar and footer to always display will be embedded in this parent route. Set the path as well. (Line 89 but extended below): So basically, any route put in there will use the layout.
<Route path='/' element={<MainLayoutt />}>
      <Route index element={<HomePagee />} />
      <Route path='/jobs' element={<JobsPagee />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
//The Layout Outlet: In the mainlayout, whatever route we're on, that page will come through the outlet. i.e import outlet into the layout and return it. Then the Navbar as well.

//CREATE MORE PAGES (Jobs Page): The workflow now is to create a new file in pages e.g JobsPage.jsx, then go to the App file (App.jsx) and add the route, rem to import it at the top of as well. But here, change the index and use path set to /jobs.

//LINKS: React works a little bit different. We don't use the anchor ref <a tags, we use the Link to tabs. Now, the href or to element here should go to the path defined in the router.. in this case... href="/jobs" as defined in the App.jsx router.
//Another reason we don't use the a tag is because it does a complete page refresh which the link tag will avoid, making things very fast. So, in the Navbar, import Link: And change all a tags to Link tags and change the href to to=.
import { Link } from 'react-router-dom';

//Create a Custom 404 Error Page.. Import it into the App.jsx and add route. And for the path, use '*'

//NAVLink: Works the same way with Link tag except that it adds a class to the active link. Now we can change all the link tags in the navbar to Navlink as well as the import name above. To manually add a classLink to an active link or button, create a function above the return st within desired component and set className of the Navlink within the return st to the function. Check Navbar.jsx for ref.