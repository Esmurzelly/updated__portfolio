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

      if (result.code === 200) toast("Message sent successfully :)");
    } catch (error) {
      toast("Message sent wrong :(")
    }
  };

  return (
    <div id='contact' className="block_link w-full text-center font-montserrat gray_gradient">
      <div className='max-w-screen-2xl mx-auto px-5 flex flex-col items-center justify-center pt-16 py-8'>
        <div className="w-full flex flex-col items-center">
          <h1 className="w-[200px] font-bold text-lg uppercase border-solid border-4 border-black py-2 px-8">
            contact
          </h1>

          <p className="m-5 tracking-wide font-open_sans">
            Here you can write a message to me. I'm open to new requests and ideas, even crazy ones :) 
          </p>

          <img className="my-8" src={separatedLine} alt="separatedLine" />
        </div>

        <form
          onSubmit={handleSubmit(hanldeSubmitForm)}
          className="w-full flex flex-col items-end h-full mt-6"
        >
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex flex-col gap-3">
              <input
                type="text"
                value={formDetails.name}
                {...register('name', {
                  required: 'This input is required',
                  maxLength: 99,
                })}
                placeholder={'ENTER YOUR NAME *'}
                onChange={e => onFormUpdate('name', e.target.value)}
                className="w-full p-5 text-sm placeholder:text-placeholder_layout placeholder:text-xs placeholder:font-bold text-black bg-transparent border-b-4 border-l-4 border-black focus:outline-none"
              />
              {errors.name?.type === 'required' && (
                <p className="w-full text-xs text-left text-red-600" role="alert">
                  * This field is required
                </p>
              )}
              {errors.name?.type === 'maxLength' && (
                <p className="w-full text-xs text-left text-red-600" role="alert">
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
                className="w-full p-5 text-sm placeholder:text-placeholder_layout placeholder:text-xs placeholder:font-bold text-black bg-transparent border-b-4 border-l-4 border-black focus:outline-none"
              />
              {errors.email?.type === 'required' && (
                <p className="w-full text-xs text-left text-red-600" role="alert">
                  * This field is required
                </p>
              )}
              {errors.email?.type === 'minLength' && (
                <p className="w-full text-xs text-left text-red-600" role="alert">
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
                className="w-full p-5 text-sm placeholder:text-placeholder_layout placeholder:text-xs placeholder:font-bold text-black bg-transparent border-b-4 border-l-4 border-black resize-none focus:outline-none lg:h-[200px]"
              ></textarea>

              {errors.message?.type === 'required' && (
                <p className="w-full text-xs text-left text-red-600" role="alert">
                  * This field is required
                </p>
              )}
              {errors.message?.type === 'minLength' && (
                <p className="w-full text-xs text-left text-red-600" role="alert">
                  There should be more, than 3 symbols
                </p>
              )}
            </div>
            <button 
              type="submit" 
              className='btn-primary w-[170px] mt-5 after:bg-black after:left-0 before:bg-black before:right-0'>
                Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
