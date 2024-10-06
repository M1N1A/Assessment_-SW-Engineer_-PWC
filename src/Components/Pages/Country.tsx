import React, { useEffect, useState } from 'react'
import CoutryService from "../Services/CoutryService";
import { CountryView } from '../Models/CountryView';
import Navabar from './Navabar';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Search from './Search';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from './NotFound';


interface IProps {
}
const Country: React.FC<IProps> = ({}) => {

    const navigate = useNavigate();

    let [searchName, setSearchName] = useState<any>("");

    let [found, setFound] = useState('200');

    let [apiUrl, setAPIUrl]=useState('all');

    let searchData = (data:any)=>{
        if(data== ''){
            setAPIUrl('all');
            setSearchName('');
        }else{
            setSearchName(data);
            setAPIUrl('search');
        }
        
    }

    let [searcCategory, setSearchCategory] = useState('name');

    let searchCate = (cate:any)=>{
        setSearchCategory(cate); 
    }

    // let [countryData , setCountryData] = useState(Array.from({ length: 20 }));

    let [countryData , setCountryData] = useState([]);

    useEffect(()=>{
        let result: any=[];
        if(apiUrl =="search"){
            if(searcCategory == "name"){
                result = CoutryService.getByCountryName(searchName);
            }else if(searcCategory == "region"){
                result = CoutryService.getByCountryRegion(searchName);
            }
        }else if(apiUrl == 'all'){
            result = CoutryService.getAllCountry();
        }

        result.then(((response: { data: { user: React.SetStateAction<never[]>; }; })=>{
            let finalResults:any = [];
            finalResults = response.data.user;
            
            if (finalResults.hasOwnProperty('status')) {
                setFound(finalResults.status)
              }else{
                setFound('200');
              }
            setCountryData(response.data.user);
        })).catch(((error: any)=>{
            console.log(error);
        }))


    },[apiUrl && searchName])

    const detailsPage = (name:any) =>{
        navigate('/country/details/'+name);
    }
    

    // const {user} = countryData;

    // let fetchMoreData = () =>{
    //     setTimeout(() => {
    //         setCountryData((prevState) => prevState.concat(Array.from({ length: 20 })));
    //       }, 1500);
    // }


    return (
        <>
        <Navabar/>
        <div className='container'>
            <h3><center>Country's List</center></h3>
            <div className='mb-4' style={{marginLeft:"70%"}}>
            <Search searchD={searchData} searchCat={searchCate}/>
            </div>
            {/* Lazy Loading */}
            
            {/* <InfiniteScroll
                dataLength={countryData.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                {
                countryData.length > 0 &&
                countryData.map((data:any) => (
                <div>
                    div - #{data.name.common}
                </div>
                ))}
                {/* <pre>{JSON.stringify(countryData)}</pre> */}
            {/* </InfiniteScroll> */} 
        
            <div className='row'>
                {
                    countryData.length == 0 && 
                    <Loading/>
                }
                {
                    found == "404" && 
                    <NotFound/>
                }
                {
                    countryData.length > 0 && 
                    countryData.map((count:any)=>{
                        return(
                                <div className='col-md-3'>
                                    <div className="card mb-3 mt-4" style={{width: "18rem;"}}>
                                    <img src={count.flags.png} className="card-img-top" alt="No Image" width={305} height={200}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{count.name.common}</h5>
                                        <div>
                                            <span className='font-[500] dark:text-white'>Population:</span>
                                            <span className='dark:text-white'> {count.population} </span>
                                        </div>
                                        <div>
                                            <span className='font-[500] dark:text-white'>Region:</span>
                                            <span className='dark:text-white'>  {count.region} </span>
                                        </div>
                                        <div>
                                            <span className='font-[500] dark:text-white'>Capital:</span>
                                            <span className='dark:text-white'> {count.capital} </span>
                                        </div>
                                        <a onClick={()=>detailsPage(count.cca2)} className="mt-3 btn btn-primary">Get More Details</a>
                                    </div>
                                    </div>
                                </div>
                        )
                    })   
                }
            </div>
        </div>
        </>
    )
}

export default Country