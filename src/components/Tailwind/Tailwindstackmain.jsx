import React,{ useState } from "react";
import SelectYourDomain from './TailwindstackSelectYourDomain'

const Tailwindstackmain = (props) => {
    const [selected, setSelected] = useState("Select Your Domain")

    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        whatsAppno: ''
        //checkbox:''
    })

    const [validations, setValidations] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        whatsAppno: ''
        //checkbox:''
      })
    const { firstName, lastName, email,  phoneNo,whatsAppno} = values

    const validateAll = () => {
        //const { firstName, lastName, email,  phoneNo,whatsAppno} = values
        const validations ={firstName:'', lastName:'', email:'',  phoneNo:'',whatsAppno:''}

    
    let isValid = true
    if (!lastName) {
        //validations.firstName = 'First Name is required'
        alert('First Name is required' + validations.lastName);
        isValid = false
      }
      if (firstName && firstName.length < 3 || firstName.length > 50) {
        //validations.firstName = 'First Name must contain between 3 and 50 characters'
        alert('Name must contain between 3 and 50 characters: ' + validations.firstName);
        isValid = false
      }

      

      if (!lastName) {
        //validations.firstName = 'First Name is required'
        alert('last Name is required' + validations.lastName);
        isValid = false
      }
      if (lastName && lastName.length < 3 || lastName.length > 50) {
        //validations.firstName = 'First Name must contain between 3 and 50 characters'
        alert('Name must contain between 3 and 50 characters: ' + validations.lastName);
        isValid = false
      }

      //email valdiation

    if (email && !/\S+@\S+\.\S+/.test(email)) {
       // validations.email = 'Email format must be as example@mail.com'
       alert('Email format must be as example@gmail.com: ' + validations.email);
        isValid = false
      }

      //phone validation 
          
      const phoneRegex = /^[0-9]{10}$/;
      if (phoneNo && !phoneRegex.test(phoneNo)) {
       // validations.mobileno = 'Please enter a valid phone number'
       alert('Please enter a valid phone number ' + validations.phoneNo);
        isValid = false
    }

    //whatsAppno
    const whatsappRegex = /^[0-9]{10}$/;
      if (whatsAppno && !whatsappRegex.test(whatsAppno)) {
       // validations.mobileno = 'Please enter a valid phone number'
       alert('Please enter a valid Whatsapp number ' + validations.whatsAppno);
        isValid = false
    }


      if (!isValid) {
        setValidations(validations)
      }
      
      return isValid
      
    }

    const validateOne = (e) => {
        const { name } = e.target
        const value = values[name]
        let message = ''

        if (!value) {
           // message = `${name} is required`
            alert(`${name}  is required`  + message
            );
          }
          
          if (value && name === 'firstName' && (value.length < 3 || value.length > 50)) {
            //message = 'Name must contain between 3 and 50 characters'
            alert(' First Name must contain between 3 and 50 characters: ' + message);
          }
          
          if (value && name === 'lastName' && (value.length < 3 || value.length > 50)) {
            //message = 'Name must contain between 3 and 50 characters'
            alert('Last Name must contain between 3 and 50 characters: ' + message);
          }

          //Email validation
          if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            //message = 'Email format must be as example@mail.com'
            alert('Email format must be as example@gmail.com ' + message);
          }
          //phone number validation
          const phoneRegex = /^[0-9]{10}$/;
          if (value && name === ' phoneNo' && !phoneRegex.test(value)){
            //message = 'Please enter a valid phone number '
            alert('Please enter a valid phone number ' + message);
          }
          
          //whatsAppno

          const whatsappRegex = /^[0-9]{10}$/;
          if (value && name === ' whatsAppno' && !whatsappRegex.test(value)){
            //message = 'Please enter a valid phone number '
            alert('Please enter a valid WhatsApp phone number ' + message);
          }

          
         

          setValidations({...validations, [name]: message })
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        //setState({...state,[name]:value});
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateAll()
    
        if (!isValid) {
          return false
        }

        alert(JSON.stringify(values))
    }

    // const { 
    //     firstName: firstNameVal, 
    //     lastName: lastNameVal, 
    //      email: emailVal ,
    //     // address:addressVal
    
    //   } = validations
      
      const textInput = React.useRef();
  return (
<div className=" ">
<div className="flex flex-col md:flex-col lg:flex-row lg:justify-between items-center px-8 md:px-16 lg:space-x-16 ">
    <div className="flex flex-col  ">
        <h2 className="text-black dark:text-white text-[20px] md:text-[31px] not-italic font-medium leading-[normal] capitalize py-2">Become A Job Ready</h2>
        <h2 className="devtext text-[20px] md:text-[40px] from-[#EF32D9] to-[#EF32D9] not-italic font-bold leading-[normal]  capitalize py-2">Tailwind Stack Developer</h2>
        <img src="/img/Education1.png" className="md:flex hidden" alt=""/>
    </div>
    <div className='border rounded-[18px] bg-[#afafaf1a] flex flex-col md:justify-start md:items-start justify-center items-center backdrop-opacity-0.5 '>
                        <div className='py-1'>
                            <h1 className='text-left p-5 font-inter text-[16px] md:text-[22px] not-italic font-semibold leading-normal capitalize'>Book A <span className='LiveClass'>Live Class,</span> For <span className='Free'>Free!!</span> </h1>
                        </div>
                        <form action="" onSubmit={handleSubmit} >


                            <div className='flex md:flex-row flex-col  items-center md:space-x-10 md:px-6'>

                                <div class="relative ">
                                
                                    <input 
                                     id="firstName" 
                                     name="firstName" 
                                     type="text" 
                                     value={firstName}
                                     onChange={handleInputChange}
                                     tabIndex={1}
                                     onBlur={validateOne}
                                    className=" peer block w-max  md:w-[17rem]  border-b dark:border-white border-black bg-transparent  px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0" placeholder="" />
                                    <label for="firstName" className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform  text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">First Name</label>
                                    {/* <div className="text-[10px] text-[#FF0000]">{firstNameVal}</div> */}
                                    
                                   
                                </div>

                                <div class="relative">
                                    <input 
                                    id="LastName" 
                                    name="lastName" 
                                    type="text" 
                                    value={lastName}
                                    onChange={handleInputChange}
                                    tabIndex={2}
                                    onBlur={validateOne}
                                    className=" peer block w-max md:w-[17rem]  border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0" placeholder="" />
                                    <label for="LastName" className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 ">Last Name</label>
                                </div>

                            </div>
                            <div className='flex md:flex-row flex-col  items-center md:space-x-10 md:py-5 md:px-6'>

                                <div class="relative">
                                    <input 
                                    id="email" 
                                    name="email" 
                                    type="text"
                                    value={email}
                                    onChange={handleInputChange}
                                    tabIndex={3}
                                    onBlur={validateOne} 
                                    className="peer block w-max md:w-[17rem]  border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0" placeholder="" />
                                    <label for="email" className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 ">Email</label>
                                </div>

                                <div class="relative">
                                    <input 
                                    id="PhoneNo" 
                                     name="phoneNo" 
                                     type="number" 
                                     value={phoneNo}
                                    onChange={handleInputChange} 
                                    tabIndex={4}
                                    onBlur={validateOne}
                                     className="peer block w-max md:w-[17rem]  border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0" placeholder="" />
                                    <label for="PhoneNo" className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75">Phone No. (+91,+44.....)</label>
                                </div>
                            </div>

                            <div className='flex md:flex-row flex-col  items-center md:space-x-10 md:py-5 md:px-6'>
                                <div class="relative">
                                    <input 
                                    id="WhatsAppno" 
                                    name="whatsAppno" 
                                    type="number" 
                                    value={whatsAppno}
                                    onChange={handleInputChange} 
                                    tabIndex={5}
                                    className="peer block w-max md:w-[17rem]  border-b dark:border-white border-black bg-transparent px-2.5 pb-2.5 pt-5 text-sm focus:border-black dark:focus:border-white focus:outline-none focus:ring-0" placeholder="" />
                                    <label for="WhatsAppno" className="absolute left-0 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 ">WhatsApp No. (+91,+44.....)</label>
                                </div>

                                <div class="relative md:py-0 py-4 ">
                                    <SelectYourDomain selected={selected} setSelected={setSelected} />
                                </div>

                            </div>

                            <div className='flex md:flex-row flex-col  items-center md:space-x-10 py-2 md:py-5 md:px-6'>
                                <div className='Button-Book'>
                                    <button type='submit' className='p-2 pt-2 px-14 md:px-[105px] text-[#FFF] text-[18px] semibold not-italic leading-normal capitalize' >Book A Seat</button>


                                </div>
                                <div className='flex py-4 md:py-0'>
                                    <div className='pr-3'>
                                        <img src="/img/aca5.png" alt="usericon" className='md:w-8 md:h-6 w-6 h-5' />
                                    </div>
                                    <div className=" ">
                                        <h5 className='only text-[16px] md:text-[18px] not-italic  font-semibold leading-normal capitalize'>Only <span className='text35'>35</span> Seats Available</h5>
                                    </div>

                                </div>
                            </div>

                            <div className='flex  max-sm:justify-center max-sm:items-center py-1 lg:px-6'>

                                <h5 className='text-[#000] dark:text-white lg:pl-0 pl-0 md:pl-5 text-[18px] not-italic font-medium leading-normal capitalize'>Already Have a Account ?</h5>
                                <p className=' longin dark:text-white  cursor-pointer pl-2 text-[18px] not-italic font-medium leading-normal capitalize underline '>Log In</p>

                            </div>


                            <div className="flex flex-row max-sm:py-2 md:items-center  mb-4 md:py-5 px-5 md:px-6">

                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    name="checkbox" 
                                    // onChange={(e) => getServices(e)}
                                    value="checkbox"
                                    //value={data.services
                                    className="cursor-pointer   accent-[#F05225]   w-4 h-4  " style={{ color: "bg-gradient-to-r from-[#F05225]  to-[#EEA820] text-transparent   bg-clip-text" }}
                                />

                                <label
                                    for="default-checkbox"
                                    className="pl-2    md:pl-2 max-sm:pb-2 text-[#000] dark:text-white text-[16px] not-italic font-normal capitalize leading-normal "
                                >
                                    I have read and agree to Pruthatek’s <span className='Terms  underline'>Terms </span> and <span className='Privacy underline'> Privacy Policy. </span>{" "}
                                </label>

                            </div>




                        </form>
                    </div>
                        </div> 

</div>
    );
};

export default Tailwindstackmain;

