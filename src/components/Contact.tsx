import { useState } from 'react';
import separatedLine from '../assets/about/separatorBlack.svg';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import { toast } from 'react-toastify';


type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const formInitialDetails = {
    name: '',
    email: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  // const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const onFormUpdate = (category: any, value: any) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const hanldeSubmitForm = async () => {
    try {
      let response = await fetch(import.meta.env.VITE_APP_CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json;charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      });
  
      let result = await response.json();
      setFormDetails(formInitialDetails);
  
      if(result.code === 200) toast("Message sent successfully :)");
    } catch (error) {
      toast("Message sent wrong :(")
    }
  };


  return (
    <div id='contact' className="gray_gradient block_link w-full text-center font-montserrat">
      <div className='max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center pt-16 py-8'>
        <div className="w-full flex flex-col items-center">
          <h1 className="w-[200px] uppercase font-bold text-lg  py-2 px-8 border-solid border-4 border-black">
            contact
          </h1>

          <p className="m-5 font-open_sans tracking-wide">
            My name is Tomasz Gajda, I’m a third year Applied Computer Science
            student at AGH University of Science and Technology in Cracow, Poland.{' '}
          </p>

          <img className="my-8" src={separatedLine} alt="separatedLine" />
        </div>

        <form
          onSubmit={handleSubmit(hanldeSubmitForm)}
          className="flex flex-col items-end w-full h-full mt-6"
        >
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-3 w-full">
              <input
                type="text"
                value={formDetails.name}
                {...register('name', {
                  required: 'This input is required',
                  maxLength: 99,
                })}
                placeholder={'ENTER YOUR NAME *'}
                onChange={e => onFormUpdate('name', e.target.value)}
                className="w-full focus:outline-none bg-transparent border-b-4 border-l-4 text-sm border-black placeholder:text-[#8B8B8B] placeholder:text-xs placeholder:font-bold text-black p-5"
              />
              {errors.name?.type === 'required' && (
                <p className="text-xs w-full text-left text-red-600" role="alert">
                  * This field is required
                </p>
              )}
              {errors.name?.type === 'maxLength' && (
                <p className="text-xs w-full text-left text-red-600" role="alert">
                  There should be less, than 99 symbols
                </p>
              )}

              <input
                type="email"
                value={formDetails.email}
                {...register('email', {
                  required: 'This input is required',
                  minLength: 7,
                })}
                placeholder={'ENTER YOUR EMAIL *'}
                onChange={e => onFormUpdate('email', e.target.value)}
                className="w-full focus:outline-none bg-transparent border-b-4 border-l-4 border-black text-sm placeholder:text-[#8B8B8B] placeholder:text-xs placeholder:font-bold text-black p-5"
              />
              {errors.email?.type === 'required' && (
                <p className="text-xs w-full text-left text-red-600" role="alert">
                  * This field is required
                </p>
              )}
              {errors.email?.type === 'minLength' && (
                <p className="text-xs w-full text-left text-red-600" role="alert">
                  There should be more, than 7 symbols
                </p>
              )}

              <textarea
                rows={3}
                value={formDetails.message}
                {...register('message', {
                  required: 'Please enter a message.',
                  minLength: 3,
                })}
                placeholder={'ENTER YOUR MESSAGE *'}
                onChange={e => onFormUpdate('message', e.target.value)}
                className="w-full focus:outline-none bg-transparent border-b-4 border-l-4 border-black text-sm resize-none placeholder:text-[#8B8B8B] placeholder:text-xs placeholder:font-bold text-black p-5 lg:h-[200px]"
              ></textarea>

              {errors.message?.type === 'required' && (
                <p className="text-xs w-full text-left text-red-600" role="alert">
                  * This field is required
                </p>
              )}
              {errors.message?.type === 'minLength' && (
                <p className="text-xs w-full text-left text-red-600" role="alert">
                  There should be more, than 3 symbols
                </p>
              )}
            </div>
            <button type="submit" className='btn-primary mt-5 after:bg-black after:-left-4 before:bg-black before:-right-4'>
              Submit
            </button>
          </div>
        </form>

      </div>
      
    </div>
  );
};

export default Contact;
