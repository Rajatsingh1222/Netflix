export const Validate=(email,password)=>{
    const isEmailValid=/^\S+@\S+\.\S+$/.test(email);
    
    const isPWValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    .test(password);
    
    
    if(!isEmailValid) return "Email is not valid"
    if(!isPWValid) return "Password is not valid";
    return null;
    
    }