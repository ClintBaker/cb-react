import { useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [alert, setAlert] = useState({ message: '' })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission logic here, such as sending the data to a backend server

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    }

    // send mail using emailjs
    emailjs
      .send(
        'service_67jqwuw',
        'contact_form',
        templateParams,
        'CusjKWWw9nMykOiBS'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          setFormData({
            name: '',
            email: '',
            message: '',
          })

          setAlert({ message: 'Message successfully sent' })
          setTimeout(() => {
            setAlert({ message: '' })
          }, 4000)
        },
        function (error) {
          setAlert({ message: 'Unable to send message' })
          setTimeout(() => {
            setAlert({ message: '' })
          }, 4000)
        }
      )
  }

  return (
    <>
      <div className="h-6 mt-4 text-blue-500 text-center text-sm">
        {alert.message !== '' && alert.message}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mt-6 grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 p-2 md:p-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              className="bg-gray-600 opacity-75 p-3 rounded-md shadow-sm sm:text-sm w-full focus:outline-none focus:ring focus:ring-blue-300"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-12 md:col-span-6 p-2 md:p-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="bg-gray-600 opacity-75 p-3 rounded-md shadow-sm sm:text-sm w-full focus:outline-none focus:ring focus:ring-blue-300"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="px-2">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows={8}
            required
            className="bg-gray-600 opacity-75 p-3 rounded-md shadow-sm sm:text-sm w-full focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="px-2 w-full">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
