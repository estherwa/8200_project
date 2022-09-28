import {useMemo, useState} from "react";
import * as PropTypes from "prop-types";



import countries from "i18n-iso-countries";

import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import {MenuItem, Select} from "@mui/material";


const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool
};


export default function Form() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [ZipCode, setZipCode] = useState("");
    const [ setAddress ] = useState("");
    const [City, setCity] = useState("");
    const [LandLine, setLandLine] = useState("");
    const [Date, setDate] = useState("");
    const [Covid, setCovid] = useState(false);
    const [Allergies, setAllergies] = useState(false);
    const [OtherCondition, setOtherCondition] = useState(false);
    const [OtherConditionsText, setOtherConditionsText] = useState("");
    const [ CardioVascular, setCardioVascular] = useState(false);
    const [NumberPhone, setPhoneNumber] = useState("")
    const [Diabetes, setDiabetes] = useState(false);


    const [ Address, setSelectedCountry] = useState("");

    const selectCountryHandler = (value) => setSelectedCountry(value);

    // Have to register the languages you want to use
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);

    // Returns an object not a list
    const countryObj = countries.getNames("en", { select: "official" });

    const countryArr = Object.entries(countryObj).map(([key, value]) => {
        return {
            label: value,
            value: key
        };
    });


    return (
        <>


            <p style={{textAlign: "center"}}>
                <div className="container-fluid" >

                    <div className="main">
                        <div className="row">

                            <form onSubmit={event => {
                                event.preventDefault();
                                const data = {"FirstName": FirstName, "LastName": LastName,"Date": Date,
                                    "Address": Address,  "City": City ,"ZipCode": ZipCode,"LandLine": LandLine,
                                  "NumberPhone": NumberPhone,  "Covid":Covid,"Diabetes": Diabetes,
                                    "CardioVascular":CardioVascular,"Allergies": Allergies,
                                    "OtherCondition": OtherCondition

                                }
                                console.log(JSON.stringify(data))

                                fetch('http://127.0.0.1:8000/patient', {
                                    method: 'POST',
                                    body: JSON.stringify(data),

                                })
                                    .then((response) => {
                                        return response.json();
                                    })
                                    .then((response) => {
                                        console.log(response);
                                        alert(JSON.stringify(response));
                                    })
                                    .catch((error) => {
                                        console.error(error);
                                    });


                            }}>

                            <img src="../images/8200a.png" width="500px" className="img-fluid" alt="logo"/>
                            <br/><br/>
                                <h2> Welcome to the 8200 admission, Please fill out this page:</h2>
                                <p3>We wish luck to all our participants in all the hiring process</p3>

                                    <br/><br/>

                                    <input className="un form-control"  type="text" id="first_name"
                                            value={FirstName} onChange={(e)=>setFirstName(e.target.value)}
                                            maxLength={20}
                                           pattern="[A-Za-z]+"

                                           name="FirstName" placeholder="First Name" required/>

                                    <input className="un form-control"  type="text" id="lastname"
                                           value={LastName} onChange={(e)=>setLastName(e.target.value)}
                                           name="Lastname" placeholder="Last Name" pattern="[A-Za-z]+"  minLength={3} maxLength={10} required/>

                                    <input className="un form-control" type="number" step="any"
                                           pattern="[0-9]+"

                                           value={ZipCode} onChange={(e)=>setZipCode(e.target.value)}

                                           minLength={5}
                                           name="ZipCode" placeholder="Zip Code" />

                                     <input className="un form-control" type="text" step="any"
                                             name= "NumberPhone" id="NumberPhone"
                                            pattern="[0-9]+"
                                            value={NumberPhone} onChange={(e)=>setPhoneNumber(e.target.value)}

                                            placeholder="Number phone" required/>

                                <h5>Country:</h5>

                                <div>

                                    <Select

                                       onChange={(e)=>setAddress(e.target.value)}
                                        style={{ width: "10", height:"10" }}
                                        placeholder="Country"
                                       value={Address}
                                       className={"un form-control"}

                                        onChange={(e) => selectCountryHandler(e.target.value)}
                                    >
                                        {!!countryArr ?.length &&
                                            countryArr.map(({ label, value }) => (
                                                <MenuItem key={value} value={value}>
                                                    {label}

                                                </MenuItem>
                                            ))}
                                    </Select>
                                </div>




                                    <input  className={"un form-control"} type="text"
                                            value={City} onChange={(e)=>setCity(e.target.value)}
                                            pattern="[A-Za-z]+"

                                            id="City" name="City"  placeholder="City" required/>

                                    <input className="un form-control" type="number"
                                           id="LandLine"
                                           value={LandLine} onChange={(e)=>setLandLine(e.target.value)}

                                           pattern="[0-9]+"
                                           name="LandLine" placeholder="Land line" required/>



                                    <input className="un form-control" type="date" id="Date" name="Date"

                                           value={Date} onChange={(e)=>setDate(e.target.value)}

                                            required/>

                            <br/><br/>
                            <div>
                                <Checkbox
                                    name= "Covid"

                                    value={Covid} onChange={(e)=>setCovid(e.target.checked)}

                                    label="Have you been infected by COVID-19 in the past?"

                                /><br/><br/>
                            <h5>Health conditions:</h5>
                                <Checkbox

                                    value={Diabetes} onChange={(e)=>setDiabetes(e.target.checked)}


                                    label="Diabetes"
                                    name="Diabetes"

                                /> <br/><br/>
                                <Checkbox

                                    value={CardioVascular} onChange={(e)=>setCardioVascular(e.target.checked)}

                                    label="Cardio-Vascular problems"
                                    name="CardioVascular"

                                /> <br/><br/>

                                <Checkbox

                                    value={Allergies} onChange={(e)=>setAllergies(e.target.checked)}

                                    label="Allergies"
                                    name="Allergies"

                                /> <br/><br/>
                                <Checkbox

                                    value={OtherCondition} onChange={(e)=>setOtherCondition(e.target.checked)}

                                    label="Other conditions"
                                    name="OtherConditions"

                                /> <br/><br/>

                            </div>

                            <input className="un form-control" type="text" id="check_box" name="Other conditions"
                                   placeholder="Other conditions" value={OtherConditionsText} onChange={(e)=>setOtherConditionsText(e.target.value)}
                                    disabled={!OtherCondition}
                            />


                                     <button style={{textAlign: "center"}}  type="submit" className="btn btn-primary">Submit</button>


                        </form>

                        </div>






                    </div>  </div></p>

        </>
    )
}

