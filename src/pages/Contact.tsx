import  emailjs  from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get('from_name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      toast.error('Please fill in all fields');
      return;
    }

    emailjs
      .sendForm('service_5ypozmm', 'template_20asp6e', form.current, {
        publicKey: 'J8gpF6s3h7gkd-cJi',
      })
      .then(
        () => {
          toast.success('Message sent successfully');
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          toast.error('Failed...', error.text);
        },
      );
  }

  return (
    <div className="h-svh flex flex-col justify-center items-center overflow-hidden">
      <div className="text-font border-2 border-secondary p-5 rounded-lg w-[90%] md:w-[60%]">
        <h2 className="font-sembld">GET IN TOUCH</h2>
        <div >
          <form ref={form} action="" className="flex flex-col gap-3 font-nrml mt-8" onSubmit={handlesubmit}>
            <input type="text" name="from_name" className="h-3vh px-3 py-2 border-2 border-secondary outline-none placeholder:text-font bg-card  rounded-l-xl rounded-r-xl" placeholder="Name" id="" />
            <input type="email" name="email" className="h-3vh px-3 py-2 border-2 border-secondary outline-none placeholder:text-font bg-card  rounded-l-xl rounded-r-xl" placeholder="Email" id="" />
            <textarea name="message" className="resize-none placeholder:text-font px-3 py-2 border-2 border-secondary outline-none bg-card  rounded-l-xl rounded-r-xl" cols={60} rows={4} id="" placeholder="Message"></textarea>
            <button type="submit" className="bg-gradient-to-br from-primary to-transparent rounded-r-xl rounded-l-xl py-2 font-sembld hover:bg-primary ease-in-out transform duration-300 ">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
