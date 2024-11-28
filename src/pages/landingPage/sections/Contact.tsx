import AnimatedHeading from "../../../components/AnimatedHeading";
import Container from "../../../components/Container";

const Contact = () => {
  return (
    <Container>
      <AnimatedHeading>Get In Touch With Us</AnimatedHeading>
      <div className="w-full mt-10">
         <form className="flex flex-col gap-4 mx-auto w-max">
            <div>
                <label htmlFor="name">Name:</label>
                <input className="p-2 rounded-xl " type="text" id="name" name="name" />
            </div>

            <div>
                <label htmlFor="name">Email:</label>
                <input className="p-2 rounded-xl " type="text" id="name" name="name" />
            </div>

            <div>
                <label htmlFor="name">Mobile Number:</label>
                <input className="p-2 rounded-xl " type="text" id="name" name="name" />
            </div>

           

         </form>
      </div>
    </Container>
  );
};

export default Contact;
