import React,{ useState } from "react";
import './country.css'

function Country() {

const[country ,setCountry]= useState("")
const addCountry= () => {
window.location.reload(true)
        };
        localStorage.setItem("country",JSON.stringify(country));
console.log(country,"hi me");
  return (
    <div className="country">
      <h3>Choose a country</h3>
<div className="country_card">
<p onClick={() => setCountry("Afghanistan")}>Afghanistan</p>
<p onClick={() => addCountry(setCountry("Albania"))}>Albania</p>
<p onClick={() => addCountry(setCountry("Algeria"))}>Algeria</p>
<p onClick={() => addCountry(setCountry("Andorra"))}>Andorra</p>
<p onClick={() => addCountry(setCountry("Angola"))}>Angola</p>
<p onClick={() => addCountry(setCountry("Argentina"))}>Argentina</p>
<p onClick={() => addCountry(setCountry("Armenia"))}>Armenia</p>
<p onClick={() => addCountry(setCountry("Australia"))}>Australia</p>
<p onClick={() => addCountry(setCountry("Austria"))}>Austria</p>
<p onClick={() => addCountry(setCountry("Azerbaijan"))}>Azerbaijan</p>
<p onClick={() => addCountry(setCountry("Bahamas"))}>Bahamas</p>
<p onClick={() => addCountry(setCountry("Bahrain"))}>Bahrain</p>
<p onClick={() => addCountry(setCountry("Bangladesh"))}>Bangladesh</p>
<p onClick={() => addCountry(setCountry("Barbados"))}>Barbados</p>
<p onClick={() => addCountry(setCountry("Belarus"))}>Belarus</p>
<p onClick={() => addCountry(setCountry("Belgium"))}>Belgium</p>
<p onClick={() => addCountry(setCountry("Belize"))}>Belize</p>
<p onClick={() => addCountry(setCountry("Benin"))}>Benin</p>
<p onClick={() => addCountry(setCountry("Bhutan"))}>Bhutan</p>
<p onClick={() => addCountry(setCountry("Bolivia"))}>Bolivia</p>
<p onClick={() => addCountry(setCountry("Bosnia and Herzegovina"))}>Bosnia and Herzegovina</p>
<p onClick={() => addCountry(setCountry("Botswana"))}>Botswana</p>
<p onClick={() => addCountry(setCountry("Brazil"))}>Brazil</p>
<p onClick={() => addCountry(setCountry("Brunei"))}>Brunei</p>
<p onClick={() => addCountry(setCountry("Bulgaria"))}>Bulgaria</p>
<p onClick={() => addCountry(setCountry("Burkina Faso"))}>Burkina Faso</p>
<p onClick={() => addCountry(setCountry("Burundi"))}>Burundi</p>
<p onClick={() => addCountry(setCountry("Côte d'Ivoire"))}>Côte d'Ivoire</p>
<p onClick={() => addCountry(setCountry("Cabo Verde"))}>Cabo Verde</p>
<p onClick={() => addCountry(setCountry("Cambodia"))}>Cambodia</p>
<p onClick={() => addCountry(setCountry("Cameroon"))}>Cameroon</p>
<p onClick={() => addCountry(setCountry("Canada"))}>Canada</p>
<p onClick={() => addCountry(setCountry("Central African Republic"))}>	Central African Republic</p>
<p onClick={() => addCountry(setCountry("Chad"))}>Chad</p>
<p onClick={() => addCountry(setCountry("Chile"))}>Chile</p>
<p onClick={() => addCountry(setCountry("China"))}>China</p>
<p onClick={() => addCountry(setCountry("Colombia"))}>Colombia</p>
<p onClick={() => addCountry(setCountry("Comoros"))}>Comoros</p>
<p onClick={() => addCountry(setCountry("Congo"))}>Congo</p>
<p onClick={() => addCountry(setCountry("Costa Rica"))}>Costa Rica</p>
<p onClick={() => addCountry(setCountry("Croatia"))}>Croatia</p>
<p onClick={() => addCountry(setCountry("Cuba"))}>Cuba</p>
<p onClick={() => addCountry(setCountry("Cyprus"))}>Cyprus</p>
<p onClick={() => addCountry(setCountry("Czech Republic"))}>Czech Republic</p>
<p onClick={() => addCountry(setCountry("Denmark"))}>Denmark</p>
<p onClick={() => addCountry(setCountry("Djibouti"))}>Djibouti</p>
<p onClick={() => addCountry(setCountry("Dominica"))}>Dominica</p>
<p onClick={() => addCountry(setCountry("Dominican Republic"))}>Dominican Republic</p>
<p onClick={() => addCountry(setCountry("Ecuador"))}>Ecuador</p>
<p onClick={() => addCountry(setCountry("Egypt"))}>Egypt</p>
<p onClick={() => addCountry(setCountry("El Salvador"))}>El Salvador</p>
<p onClick={() => addCountry(setCountry("Equatorial Guinea"))}>Equatorial Guinea</p>
<p onClick={() => addCountry(setCountry("Eritrea"))}>Eritrea</p>
<p onClick={() => addCountry(setCountry("Estonia"))}>Estonia</p>
<p onClick={() => addCountry(setCountry("Eswatini"))}>Eswatini</p>
<p onClick={() => addCountry(setCountry("Ethiopia"))}>Ethiopia</p>
<p onClick={() => addCountry(setCountry("Fiji"))}>Fiji</p>
<p onClick={() => addCountry(setCountry("Finland "))}>Finland</p>
<p onClick={() => addCountry(setCountry("France"))}>France</p>
<p onClick={() => addCountry(setCountry("Gabon"))}>Gabon</p>
<p onClick={() => addCountry(setCountry("Gambia"))}>Gambia</p>
<p onClick={() => addCountry(setCountry("Georgia"))}>Georgia</p>
<p onClick={() => addCountry(setCountry("Germany"))}>Germany</p>
<p onClick={() => addCountry(setCountry("Ghana"))}>Ghana</p>
<p onClick={() => addCountry(setCountry("Greece"))}>Greece</p>
<p onClick={() => addCountry(setCountry("Grenada"))}>Grenada</p>
<p onClick={() => addCountry(setCountry("Guatemala"))}>Guatemala</p>
<p onClick={() => addCountry(setCountry("Guinea"))}>Guinea</p>
<p onClick={() => addCountry(setCountry("Guinea-Bissau"))}>Guinea-Bissau</p>
<p onClick={() => addCountry(setCountry("Guyana"))}>Guyana</p>
<p onClick={() => addCountry(setCountry("Haiti"))}>Haiti</p>
<p onClick={() => addCountry(setCountry("Holy See"))}>Holy See</p>
<p onClick={() => addCountry(setCountry("Honduras"))}>Honduras</p>
<p onClick={() => addCountry(setCountry("Hungary"))}>Hungary</p>
<p onClick={() => addCountry(setCountry("Iceland"))}>Iceland</p>
<p onClick={() => addCountry(setCountry("India"))}>India</p>
<p onClick={() => addCountry(setCountry("Indonesia"))}>Indonesia</p>
<p onClick={() => addCountry(setCountry("Iran"))}>Iran</p>
<p onClick={() => addCountry(setCountry("Iraq"))}>Iraq</p>
<p onClick={() => addCountry(setCountry("Ireland"))}>Ireland</p>
<p onClick={() => addCountry(setCountry("Israel"))}>Israel</p>
<p onClick={() => addCountry(setCountry("Italy"))}>Italy</p>
<p onClick={() => addCountry(setCountry("Jamaica"))}>Jamaica</p>
<p onClick={() => addCountry(setCountry("Japan"))}>Japan</p>
<p onClick={() => addCountry(setCountry("V"))}>Jordan</p>
<p onClick={() => addCountry(setCountry("Kazakhstan"))}>Kazakhstan</p>
<p onClick={() => addCountry(setCountry("Kenya"))}>Kenya</p>
<p onClick={() => addCountry(setCountry("Kiribati"))}>Kiribati</p>
<p onClick={() => addCountry(setCountry("Kuwait"))} >Kuwait</p>
<p onClick={() => addCountry(setCountry("Kuwait"))}>Kuwait</p>
<p  onClick={() => addCountry(setCountry("Kyrgyzstan"))}>Kyrgyzstan</p>
<p onClick={() => addCountry(setCountry("Laos"))}>Laos</p>
<p onClick={() => addCountry(setCountry("Latvia"))}>Latvia</p>
<p onClick={() => addCountry(setCountry("Lebanon"))}>Lebanon</p>
<p onClick={() => addCountry(setCountry("Lesotho"))}>Lesotho</p>
<p onClick={() => addCountry(setCountry("Liberia"))}>Liberia</p>
<p onClick={() => addCountry(setCountry("Libya"))}>Libya</p>
<p onClick={() => addCountry(setCountry("Liechtensntei"))}>Liechtensntei</p>
<p onClick={() => addCountry(setCountry("Lithuania"))}>Lithuania</p>
<p onClick={() => addCountry(setCountry("Luxembourg"))}>Luxembourg</p>
<p onClick={() => addCountry(setCountry("Madagascar"))}>Madagascar</p>
<p onClick={() => addCountry(setCountry("Malawi"))}>Malawi</p>
<p onClick={() => addCountry(setCountry("Malaysia"))}>Malaysia</p>
<p onClick={() => addCountry(setCountry("Maldives"))}>Maldives</p>
<p onClick={() => addCountry(setCountry("Mali"))} >Mali</p>
<p onClick={() => addCountry(setCountry("Malta"))}>Malta</p>
<p onClick={() => addCountry(setCountry("Marshall Islands"))}>Marshall Islands</p>
<p onClick={() => addCountry(setCountry("auritania"))} >Mauritania</p>
<p onClick={() => addCountry(setCountry("Mauritius"))}>Mauritius</p>
<p onClick={() => addCountry(setCountry("Mexico"))}>Mexico</p>
<p onClick={() => addCountry(setCountry("Micronesia"))}>Micronesia</p>
<p onClick={() => addCountry(setCountry("Moldova"))}>Moldova</p>
<p onClick={() => addCountry(setCountry("Mongolia"))}>Mongolia</p>
<p onClick={() => addCountry(setCountry("Montenegro"))}>Montenegro</p>
<p onClick={() => addCountry(setCountry("Morocco"))}>Morocco</p>
<p onClick={() => addCountry(setCountry("Mozambique"))}>Mozambique</p>
<p onClick={() => addCountry(setCountry("Myanmar"))}>Myanmar</p>
<p onClick={() => addCountry(setCountry("Namibia"))}>Namibia</p>
<p onClick={() => addCountry(setCountry("Nauru"))}>Nauru</p>
<p onClick={() => addCountry(setCountry("Nepal"))}>Nepal</p>
<p onClick={() => addCountry(setCountry("Netherlands"))}>Netherlands</p>
<p onClick={() => addCountry(setCountry("Zealan"))}>New Zealand</p>
<p onClick={() => addCountry(setCountry("Nicaragua"))}>Nicaragua</p>
<p onClick={() => addCountry(setCountry("Niger"))}>Niger</p>
<p onClick={() => addCountry(setCountry("Nigeria"))}>Nigeria</p>
<p onClick={() => addCountry(setCountry("North Korea"))}> North Korea</p>
<p onClick={() => addCountry(setCountry(""))}>North Macedonia</p>
<p onClick={() => addCountry(setCountry("Norway"))}>Norway</p>
<p onClick={() => addCountry(setCountry("Oman"))}>Oman</p>
<p onClick={() => addCountry(setCountry("Pakistan"))}>Pakistan</p>
<p onClick={() => addCountry(setCountry("Palau"))}>Palau</p>
<p onClick={() => addCountry(setCountry("Palestine State"))}>Palestine State</p>
<p onClick={() => addCountry(setCountry("Panama"))}>Panama</p>
<p onClick={() => addCountry(setCountry("Papua New Guinea"))}>Papua New Guinea</p>
<p onClick={() => addCountry(setCountry("Paraguay"))}>Paraguay</p>
<p onClick={() => addCountry(setCountry("Peru"))}>	Peru</p>
<p onClick={() => addCountry(setCountry("Philippine"))}>Philippines</p>
<p onClick={() => addCountry(setCountry("Portugal"))}>Portugal</p>
<p onClick={() => addCountry(setCountry("Qatar"))}>Qatar</p>
<p onClick={() => addCountry(setCountry("Romania"))}>Romania</p>
<p onClick={() => addCountry(setCountry("Russia"))}>Russia</p>
<p onClick={() => addCountry(setCountry("Rwanda"))}>Rwanda</p>
<p onClick={() => addCountry(setCountry("Saint Kitts and Nevis"))}>Saint Kitts and Nevis</p>
<p onClick={() => addCountry(setCountry("Saint Lucia"))}>	Saint Lucia</p>
<p onClick={() => addCountry(setCountry("Saint Vincent and the Grenadines"))}>	Saint Vincent and the Grenadines</p>
<p onClick={() => addCountry(setCountry("Samoa"))}>Samoa</p>
<p onClick={() => addCountry(setCountry("San Marino"))}>San Marino</p>
<p onClick={() => addCountry(setCountry("Sao Tome and Principe"))}>Sao Tome and Principe</p>
<p onClick={() => addCountry(setCountry("Saudi Arabia"))}>Saudi Arabia</p>
<p onClick={() => addCountry(setCountry("Senegal"))}>Senegal</p>
<p onClick={() => addCountry(setCountry("Serbia"))}>Serbia</p>
<p onClick={() => addCountry(setCountry("Seychelles"))}>Seychelles</p>
<p onClick={() => addCountry(setCountry("Sierra Leone"))}>Sierra Leone</p>
<p onClick={() => addCountry(setCountry("Singapore"))}>Singapore</p>
<p onClick={() => addCountry(setCountry("Slovakia"))}>Slovakia</p>
<p onClick={() => addCountry(setCountry("Slovenia"))}>Slovenia</p>
<p onClick={() => addCountry(setCountry("Solomon Islands"))}>Solomon Islands</p>
<p onClick={() => addCountry(setCountry("Somalia"))}>	Somalia</p>
<p onClick={() => addCountry(setCountry("South Africa"))}>South Africa</p>
<p onClick={() => addCountry(setCountry("South Korea"))}>South Korea</p>
<p onClick={() => addCountry(setCountry("South Sudan"))}>South Sudan</p>
<p onClick={() => addCountry(setCountry("Spain"))}>Spain</p>
<p onClick={() => addCountry(setCountry("Sri Lanka"))}>Sri Lanka</p>
<p onClick={() => addCountry(setCountry("Sudan"))}>Sudan</p>
<p onClick={() => addCountry(setCountry("Suriname"))}>Suriname</p>
<p onClick={() => addCountry(setCountry("Sweden"))}>Sweden</p>
<p onClick={() => addCountry(setCountry("Switzerland"))}>Switzerland</p>
<p onClick={() => addCountry(setCountry("Syria"))}>Syria</p>
<p onClick={() => addCountry(setCountry("Tajikistan"))}>Tajikistan</p>
<p onClick={() => addCountry(setCountry("Thailand"))}>	Thailand</p>
<p onClick={() => addCountry(setCountry("Timor-Leste"))}>Timor-Leste</p>
<p onClick={() => addCountry(setCountry("Togo"))}>Togo</p>
<p onClick={() => addCountry(setCountry("Tonga"))}>Tonga</p>
<p onClick={() => addCountry(setCountry("Timor-Leste"))}>Timor-Leste</p>
<p onClick={() => addCountry(setCountry("Tunisia"))}>	Tunisia</p>
<p onClick={() => addCountry(setCountry("Turkey"))}>Turkey</p>
<p onClick={() => addCountry(setCountry("Turkmenistan"))}>Turkmenistan</p>
<p onClick={() => addCountry(setCountry("Tuvalu"))}>Tuvalu</p>
<p onClick={() => addCountry(setCountry("Uganda"))}>Uganda</p>
<p onClick={() => addCountry(setCountry("Ukraine"))}>	Ukraine</p>
<p onClick={() => addCountry(setCountry("United Arab Emirates"))}>United Arab Emirates</p>
<p onClick={() => addCountry(setCountry("UK"))}>UK</p>
<p onClick={() => addCountry(setCountry("US"))}>USA</p>
<p onClick={() => addCountry(setCountry("Uruguay"))}>Uruguay</p>
<p onClick={() => addCountry(setCountry("Uzbekistan"))}>Uzbekistan</p>
<p onClick={() => addCountry(setCountry("Vanuatu"))}>Vanuatu</p>
<p onClick={() => addCountry(setCountry("Vietnam"))}>Vietnam</p>
<p onClick={() => addCountry(setCountry("Yemen"))}>Yemen</p>
<p onClick={() => addCountry(setCountry("Zambia"))}>Zambia</p>
<p onClick={() => addCountry(setCountry("Zimbabwe"))}>Zimbabwe</p>
</div>
</div>
  )
}

export default Country