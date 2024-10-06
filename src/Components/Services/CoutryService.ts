import axios from "axios";

class CoutryService{
    private static serverurl:string | undefined = process.env.REACT_APP_SERVER_URL;


    public static getAllCountry(){
        return axios.get(`${this.serverurl}/country`);
    }

    public static getByCountryName(searchRecord:any){
       
        return axios.get(`${this.serverurl}/country/searchByName/${searchRecord}`);
          
    }

    public static getByCountryRegion(searchRecord:any){
        
        return axios.get(`${this.serverurl}/country/searchByRegion/${searchRecord}`);
        
    }

    public static getByCountryDetails(searchRecord:any){
       
        return axios.get(`${this.serverurl}/country/countryDetails/${searchRecord}`);
          
    }

}

export default CoutryService;