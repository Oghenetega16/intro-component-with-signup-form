import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const updateFormData = (newData) => setFormData((prev) => ({ ...prev, ...newData }))

    function validate() {
        const newErrors = {}

        if(!formData.fName.trim()) {
            newErrors.fName = "First Name cannot be empty"
        }

        if(!formData.lName.trim()) {
            newErrors.lName = "Last Name cannot be empty"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }

        if(!formData.password.trim()) {
            newErrors.password = "Password cannot be empty"
        }

        setErrors(newErrors);
        const isValid = Object.keys(newErrors).length === 0

        if(isValid) {
            setFormData({
                fName: '',
                lName: '',
                email: '',
                password: ''
            })
        }
        return isValid
    }

    return (
        <div className="md:w-1/2 lg:w-120">
            <p className="bg-purple py-4 px-15 text-center rounded-xl font-bold">Try it free 7 days <span className="font-normal">then $20/mo. thereafter</span></p>

            <form className="mt-6 bg-white text-dark-blue p-5 rounded-xl space-y-4">
                <div className="relative">
                    <input type="text"
                        name="firstName"
                        placeholder={errors.fName ? '' : 'First Name'} 
                        className={`p-4 border ${errors.fName ? 'border-2 border-red' : 'border-gray-200'} w-full rounded placeholder:font-bold focus:border-purple bg-white outline-0`}
                        value={formData.fName}
                        onChange={(event) => updateFormData({fName: event.target.value})}
                    />
                    {errors.fName && (<img src="./assets/images/icon-error.svg" alt="Error" className="absolute top-0 right-5 transform translate-y-2/3"/>)}
                </div>
                    {errors.fName && <p className="text-xs text-red italic text-right -mt-3">{errors.fName}</p>}

                <div className="relative">
                    <input type="text" 
                        name="lastName" 
                        placeholder={errors.lName ? '' : 'Last Name'} 
                        className={`p-4 border ${errors.lName ? 'border-2 border-red' : 'border-gray-200'} w-full rounded placeholder:font-bold focus:border-purple bg-white outline-0`}
                        value={formData.lName}
                        onChange={(event) => updateFormData({lName: event.target.value})}
                    />
                    {errors.lName && (<img src="./assets/images/icon-error.svg" alt="Error" className="absolute top-0 right-5 transform translate-y-2/3"/>)}
                </div>
                    {errors.lName && <p className="text-xs text-red italic text-right -mt-3">{errors.lName}</p>}
                
                <div className="relative">
                    <input type="email" 
                        name="email" 
                        placeholder={errors.email ? 'email@example/com' : 'Email Address'} 
                        className={`p-4 border ${errors.email ? 'border-2 border-red' : 'border-gray-200'} w-full rounded placeholder:font-bold ${errors.email && 'placeholder:text-red'} focus:border-purple bg-white outline-0`}
                        value={formData.email}
                        onChange={(event) => updateFormData({email: event.target.value})}
                    />
                    {errors.email && (<img src="./assets/images/icon-error.svg" alt="Error" className="absolute top-0 right-5 transform translate-y-2/3"/>)}
                </div>
                    {errors.email && <p className="text-xs text-red italic text-right -mt-3">{errors.email}</p>}
                
                <div className="relative">
                    <input type="password" 
                        name="password" 
                        placeholder={errors.password ? '' : 'Password'} 
                        className={`p-4 border ${errors.password ? 'border-2 border-red' : 'border-gray-200'} w-full rounded placeholder:font-bold focus:border-purple bg-white outline-0`}
                        value={formData.password}
                        onChange={(event) => updateFormData({password: event.target.value})}
                    />
                    {errors.password && (<img src="./assets/images/icon-error.svg" alt="Error" className="absolute top-0 right-5 transform translate-y-2/3"/>)}
                </div>
                    {errors.password && <p className="text-xs text-red italic text-right -mt-3">{errors.password}</p>}

                <button className="bg-green uppercase text-white py-4 w-full rounded active:bg-green/60 cursor-pointer" 
                    onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        validate()
                    }}>Claim Your Free Trial</button>
                
                <p className="text-xs text-grayish-blue text-center px-3">By clicking the button, you are agreeing to our <span className="text-red font-bold">Terms and Servces</span></p>
            </form>
        </div>
    )
}