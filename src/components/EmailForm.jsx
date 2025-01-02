import { useState } from "react";
import { isValidEmail } from "../util/util";

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [isVaild, setIsVaild] = useState(false);
    const handleClick = () => {
        setIsVaild(false);
        const result = isValidEmail(email);
        if (result) {
            alert('이메일이 맞습니다.')
            setIsVaild(true);
        } else {
            alert('이메일이 틀렸씁니다.')
        }
    }
    
    return (
        <>
            <div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleClick}>
                    check
                </button>
            </div>
            {isVaild &&
            <div style={{color: 'green', fontWeight: 'bold'}}>
                Email is Vaild!
            </div>}
        </>
    )
}

export default EmailForm