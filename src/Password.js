import React from 'react'
import {useState} from 'react';

function Password() {

    const [lowercaseChecked, setLowercaseChecked]= useState(true);
    const [uppercaseChecked, setUppercaseChecked]= useState(true);
    const [numberChecked, setNumberChecked]= useState(true);
    const [specialChecked, setSpecialChecked]= useState(true);
    const [defaultPassword, setDefaultPassword]=useState(true)

    const [passwordLength, setPasswordLength]= useState(16);
    const [randomPassword, setRandomPassword]= useState('')

    var lowercaseChars= 'abcdefghijklmnopqrstuvwxyz'
    var uppercaseChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var numbersChars= '0123456789'
    var specialChars='!@#$%&*?'
    const [passwordChars, setPasswordChars]= useState(lowercaseChars+uppercaseChars+numbersChars+specialChars);

    const generatePassword=(length, chars)=> {
        var str = '';

        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setRandomPassword(str);
    }

    if(defaultPassword){
        generatePassword(passwordLength, passwordChars)
        setDefaultPassword(false)
    }

    const changePasswordLength =event => {
            if(event.target.value > 50){
                event.target.value = 50
            }
            if(event.target.value < 4){
                event.target.value = 4
            }

            setPasswordLength(event.target.value)
            generatePassword(event.target.value, passwordChars)
            }

        const handleChangeCheckbox = (event) => {
            if(event.target.id==='lowercase'){
                if (event.target.checked) {
                    setLowercaseChecked(true);
                    setPasswordChars(passwordChars+lowercaseChars)
                    generatePassword(passwordLength, passwordChars+lowercaseChars)
                  } else {
                    setLowercaseChecked(false);
                    setPasswordChars(passwordChars.replace(lowercaseChars, ''))
                    generatePassword(passwordLength, passwordChars.replace(lowercaseChars, ''))
                  }

            }
            else if(event.target.id==='uppercase') {
                if (event.target.checked) {
                    setUppercaseChecked(true);
                    setPasswordChars(passwordChars+uppercaseChars)
                    generatePassword(passwordLength, passwordChars+uppercaseChars)
                } else {
                   setUppercaseChecked(false);
                   setPasswordChars(passwordChars.replace(uppercaseChars, ''))
                   generatePassword(passwordLength, passwordChars.replace(uppercaseChars, ''))
                 }
            }
            else if(event.target.id==='number'){
                if (event.target.checked) {
                    setNumberChecked(true);
                    setPasswordChars(passwordChars+numbersChars)
                    generatePassword(passwordLength, passwordChars+numbersChars)
                } else {
                    setNumberChecked(false);
                    setPasswordChars(passwordChars.replace(numbersChars, ''))
                    generatePassword(passwordLength, passwordChars.replace(numbersChars, ''))
                }
            }
            else if(event.target.id==='special'){
                if (event.target.checked) {
                    setSpecialChecked(true);
                    setPasswordChars(passwordChars+specialChars)
                    generatePassword(passwordLength, passwordChars+specialChars)
                } else {
                    setSpecialChecked(false);
                    setPasswordChars(passwordChars.replace(specialChars, ''))
                    generatePassword(passwordLength, passwordChars.replace(specialChars, ''))
                }
            }
            }

            const checkDis =()=> {
                if(!uppercaseChecked && !numberChecked && !specialChecked && !lowercaseChecked){
                    setLowercaseChecked(true)
                    if (!passwordChars.includes(lowercaseChars)) {
                    setPasswordChars(passwordChars+lowercaseChars)
                    generatePassword(passwordLength, passwordChars+lowercaseChars)
                    }
                }
            }
        

  return (
    <div>
        <div className='password-div'>
            <p className='password-display'>{randomPassword}</p>
            <hr id='hr1'></hr>
            <div className='password-buttons-div'>
                    <button className='password-button' id='refresh-button' onClick={()=>generatePassword(passwordLength, passwordChars)}><img src={require('./img/refresh.png')} alt="REFRESH" width="30" height="30"></img></button>
                    <button className='password-button' id='copy-button' onClick={() => navigator.clipboard.writeText(String(randomPassword))}>COPY</button>
            </div>
        </div>
        <div className='options-div'>
            <h3 id='password-options'>Choose password options:</h3>
            <h4 id='password-length'>Length (4-50)</h4>
            <div className='slider-div'>
                <input type='range' className='slider' defaultValue='16' value={passwordLength} min='4' max='50' onInput={changePasswordLength}></input>
                <p class='slider-label'>{passwordLength}</p>
            </div>
            <div className='chars-checkbox-div'>
                <label><input type="checkbox" className='chars-checkbox' id="lowercase" checked={lowercaseChecked} onInput={checkDis} onChange={(e)=>handleChangeCheckbox(e)}></input> lowercase letters </label>
                <label><input type="checkbox" className='chars-checkbox' id="uppercase" checked={uppercaseChecked} onInput={checkDis} onChange={(e)=>handleChangeCheckbox(e)}></input> uppercase letters</label>
                <label><input type="checkbox" className='chars-checkbox' id="number" checked={numberChecked} onInput={checkDis} onChange={(e)=>handleChangeCheckbox(e)}></input> numbers </label>
                <label><input type="checkbox" className='chars-checkbox' id="special" checked={specialChecked} onInput={checkDis} onChange={(e)=>handleChangeCheckbox(e)}></input> special characters</label>
            </div>
            <div className='info-div'>
                <hr className='line-info'></hr>
                <h3 id='secure-info'>How to create a <b>secure</b> password?</h3>
                <ul id='secure-list'>
                    <li>Use at least 16 characters - the more, the better</li>
                    <li>Use a combination of symbol, numbers, lowercase and uppercase letters</li>
                    <li>Don't use any human readable words, names or dates</li>
                </ul>
                <hr className='line-info'></hr>
                <img className='end-img' src={require('./img/lock.png')} alt="locker-logo" width="500" height="500"></img>
            </div>
        </div>
    </div>
  )
}

export default Password