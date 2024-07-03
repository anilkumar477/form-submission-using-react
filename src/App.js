
import './App.css';

import {useState,React} from 'react';

export default function App(){
  const[firstName,setFirstName] = useState('')
  const[lastName,setLasName] = useState('')
  const[email,setEmail] = useState('')
  const[contact,setContact] = useState('')
  const[gender,setGender] = useState('Male')
  const[subjects,setSubjects] = useState({
    English:true,
    Maths:true,
    Other:true})
  const[resume,setResume] = useState('')
  const[url,setUrl] = useState()
  const[selectedChoice,setSelectedChoice] = useState('')
  const [about,setAbout] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(firstName,
    lastName,
    email,
    contact,
    gender,
    subjects,
    resume,
    url,
    selectedChoice,
    about
  )}

  const handleSubjectChange = (sub) =>{
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub]
    }))
  }

  const handleReset = (e) =>{
    setFirstName('');
    setLasName('');
    setEmail('');
    setContact('');
    setGender('');
    setSubjects({English:true,Maths:false,Other:false});
    setResume('');
    setUrl('');
    setSelectedChoice('');
    setAbout('')
  }

  return(
    <div className='App'>
      <h1>Form in React</h1>
      <fieldset>
        <form action='#' method='get'>
          <label for ='firstname' style={{color:'black',fontFamily:'sans-serif',fontWeight:'bold'}}>First Name*</label>
          <div>
          <input type="text" 
          id='firstname' 
          name='firstname' 
          value={firstName} 
          onChange={(e) =>{
            setFirstName(e.target.value)
          }}
          placeholder='Enter first Name'
          required/>
          </div>
          <br></br>

          <label for ='lastname' style={{color:'black',fontFamily:'sans-serif',fontWeight:'bold'}}>Last Name*</label>
          <div>
          <input type="text" 
          id='lastname' 
          name='lastname' 
          value={lastName} 
          onChange={(e) =>{
            setLasName(e.target.value)
          }}
          placeholder='Enter Last Name'
          required/>
          </div>
          <br></br>


          <label for ='email' style={{color:'black',fontFamily:'sans-serif',fontWeight:'bold'}}>Enter Email*</label>
          <div>
          <input type="text" 
          id='email' 
          name='email' 
          value={email} 
          onChange={(e) =>{
            setEmail(e.target.value)
          }}
          placeholder='Enter Email'
          required/>
          </div>
          <br></br>

          <label for ='contact' style={{color:'black',fontFamily:'sans-serif',fontWeight:'bold'}}>Contact*</label>
          <div>
          <input type="text" 
          id='contact' 
          name='contact' 
          value={contact} 
          onChange={(e) =>{
            setContact(e.target.value)
          }}
          placeholder='Enter contact'
          required/>
          </div>

          <label for='gender'>Gender*</label>
          
            <input type='radio'
            id='male'
            value='male'
            name='gender'
            checked={gender === 'male'}
            onChange={(e)=>{
              setGender(e.target.value)
            }}
            />
            Male
          
        
            <input type='radio'
            id='female'
            value='female'
            name='gender'
            checked={gender === 'female'}
            onChange={(e)=>{
              setGender(e.target.value)
            }}
            />
            Female
      
        

          
            <input type='radio'
            id='other'
            value='other'
            name='gender'
            checked={gender === 'other'}
            onChange={(e)=>{
              setGender(e.target.value)
            }}
            />
            Other

            <div>
              <label for='lang'>Your best Subject</label>
              <input type='checkbox'
              name='lang'
              id='english'
              checked={subjects.English === true}
              onChange={(e)=>{
                handleSubjectChange('English')}}
              
              />English

              
              <input type='checkbox'
              name='lang'
              id='maths'
              checked={subjects.Maths === true}
              onChange={(e)=>{
                handleSubjectChange('Maths')}}
              
              />Maths

              
              <input type='checkbox'
              name='lang'
              id='physics'
              checked={subjects.Physics === true}
              onChange={(e)=>{
                handleSubjectChange('Physics')}}
              
              />Physics
            </div>

            <label for='file'>Upload Resume*</label>
            <div>
            <input type='file'
            id='file'
            name='file'
            onChange={(e) =>{
              setResume(e.target.files[0])
            }}
            />
            </div>

            <label>Enter URL*</label>
            <div>
              <input type='url'
              id='url'
              name='url'
              onChange={(e)=>{
                setUrl(e.target.value)

              }}
              placeholder='Enter URL'
              required
              />
            </div>

            <label>Select your Choice</label>
            <select 
            name='select'
            id='select'
            value={selectedChoice}
            onChange={(e) =>{
              setSelectedChoice(e.target.value)
            }}

            >
              <option 
              value=''
              selected={selectedChoice === ''}
              disabled
              >Select Your Ans


              </option>
              <optgroup label='Beginners'>
                <option value='1'>HTML</option>
                <option value='2'>CSS</option>
                <option value='3'>JavaScript</option>

              </optgroup>
              <optgroup label='Advanced'>
              <option value='4'>React</option>
                <option value='5'>Node JS</option>
                <option value='6'>Expess Js</option>
              </optgroup>
              <optgroup label='Expert'>
              <option value='7'>MongoDB</option>
              </optgroup>


            </select>
            <div>
            <label for='about'>About</label>
            <br></br>
            <textarea
            rows='12'
            cols='30'
            name='about'
            id='about'
            onChange={(e)=>{
              setAbout(e.target.value)
            }}
            placeholder='About Yourself'
            required
            >
             
            </textarea>
            </div>

            <div>
              <label>Submit OR Reset</label>
              <br></br>
              <button 
              type='reset'
              value='reset'
              onClick={()=>{
                handleReset()
              }}
              >
                Reset
              </button>

              <button
              type='submit'
              value='submit'
              onClick={(e)=>{
                handleSubmit(e)
              }}
              >
                Submit
              </button>
            </div>


          


        </form>
      </fieldset>
    </div>

  )
}