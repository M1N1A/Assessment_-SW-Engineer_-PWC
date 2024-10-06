import express, {Request, response, Response, Router } from "express";
import { body, validationResult } from "express-validator";
// import fetch from 'node-fetch';

const CountryRouter:Router = express.Router(); 

/*
    @usage : Get a all Country Details
    @path : http://127.0.0.1:9898/api/country
    @method : GET
    @access : PUBLIC
    @fields : 
 */
    CountryRouter.get("/", async (request:Request, response:Response)=>{
        try{
            
            let user =  await fetch('https://restcountries.com/v3.1/all');
            user = await user.json();

            if(user){
                
                return response.status(200).json({
                    user:user
                })
            }
            
        }
        catch(error){
            response.status(500);
            response.json({
                error:error
            })
        }
        
    })


    /*
    @usage : Get a all Country details with Contry Name 
    @path : http://127.0.0.1:9898/api/country/search
    @method : GET
    @access : PUBLIC
    @fields : name;
 */
    CountryRouter.get("/searchByName/:record", async (request:Request, response:Response)=>{
        try{
            let {record} = request.params;
            let user =  await fetch('https://restcountries.com/v3.1/name/'+record);
            user = await user.json();

            if(user){
                
                return response.status(200).json({
                    user:user
                })
            }
            
        }
        catch(error){
            response.status(500);
            response.json({
                error:error
            })
        }
        
    })


    /*
    @usage : Get a all Country details with Contry Region 
    @path : http://127.0.0.1:9898/api/country/searchByRegion
    @method : GET
    @access : PUBLIC
    @fields : name;
 */
    CountryRouter.get("/searchByRegion/:record", async (request:Request, response:Response)=>{
        try{
            let {record} = request.params;
            let user =  await fetch('https://restcountries.com/v3.1/region/'+record);
            user = await user.json();

            if(user){
                
                return response.status(200).json({
                    user:user
                })
            }
            
        }
        catch(error){
            response.status(500);
            response.json({
                error:error
            })
        }
        
    })


    /*
    @usage : Get a Country details with single country 
    @path : http://127.0.0.1:9898/api/country/countryDetails
    @method : GET
    @access : PUBLIC
    @fields : name;
 */
    CountryRouter.get("/countryDetails/:record", async (request:Request, response:Response)=>{
        try{
            let {record} = request.params;
            let user =  await fetch('https://restcountries.com/v3.1/alpha/'+record);
            user = await user.json();

            if(user){
                
                return response.status(200).json({
                    user:user
                })
            }
            
        }
        catch(error){
            response.status(500);
            response.json({
                error:error
            })
        }
        
    })

export default CountryRouter;