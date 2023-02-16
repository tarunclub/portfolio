import {
  BeakerIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';

function ContactMe() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:tarunkm__@outlook.com?subject=${data.subject}&body=${data.message}`;
  };
  return (
    <div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-7xl justify-evenly items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg md:text-xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-3 pt-24">
        <h4 className="text-4xl font-semibold text-center">Let's Talk</h4>

        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="md:text-lg">+919871726301</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="md:text-lg">New Delhi, India</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="md:text-lg">tarunkm__@outlook.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-100 py-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
