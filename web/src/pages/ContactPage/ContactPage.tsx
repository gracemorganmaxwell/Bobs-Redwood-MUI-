import {
  TextField,
  TextAreaField,
  Submit,
  Form,
  SubmitHandler,
  FieldError,
  EmailField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit: SubmitHandler<formValues> = (data) => {
    console.log(data)
  }

  interface formValues {
    contactType: string
    firstName: string
    lastName: string
    email: string
    address: string
    contactNumber: string
    message: string
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <div className="container mx-auto px-4 py-8">
        <h2 className="font-bold text-lg mb-2">Contact & Booking form:</h2>
        <p className="mb-4">
          Book a free onsite quote, or get in touch with any queries you and we
          will be touch.
        </p>

        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          className="space-y-4"
        >
          <select required className="w-full p-2" name="contactType">
            <option value="">Choose an option:</option>
            <option value="onsite free quote">Onsite Free Quote</option>
            <option value="inquiry">Inquiry</option>
          </select>
          <br />
          <label htmlFor="first name" className="w-full p-2">
            First Name:
          </label>
          <TextField
            name="first name"
            validation={{ required: true }}
            className="w-full p-2"
          />
          <FieldError name="first name" className="error" />
          <label htmlFor="last name" className="w-full p-2">
            Last Name:
          </label>
          <TextField
            name="last name"
            validation={{ required: true }}
            className="w-full p-2"
          />
          <FieldError name="last name" className="error" />
          <label htmlFor="email" className="w-full p-2">
            Email:
          </label>
          <EmailField
            name="email address"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^.]+\..+/,
                message: 'Please enter a valid email address',
              },
            }}
            className="w-full p-2"
          />
          <FieldError name="email address" className="error" />
          <label htmlFor="home address" className="w-full p-2">
            Address:
          </label>
          <TextField
            name="home address"
            validation={{ required: true }}
            className="w-full p-2"
          />
          <FieldError name="home address" className="error" />
          <label htmlFor="contact-number" className="w-full p-2">
            Contact Number:
          </label>
          <TextField
            name="contact-number"
            validation={{ required: true }}
            className="w-full p-2"
          />
          <FieldError name="contact-number" className="error" />
          <label htmlFor="message" className="w-full p-2">
            Message:
          </label>
          <TextAreaField
            name="message"
            className="w-full p-2"
            validation={{ required: true }}
          />
          <FieldError name="message" className="error" />
          <br />
          <Submit className="bg-blue-500 text-white px-4 py-2">Submit</Submit>
        </Form>
      </div>
    </>
  )
}

export default ContactPage
