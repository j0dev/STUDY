import React, { useState, useRef } from 'react'

function InputSample() {
    
    const [inputs, setInputs] = useState({
        name: '',
        nick: '',
    });

    const nameInput = useRef();
    const nickInput = useRef();

    const { name, nick } = inputs;

    const onChange  = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            //객체를 업데이트 할때는 스프레드 문법을 써서 객체를 복사한 후, 업데이트 해줘야함.
            [name]: value,
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nick: '',
        })
        nickInput.current.focus();
    }

    return (
        <div>
            <input
                name="name"
                onChange={onChange}
                placeholder='이름'
                value = {name}
                ref={nameInput}
            />
            <input
                name="nick"
                onChange={onChange}
                placeholder='닉네임'
                value = {nick}
                ref={nickInput}
                
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nick})
            </div>
        </div>
    )
}

export default InputSample;