import { Container } from "react-bootstrap";
import useFetchData from "../hooks/useFetchData";
import ShowList from "./show/ShowList";
import './styles/MainStyle.css';
const Dashboard=()=>{

    const {state:{showsData}}=useFetchData();
/*const {filterState:{sort,byStock,
        fastDelivery,
        byRating,searchTerm}
    }=CartState();

const filterData=()=>{
    let filteredObj:any[]=showsData;
debugger
    if(sort){
        filteredObj = filteredObj.sort((a:any,b:any)=>sort==="ASC"?(a.price-b.price):(b.price-a.price))
    }

    if(byStock){
        filteredObj=filteredObj.filter((item:any)=>!item.inStock);
    }

    if(fastDelivery){
        filteredObj=filteredObj.filter((item:any)=>item.fastDelivery);
    }

    if(byRating){
        filteredObj=filteredObj.filter((item:any)=>item.ratings>=byRating);
    }

    if(searchTerm){
        filteredObj=filteredObj.filter((item:any)=>item.name.toLowerCase().includes(searchTerm));
    }

    return filteredObj;
}
*/
    return (
    
    <div className="dashboard">
        <Container className="parent-container">
        {(showsData || []).map((item:any)=>{
            return <div>
                <span className="genre-text">{item.genreName} (Total Records: {item.showsList.length})</span>
                <ShowList key={Math.random()} showsList={item.showsList}></ShowList>
                </div>
            })};
        </Container>
     
    </div>
    )
}

export default Dashboard;