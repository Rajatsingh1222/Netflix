export const Validate=(email,password,name)=>{
    const isEmailValid=/^\S+@\S+\.\S+$/.test(email);
    
    const isPWValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    .test(password);
    
    
    if(!email) return "Email can't be Empty"
    if(!isEmailValid) return "Email is not valid"
     if(!password) return "Password can't be Empty"
    if(!isPWValid) return "Password is not valid.";
    if(!name) return "Name field can't be empty";
    return null;
    
    }