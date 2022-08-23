import { useForm } from 'react-hook-form';
import Alert from '@/components/alert';

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        {errors.name && <Alert msg={errors.name.message} color={"bg-red-500"} />}
        <input
          type="text"
          placeholder="Name *"
          className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
          {...register("name", { required: "Name is required." })}
        />

        <div className="lg:flex lg:space-x-3 space-y-5 lg:space-y-0">
          <div className="lg:w-1/2 space-y-5">
            {errors.email && <Alert msg={errors.email.message} color={"bg-red-500"} />}
            <input
              type="text"
              placeholder="Email *"
              className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
              {...register("email", {
                required: "Email address is required.",
                pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Enter a valid email." }
              })}
            />
          </div>

          <div className="lg:w-1/2 space-y-5">
            {errors.subject && <Alert msg={errors.subject.message} color={"bg-red-500"} />}
            <input
              type="text"
              placeholder="Subject *"
              className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
              {...register("subject", { required: "Subject is required." })}
            />
          </div>
        </div>

        {errors.msg && <Alert msg={errors.msg.message} color={"bg-red-500"} />}
        <textarea
          placeholder="Your message... *"
          className="bg-transparent px-3 py-2 w-full h-36 resize-none outline-none border border-white transition focus:border-green-500"
          {...register("msg", { required: "Message is required." })}
        ></textarea>

        <div className="text-center">
          <button type="submit" className="bg-green-500 hover:bg-green-600 rounded-full py-2 px-4">Send Message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;