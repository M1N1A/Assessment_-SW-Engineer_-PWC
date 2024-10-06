import React, { useEffect, useState } from 'react'
import CoutryService from "../Services/CoutryService";
import Navabar from './Navabar';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { format } from 'date-fns-tz';
import { formatInTimeZone } from 'date-fns-tz'


interface IProps {
}
const CountryDetails: React.FC<IProps> = ({}) => {


    const { name } = useParams();

    let [found, setFound] = useState('200');

    let [countryData , setCountryData] = useState([]);

    useEffect(()=>{
        let result: any=[];
        CoutryService.getByCountryDetails(name).then(((response: { data: { user: React.SetStateAction<never[]>; }; })=>{
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


    },[])

    // let {timezones} = countryData[0];

    const [currentTime, setCurrentTime] = useState<any>();

    let timezones = '';
    let timeObject = '';

    countryData.map((dd:any)=>{
        timezones = dd.timezones
    })

    const updateTime = () => {
        const now = new Date();
        

        const utcDate:any = formatInTimeZone(now, timezones,'yyyy-MM-dd hh:mm:ss a');
          const formattedTime = format(utcDate, 'yyyy-MM-dd hh:mm:ss a', {
            timeZone: timezones,
          });
          timeObject = formattedTime;
    
        setCurrentTime(timeObject);
    };

    useEffect(() => {
        updateTime(); // Initial call to set the time
        const interval = setInterval(updateTime, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);


    return (
        <>
        <Navabar/>
        <div className='container'>
            <h3 className='mt-3'><center>Country {name} Details</center></h3>
            <div className='mb-4' style={{marginLeft:"70%"}}>
            </div>
        
            <div className='row'>
                {
                    countryData.length == 0 && 
                    <Loading/>
                }
                {
                    found == "404" && 
                    <NotFound/>
                }
                {/* <p>{JSON.stringify(countryData)}</p> */}
                {
                    countryData.length > 0 && 
                    countryData.map((count:any,index)=>{
                        return(
                                <div className='col-md-8' key={index}>
                                    <div className="card mb-3 mt-4" style={{width: "18rem;"}}>
                                    <img src={count.flags.png} className="card-img-top" alt="No Image" width={305} height={250}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{count.name.common}</h5>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Population:</span></strong>
                                                        <span className='dark:text-white'> {count.population} </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Region:</span></strong>
                                                        <span className='dark:text-white'>  {count.region} </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Capital:</span></strong>
                                                        <span className='dark:text-white'> {count.capital} </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Languages: </span></strong>
                                                        <span className='dark:text-white'>
                                                            <ul>
                                                            {Object.entries(count.languages).map(([key, val]) => (
                                                                    <li>{key} : {count.languages[key]}</li> 
                                                                
                                                                ))}
                                                                </ul>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Area: </span></strong>
                                                        <span className='dark:text-white'> {count.area} </span>
                                                    </div>

                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Map: </span></strong>
                                                        <span className='dark:text-white'> <a href={count.maps.googleMaps} target="_blank">{count.maps.googleMaps}</a> </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Continents: </span></strong>
                                                        <span className='dark:text-white'> {count.continents} </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                    <strong><span className='font-[500] dark:text-white'>Time: </span></strong>
                                                        <span className='dark:text-white'> {currentTime} </span>
                                                    </div>
                                                </div>
                                            </div>
                                        <a href="/country/" className="mt-3 btn btn-primary">Back</a>
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

export default CountryDetails